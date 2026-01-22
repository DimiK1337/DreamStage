//frontend/src/app/finances/page.tsx

import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { getMockFinancesData } from '@/lib/data/finances'
import { FinanceKpiRow } from '@/components/finances/FinanceKpiRow'
import { IncomeVsExpensesChart } from '@/components/finances/IncomeVsExpensesChart'
import { IncomeSourcesDonut } from '@/components/finances/IncomeSourcesDonut'
import { RecentTransactions } from '@/components/finances/RecentTransactions'

export default function FinancesPage() {
  const data = getMockFinancesData()

  return (
    <AppShell title="Finances" subtitle="Income & expense tracking">
      <VStack align="stretch" gap={4}>
        <FinanceKpiRow kpis={data.kpis} />

        <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4} alignItems="start">
          <GridItem colSpan={{ base: 12, md: 8 }}>
            <IncomeVsExpensesChart data={data.series} />
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 4 }}>
            <IncomeSourcesDonut items={data.sources} />
          </GridItem>

          <GridItem colSpan={{ base: 12 }}>
            <RecentTransactions items={data.transactions} />
          </GridItem>
        </Grid>
      </VStack>
    </AppShell>
  )
}
