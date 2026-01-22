//frontend/src/components/payments/PaymentStatCard.tsx

'use client'

import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {
  FiDollarSign,
  FiClock,
  FiTrendingUp,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type PaymentStatIconKey = 'paid' | 'pending' | 'expected'

const ICONS: Record<PaymentStatIconKey, IconType> = {
  paid: FiDollarSign,
  pending: FiClock,
  expected: FiTrendingUp,
}

export function PaymentStatCard({
  label,
  value,
  iconKey,
}: {
  label: string
  value: string
  iconKey: PaymentStatIconKey
}) {
  const IconCmp = ICONS[iconKey]

  return (
    <Box
      bg="gray.900"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="18px"
      p={5}
    >
      <HStack justify="space-between">
        <VStack align="start" gap={1}>
          <Text fontSize="sm" color="whiteAlpha.700">
            {label}
          </Text>
          <Text fontSize="2xl" fontWeight="800">
            {value}
          </Text>
        </VStack>

        <Box
          bg="whiteAlpha.100"
          borderRadius="14px"
          w="40px"
          h="40px"
          display="grid"
          placeItems="center"
        >
          <Icon as={IconCmp} />
        </Box>
      </HStack>
    </Box>
  )
}
