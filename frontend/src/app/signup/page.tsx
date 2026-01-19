'use client'

import { useState } from 'react'
import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import type { UserRole } from '@/lib/auth/roles'
import { getErrorMessage } from '@/lib/utils/errors'


export default function SignupPage() {
  const router = useRouter()
  const [role, setRole] = useState<UserRole>('artist')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })
      if (signUpError) throw signUpError

      const userId = data.user?.id
      if (!userId) {
        throw new Error('No user returned from Supabase signup.')
      }

      // Create profile row (requires RLS policy; we’ll add in backend step)
      const { error: profileError } = await supabase.from('profiles').insert({
        id: userId,
        role,
        display_name: displayName || null,
      })
      if (profileError) throw profileError

      router.push('/dashboard')
    } catch (err: unknown) {
      setError(getErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box minH="100vh" display="grid" placeItems="center" bg="gray.950" px={4}>
      <Box
        w="full"
        maxW="420px"
        bg="gray.900"
        borderWidth="1px"
        borderColor="whiteAlpha.100"
        borderRadius="18px"
        p={6}
      >
        <VStack align="stretch" gap={4}>
          <Box>
            <Heading size="md">Create account</Heading>
            <Text color="whiteAlpha.700" fontSize="sm">
              Choose a role and sign up.
            </Text>
          </Box>

          <HStack gap={3}>
            <Button
              flex="1"
              variant={role === 'artist' ? 'solid' : 'outline'}
              colorScheme="teal"
              onClick={() => setRole('artist')}
            >
              Artist
            </Button>
            <Button
              flex="1"
              variant={role === 'venue' ? 'solid' : 'outline'}
              colorScheme="teal"
              onClick={() => setRole('venue')}
            >
              Venue
            </Button>
          </HStack>

          <form onSubmit={onSubmit}>
            <VStack align="stretch" gap={3}>
              <Input
                placeholder="Display name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                bg="whiteAlpha.50"
                borderColor="whiteAlpha.200"
                borderRadius="14px"
              />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="whiteAlpha.50"
                borderColor="whiteAlpha.200"
                borderRadius="14px"
                required
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="whiteAlpha.50"
                borderColor="whiteAlpha.200"
                borderRadius="14px"
                required
              />

              {error ? (
                <Text color="red.300" fontSize="sm">
                  {error}
                </Text>
              ) : null}

              <Button type="submit" colorScheme="teal" borderRadius="14px" loading={loading}>
                Create account
              </Button>

              <Button
                variant="ghost"
                borderRadius="14px"
                onClick={() => router.push('/login')}
              >
                I already have an account
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
  )
}
