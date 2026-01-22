//frontend/src/components/payments/PaymentProtectionBanner.tsx

'use client'

import { HStack, Box, Text, Badge } from '@chakra-ui/react'
import { FiShield } from 'react-icons/fi'

export function PaymentProtectionBanner() {
  return (
    <HStack
      bg="linear-gradient(90deg, rgba(16,185,129,0.25), rgba(16,185,129,0.05))"
      border="1px solid rgba(16,185,129,0.35)"
      borderRadius="14px"
      px={4}
      py={3}
      justify="space-between"
    >
      <HStack gap={3}>
        <Box
          w="36px"
          h="36px"
          borderRadius="full"
          bg="green.500"
          opacity={0.9}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FiShield />
        </Box>

        <Box>
          <Text fontWeight="800">Payment Protection Active</Text>
          <Text fontSize="sm" color="whiteAlpha.700">
            All verified payments are guaranteed and tracked
          </Text>
        </Box>
      </HStack>

      <Badge colorScheme="green" borderRadius="full">
        Protected
      </Badge>
    </HStack>
  )
}
