import axios, { AxiosHeaders } from 'axios'
import { supabase } from '@/lib/supabase/client'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
if (!baseURL) throw new Error('Missing NEXT_PUBLIC_API_BASE_URL')

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15_000,
})

api.interceptors.request.use(async (config) => {
  const { data } = await supabase.auth.getSession()
  const token = data.session?.access_token

  if (token) {
    if (config.headers instanceof AxiosHeaders) {
      config.headers.set('Authorization', `Bearer ${token}`)
    } else {
      config.headers = config.headers ?? {}
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }

  return config
})
