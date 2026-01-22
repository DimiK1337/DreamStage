'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getMe } from '@/lib/api/auth'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const me = await getMe()

        if (!me.profile) {
          router.replace('/signup')
          return
        }

        setReady(true)
      } catch {
        router.replace('/login')
      }
    }

    checkAuth()
  }, [router])

  if (!ready) return null
  return <>{children}</>
}
