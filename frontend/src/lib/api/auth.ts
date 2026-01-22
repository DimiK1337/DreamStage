import { api } from './client'

export type MeResponse = {
  user: { id: string; email: string | null }
  profile: {
    id: string
    role: 'artist' | 'venue'
    display_name: string | null
    created_at: string
  } | null
}

export async function getMe(): Promise<MeResponse> {
  const res = await api.get<MeResponse>('/api/auth/me')
  return res.data
}
