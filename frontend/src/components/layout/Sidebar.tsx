//src/components/layout/Sidebar.tsx
'use client'

import { Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react'
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
        {NAV.map((item) => (
          <Button
            key={item.label}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            variant="ghost"
            colorScheme="whiteAlpha"
            borderRadius="12px"
          >
            <HStack gap={3}>
              <Icon as={item.icon} />
              <Text display={{ base: 'none', md: 'block' }}>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </VStack>

      <Box mt="auto" pt={8}>
        <Button
          w="full"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          variant="ghost"
          colorScheme="whiteAlpha"
          borderRadius="12px"
        >
          <HStack gap={3}>
            <Icon as={FiSettings} />
            <Text display={{ base: 'none', md: 'block' }}>Settings</Text>
          </HStack>
        </Button>
      </Box>
    </Box>
  )
}
