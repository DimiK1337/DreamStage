//frontend/src/app/payments/page.tsx

import { AppShell } from '@/components/layout/AppShell'
import { PaymentStatsRow } from '@/components/payments/PaymentStatsRow'
import { PaymentTimeline } from '@/components/payments/PaymentTimeline'
import { PaymentMethodsCard } from '@/components/payments/PaymentMethodsCard'
import { getMockPaymentsData } from '@/lib/data/payments'
import { Grid, GridItem } from '@chakra-ui/react'

export default function PaymentsPage() {
  const data = getMockPaymentsData()

  return (
    <AppShell
      title="Payments"
      subtitle="Guaranteed payment workflows"
    >
      <PaymentStatsRow stats={data.stats} />

      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4} mt={4}>
        <GridItem>
          <PaymentTimeline items={data.timeline} />
        </GridItem>

        <GridItem>
          <PaymentMethodsCard methods={data.methods} />
        </GridItem>
      </Grid>
    </AppShell>
  )
}
