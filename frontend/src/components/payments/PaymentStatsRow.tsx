//frontend/src/components/payments/PaymentStatsRow.tsx

'use client'

import { SimpleGrid } from '@chakra-ui/react'
import { PaymentStatCard } from './PaymentStatCard'
import type { PaymentStat } from '@/lib/data/payments'

export function PaymentStatsRow({ stats }: { stats: PaymentStat[] }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
      {stats.map((s) => (
        <PaymentStatCard
          key={s.label}
          label={s.label}
          value={s.value}
          iconKey={s.iconKey}
        />
      ))}
    </SimpleGrid>
  )
}
