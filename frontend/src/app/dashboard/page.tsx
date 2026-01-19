import { Box, Button, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { StatCard } from '@/components/dashboard/StatCard'
import { getMockDashboardData } from '@/lib/data/dashboard'

export default function DashboardPage() {
  const data = getMockDashboardData()

  return (
    <AppShell>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4}>
        {data.kpis.map((k) => (
          <GridItem key={k.key} colSpan={{ base: 12, md: 3 }}>
            <StatCard label={k.label} value={k.value} helper={k.helper} iconKey={k.iconKey} />
          </GridItem>
        ))}

        <GridItem colSpan={{ base: 12, md: 8 }}>
          <Box
            bg="gray.900"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            borderRadius="18px"
            p={5}
            minH="360px"
          >
            <HStack justify="space-between" mb={4}>
              <VStack align="start" gap={0}>
                <Text fontSize="lg" fontWeight="800">
                  Revenue Overview
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  Monthly income vs expenses
                </Text>
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
              mt={6}
              h="260px"
              borderRadius="14px"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Box
            bg="gray.900"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            borderRadius="18px"
            p={5}
            minH="360px"
          >
            <HStack justify="space-between" mb={4}>
              <VStack align="start" gap={0}>
                <Text fontSize="lg" fontWeight="800">
                  Recent Releases
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  Track your distribution
                </Text>
              </VStack>

              <Button size="sm" variant="ghost" colorScheme="teal" borderRadius="12px">
                View all
              </Button>
            </HStack>

            <VStack align="stretch" gap={3} mt={4}>
              {data.releases.map((x) => (
                <Box
                  key={x.id}
                  p={4}
                  borderRadius="14px"
                  bg="whiteAlpha.50"
                  borderWidth="1px"
                  borderColor="whiteAlpha.100"
                >
                  <HStack justify="space-between" align="start">
                    <VStack align="start" gap={0}>
                      <Text fontWeight="700">{x.title}</Text>
                      <Text fontSize="sm" color="whiteAlpha.700">
                        {x.type}
                      </Text>
                    </VStack>

                    <VStack align="end" gap={0}>
                      <Text fontWeight="800">{x.streams}</Text>
                      <Text fontSize="sm" color="teal.300">
                        {x.revenue}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </AppShell>
  )
}
