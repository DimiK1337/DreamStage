'use client'

import { useState } from 'react'
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

import { getErrorMessage } from '@/lib/utils/errors'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (signInError) throw signInError

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
            <Heading size="md">Log in</Heading>
            <Text color="whiteAlpha.700" fontSize="sm">
              Welcome back.
            </Text>
          </Box>

          <form onSubmit={onSubmit}>
            <VStack align="stretch" gap={3}>
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
                Log in
              </Button>

              <Button variant="ghost" borderRadius="14px" onClick={() => router.push('/signup')}>
                Create an account
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
  )
}
