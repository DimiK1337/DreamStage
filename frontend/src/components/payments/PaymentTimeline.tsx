//frontend/src/components/payments/PaymentTimeline.tsx

'use client'

import { VStack } from '@chakra-ui/react'
import { PaymentTimelineItem } from './PaymentTimelineItem'
import type { PaymentTimelineItem as Item } from '@/lib/data/payments'

export function PaymentTimeline({ items }: { items: Item[] }) {
  return (
    <VStack align="stretch" gap={3}>
      {items.map((item) => (
        <PaymentTimelineItem key={item.id} item={item} />
      ))}
    </VStack>
  )
}

