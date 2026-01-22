//frontend/src/components/payments/PaymentTimelineItem.tsx

'use client'

import {
  Box,
  HStack,
  Text,
  Badge,
  ProgressRoot,
  ProgressTrack,
  ProgressRange,
} from '@chakra-ui/react'
import type { PaymentTimelineItem as Item } from '@/lib/data/payments'
import { type PaymentTimelineStatus } from '@/lib/data/payments'

const STATUS_COLOR: Record<PaymentTimelineStatus, string> = {
  paid: 'green.400',
  processing: 'teal.400',
  scheduled: 'yellow.400',
  pending: 'gray.400',
}


export function PaymentTimelineItem({ item }: { item: Item }) {
  return (
    <Box
      bg="rgba(0,0,0,0.25)"
      borderRadius="14px"
      px={4}
      py={3}
    >
      <HStack justify="space-between" mb={2}>
        <Box>
          <Text fontWeight="700">{item.title}</Text>
          <Text fontSize="sm" color="whiteAlpha.600">
            {item.subtitle}
          </Text>
        </Box>

        <Box textAlign="right">
          <Text fontWeight="800">{item.amount}</Text>
          <Badge colorScheme={STATUS_COLOR[item.status]} borderRadius="full">
            {item.status}
          </Badge>
        </Box>
      </HStack>

      {typeof item.progress === 'number' && (
        <ProgressRoot value={item.progress}>
          <ProgressTrack>
            <ProgressRange bg="teal.400" />
          </ProgressTrack>
        </ProgressRoot>
      )}
    </Box>
  )
}
