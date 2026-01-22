//frontend/src/components/dashboard/StatCard.tsx
'use client'

import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiCalendar, FiDollarSign, FiMusic, FiTrendingUp } from 'react-icons/fi'
import type { IconKey } from '@/lib/data/dashboard'
import type { IconType } from 'react-icons'

const ICONS: Record<IconKey, IconType> = {
  dollar: FiDollarSign,
  music: FiMusic,
  calendar: FiCalendar,
  trend: FiTrendingUp,
}

export function StatCard({
  label,
  value,
  helper,
  iconKey,
}: {
  label: string
  value: string
  helper?: string
  iconKey: IconKey
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
      <HStack align="start" justify="space-between">
        <VStack align="start" gap={1}>
          <Text fontSize="sm" color="whiteAlpha.700">
            {label}
          </Text>
          <Text fontSize="2xl" fontWeight="800">
            {value}
          </Text>
          {helper ? (
            <Text fontSize="sm" color="teal.300">
              {helper}
            </Text>
          ) : null}
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
