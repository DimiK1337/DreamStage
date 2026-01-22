// backend/api/src/app/api/auth/me/route.ts
import { supabaseAdmin } from '@/lib/supabase/admin'

export const runtime = 'nodejs'

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

function getBearerToken(req: Request): string | null {
  const h = req.headers.get('authorization')
  if (!h) return null

  const match = h.match(/^Bearer\s+(.+)$/i)
  return match?.[1] ?? null
}

export async function GET(req: Request) {
  const token = getBearerToken(req)
  if (!token) return json(401, { error: 'missing_bearer_token' })

  const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token)
  if (userErr || !userData.user) return json(401, { error: 'invalid_token' })

  const user = userData.user

  const { data: profile, error: profErr } = await supabaseAdmin
    .from('profiles')
    .select('id, role, display_name, created_at')
    .eq('id', user.id)
    .maybeSingle()

  if (profErr) {
    // log full details server-side, return generic error to client
    console.error('profiles select error', profErr)
    return json(500, { error: 'profile_lookup_failed' })
  }

  return json(200, {
    user: { id: user.id, email: user.email ?? null },
    profile: profile ?? null,
  })
}
