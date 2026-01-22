'use client'

import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputElement,
  InputGroup,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FiBell, FiLogOut, FiPlus, FiSearch } from 'react-icons/fi'
import { supabase } from '@/lib/supabase/client'
import { toaster } from '@/components/ui/toaster'
import { getErrorMessage } from '@/lib/utils/errors'

export function Topbar() {
  const router = useRouter()

  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/login')
    } catch (err: unknown) {
      toaster.create({
        title: 'Logout failed',
        description: getErrorMessage(err),
        type: 'error',
        duration: 6000,
        closable: true,
      })
    }
  }

  return (
    <HStack
      px={{ base: 4, md: 8 }}
      py={4}
      borderBottomWidth="1px"
      borderColor="whiteAlpha.100"
      bg="gray.950"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Box>
        <Text fontSize="lg" fontWeight="700">
          Dashboard
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          Welcome back, here&apos;s your overview
        </Text>
      </Box>

      <Spacer />

      <InputGroup maxW="420px" display={{ base: 'none', md: 'block' }}>
        <>
          <InputElement pointerEvents="none">
            <Icon as={FiSearch} color="whiteAlpha.600" />
          </InputElement>

          <Input
            placeholder="Search..."
            ps="10"
            bg="whiteAlpha.50"
            borderColor="whiteAlpha.200"
            borderRadius="14px"
            _hover={{ borderColor: 'whiteAlpha.300' }}
            _focus={{ borderColor: 'teal.300' }}
          />
        </>
      </InputGroup>

      <Button variant="ghost" borderRadius="14px">
        <Icon as={FiBell} />
      </Button>

      <Button colorScheme="teal" borderRadius="14px">
        <Icon as={FiPlus} mr={2} />
        New
      </Button>

      <Button
        variant="outline"
        borderRadius="14px"
        borderColor="whiteAlpha.300"
        onClick={handleLogout}
      >
        <Icon as={FiLogOut} mr={2} />
        Log out
      </Button>
    </HStack>
  )
}
