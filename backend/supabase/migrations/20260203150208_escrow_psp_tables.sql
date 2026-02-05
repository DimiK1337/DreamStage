-- =============================================================================
-- DreamStage Escrow / Payments (PSP-ready schema)
-- =============================================================================

-- Enums to support multiple PSPs and modes (test/live)
do $$
begin
  if not exists (select 1 from pg_type where typname = 'psp_provider') then
    create type public.psp_provider as enum ('stripe'); -- extend later: 'adyen','mollie',...
  end if;

  if not exists (select 1 from pg_type where typname = 'psp_mode') then
    create type public.psp_mode as enum ('test', 'live');
  end if;
end $$;

-- Escrows table: one row per gig escrow instance
create table if not exists public.escrows (
  id uuid primary key default gen_random_uuid(),

  gig_id uuid null,
  venue_id uuid null,
  artist_id uuid not null,

  amount bigint not null check (amount > 0),
  currency text not null default 'EUR',

  business_status text not null check (
    business_status in (
      'pending_funding',
      'funded',
      'performed',
      'released',
      'refunded',
      'disputed',
      'failed',
      'canceled'
    )
  ),

  -- PSP plumbing (future-proof for multiple PSPs)
  psp_provider public.psp_provider not null default 'stripe',
  psp_mode public.psp_mode not null default 'test',

  -- PSP object identifiers (Stripe IDs today; keep names neutral)
  psp_payment_id text null,   -- Stripe: payment_intent.id
  psp_charge_id text null,    -- Stripe: charge.id (optional)
  psp_transfer_id text null,  -- Stripe: transfer.id (optional)
  psp_refund_id text null,    -- Stripe: refund.id (optional)

  funded_at timestamptz null,
  released_at timestamptz null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Column comment with business_status definitions (as requested)
comment on column public.escrows.business_status is
'Escrow business status (UI-facing):
- pending_funding: escrow created; deposit not yet secured (payment intent not succeeded)
- funded: deposit succeeded; funds secured/locked
- performed: gig performance confirmed (venue-confirmed or auto-confirm fallback)
- released: funds released to artist destination (e.g., Transfer created)
- refunded: funds returned to venue (full refund in V1)
- disputed: escrow frozen due to dispute/manual hold; no release until resolved
- failed: funding attempt failed/canceled and escrow requires restart
- canceled: gig/escrow canceled by business decision (often leads to refund if funded)';

comment on column public.escrows.psp_payment_id is
'PSP payment object ID (Stripe: payment_intent.id). Used for webhook -> escrow lookup.';

comment on column public.escrows.psp_charge_id is
'PSP charge ID (Stripe: charge.id). Optional; useful for reconciliation.';

comment on column public.escrows.psp_transfer_id is
'PSP transfer/release ID (Stripe: transfer.id). Set when escrow is released.';

comment on column public.escrows.psp_refund_id is
'PSP refund ID (Stripe: refund.id). Set when escrow is refunded.';

-- Indexes for webhook lookup + UI queries
create index if not exists escrows_psp_payment_lookup_idx
  on public.escrows (psp_provider, psp_mode, psp_payment_id);

create index if not exists escrows_artist_idx
  on public.escrows (artist_id);

create index if not exists escrows_venue_idx
  on public.escrows (venue_id);

create index if not exists escrows_status_idx
  on public.escrows (business_status);

-- Artist payout accounts: destination info (NOT payout history)
create table if not exists public.artist_payout_accounts (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid not null,

  psp_provider public.psp_provider not null default 'stripe',
  psp_mode public.psp_mode not null default 'test',

  psp_account_id text not null, -- Stripe Connect account id (acct_...)

  charges_enabled boolean null,
  payouts_enabled boolean null,
  kyc_status text null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (artist_id, psp_provider, psp_mode)
);

comment on table public.artist_payout_accounts is
'Stores payout destination / connected account per artist and PSP mode. Not a record of funds released.';

-- Webhook events for idempotency and debugging
create table if not exists public.psp_webhook_events (
  id uuid primary key default gen_random_uuid(),

  psp_provider public.psp_provider not null default 'stripe',
  psp_mode public.psp_mode not null default 'test',

  event_id text not null,     -- Stripe: event.id
  event_type text not null,   -- Stripe: event.type
  received_at timestamptz not null default now(),
  processed_at timestamptz null,

  payload jsonb null,

  unique (psp_provider, psp_mode, event_id)
);

comment on table public.psp_webhook_events is
'Webhook idempotency log. Store Stripe event.id to prevent double-processing on retries.';

create index if not exists psp_webhook_events_received_idx
  on public.psp_webhook_events (received_at);

-- updated_at trigger helper
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists escrows_set_updated_at on public.escrows;
create trigger escrows_set_updated_at
before update on public.escrows
for each row execute function public.set_updated_at();

drop trigger if exists artist_payout_accounts_set_updated_at on public.artist_payout_accounts;
create trigger artist_payout_accounts_set_updated_at
before update on public.artist_payout_accounts
for each row execute function public.set_updated_at();
