//frontend/src/app/touring/page.tsx

import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { getMockTouringData } from '@/lib/data/touring'
import { TourKpiRow } from '@/components/touring/TourKpiRow'
import { CostBreakdownCard } from '@/components/touring/CostBreakdownCard'
import { CostOptimizationsCard } from '@/components/touring/CostOptimizationsCard'
import { CityBreakdownTable } from '@/components/touring/CityBreakdownTable'

export default function TouringPage() {
  const data = getMockTouringData()

  return (
    <AppShell title="Touring" subtitle="Cost optimization & route planning">
      <VStack align="stretch" gap={4}>
        <TourKpiRow kpis={data.kpis} />

        <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4} alignItems="start">
          <GridItem colSpan={{ base: 12, md: 5 }}>
            <CostBreakdownCard items={data.categories} />
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 7 }}>
            <CostOptimizationsCard items={data.optimizations} />
          </GridItem>
        </Grid>

        <CityBreakdownTable rows={data.cities} />
      </VStack>
    </AppShell>
  )
}
