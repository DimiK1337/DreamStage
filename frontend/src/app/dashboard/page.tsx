import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { StatCard } from '@/components/dashboard/StatCard'
import { getMockDashboardData } from '@/lib/data/dashboard'
import { DashboardCard } from '@/components/dashboard/DashboardCard'
import { RevenueOverviewChart } from '@/components/dashboard/RevenueOverviewChart'
import { RecentReleases } from '@/components/dashboard/RecentReleases'
import { UpcomingGigs } from '@/components/dashboard/UpcomingGigs'
import { PaymentStatus } from '@/components/dashboard/PaymentStatus'

export default function DashboardPage() {
  const data = getMockDashboardData()

  return (
    <AppShell>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4}>
        {/* KPI row */}
        {data.kpis.map((k) => (
          <GridItem key={k.key} colSpan={{ base: 12, md: 3 }}>
            <StatCard label={k.label} value={k.value} helper={k.helper} iconKey={k.iconKey} />
          </GridItem>
        ))}

        {/* Row 2: Chart + Releases */}
        <GridItem colSpan={{ base: 12, md: 8 }}>
          <DashboardCard minH="360px">
            <HStack justify="space-between" mb={4}>
              <VStack align="start" gap={0}>
                <Text fontSize="lg" fontWeight="800">Revenue Overview</Text>
                <Text fontSize="sm" color="whiteAlpha.700">Monthly income vs expenses</Text>
              </VStack>

              <HStack gap={3} color="whiteAlpha.700" fontSize="sm">
                <HStack gap={2}>
                  <Box w="10px" h="10px" borderRadius="full" bg="teal.300" />
                  <Text>Revenue</Text>
                </HStack>
                <HStack gap={2}>
                  <Box w="10px" h="10px" borderRadius="full" bg="yellow.300" />
                  <Text>Expenses</Text>
                </HStack>
              </HStack>
            </HStack>

            <Box
              mt={2}
              borderRadius="14px"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              p={3}
            >
              <RevenueOverviewChart data={data.revenueSeries} />
            </Box>
          </DashboardCard>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 4 }}>
          <RecentReleases items={data.releases} />
        </GridItem>

        {/* Row 3: Upcoming gigs + Payments */}
        <GridItem colSpan={{ base: 12, md: 8 }}>
          <UpcomingGigs items={data.gigs} />
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 4 }}>
          <PaymentStatus items={data.payments} />
        </GridItem>
      </Grid>
    </AppShell>
  )
}
