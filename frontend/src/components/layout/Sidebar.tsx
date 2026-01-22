//src/components/layout/Sidebar.tsx

'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, HStack, Icon, Text, VStack, Link } from '@chakra-ui/react'
import {
  FiHome,
  FiMusic,
  FiCalendar,
  FiMap,
  FiDollarSign,
  FiCreditCard,
  FiSettings,
} from 'react-icons/fi'

const NAV = [
  { label: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { label: 'Distribution', icon: FiMusic, href: '/distribution' },
  { label: 'Bookings', icon: FiCalendar, href: '/bookings' },
  { label: 'Touring', icon: FiMap, href: '/touring' },
  { label: 'Finances', icon: FiDollarSign, href: '/finances' },
  { label: 'Payments', icon: FiCreditCard, href: '/payments' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <Box
      w={{ base: '72px', md: '260px' }}
      bg="gray.900"
      borderRightWidth="1px"
      borderColor="whiteAlpha.100"
      px={{ base: 2, md: 4 }}
      py={5}
      position="sticky"
      top={0}
      h="100vh"
      display="flex"
      flexDir="column"
    >
      <HStack gap={3} mb={8} px={{ base: 1, md: 2 }}>
        <Box w="36px" h="36px" borderRadius="12px" bg="teal.400" opacity={0.9} />
        <Text display={{ base: 'none', md: 'block' }} fontWeight="700">
          DreamStage
        </Text>
      </HStack>

      <VStack align="stretch" gap={1}>
        {NAV.map((item) => {
          const active = pathname === item.href

          return (
            <Link
              key={item.label}
              as={NextLink}
              href={item.href}
              _hover={{ textDecoration: 'none' }}
            >
              <HStack
                px={3}
                py={2.5}
                borderRadius="12px"
                justify={{ base: 'center', md: 'flex-start' }}
                bg={active ? 'whiteAlpha.100' : 'transparent'}
                _hover={{ bg: 'whiteAlpha.100' }}
                transition="background 0.15s ease"
              >
                <Icon as={item.icon} />
                <Text display={{ base: 'none', md: 'block' }}>{item.label}</Text>
              </HStack>
            </Link>
          )
        })}
      </VStack>

      <Box mt="auto" pt={8}>
        <Link as={NextLink} href="/settings" _hover={{ textDecoration: 'none' }}>
          <HStack
            px={3}
            py={2.5}
            borderRadius="12px"
            justify={{ base: 'center', md: 'flex-start' }}
            _hover={{ bg: 'whiteAlpha.100' }}
          >
            <Icon as={FiSettings} />
            <Text display={{ base: 'none', md: 'block' }}>Settings</Text>
          </HStack>
        </Link>
      </Box>
    </Box>
  )
}
