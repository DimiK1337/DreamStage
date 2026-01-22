-- Recreate profiles RLS policies using SELECT-wrapped auth calls
-- This prevents per-row re-evaluation of auth.uid() and improves performance

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
using ((select auth.uid()) = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
with check ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);
