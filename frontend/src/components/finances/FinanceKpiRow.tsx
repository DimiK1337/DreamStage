//frontend/src/components/finances/FinanceKpiRow.tsx

'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import type { FinanceKpi } from '@/lib/data/finances'
import { FinanceKpiCard } from './FinanceKpiCard'

export function FinanceKpiRow({ kpis }: { kpis: FinanceKpi[] }) {
  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4} mb={4}>
      {kpis.map((k) => (
        <GridItem key={k.key} colSpan={{ base: 12, md: 3 }}>
          <FinanceKpiCard kpi={k} />
        </GridItem>
      ))}
    </Grid>
  )
}
