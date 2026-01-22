//frontend/src/components/touring/TourKpiRow.tsx

'use client'

import { Grid, GridItem, HStack, Text, VStack, Box, Icon } from '@chakra-ui/react'
import { TouringCard } from './TouringCard'
import type { TouringKpis } from '@/lib/data/touring'
import { FiDollarSign, FiTrendingDown, FiCreditCard } from 'react-icons/fi'

// Chakra v3 progress: use composition API
import { ProgressRoot, ProgressTrack, ProgressRange } from '@chakra-ui/react'

function money(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function TourKpiRow({ kpis }: { kpis: TouringKpis }) {
  const pct = Math.min(100, Math.round((kpis.budget.spent / kpis.budget.budget) * 100))
  const under = kpis.budget.budget - kpis.budget.spent

  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4} mb={4}>
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <TouringCard p={5}>
          <HStack justify="space-between" align="start">
            <VStack align="start" gap={1}>
              <Text fontSize="sm" color="whiteAlpha.700">
                Tour Budget
              </Text>
              <Text fontSize="2xl" fontWeight="900">
                {money(kpis.budget.spent)}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.600">
                of {money(kpis.budget.budget)} budget
              </Text>
            </VStack>

            <VStack align="end" gap={1}>
              <HStack color="green.300" fontWeight="900">
                <Icon as={FiTrendingDown} />
                <Text>{money(under)}</Text>
              </HStack>
              <Text fontSize="sm" color="whiteAlpha.600">
                under budget
              </Text>
            </VStack>
          </HStack>

          <Box mt={4}>
            <ProgressRoot value={pct} borderRadius="999px" bg="whiteAlpha.100" height="8px">
              <ProgressTrack borderRadius="999px">
                <ProgressRange borderRadius="999px" />
              </ProgressTrack>
            </ProgressRoot>

            <Text mt={2} fontSize="sm" color="whiteAlpha.700">
              {pct}% of budget used
            </Text>
          </Box>
        </TouringCard>
      </GridItem>

      <GridItem colSpan={{ base: 12, md: 3 }}>
        <TouringCard p={5}>
          <HStack gap={3} align="start">
            <Box
              w="34px"
              h="34px"
              borderRadius="12px"
              bg="teal.900"
              borderWidth="1px"
              borderColor="teal.700"
              display="grid"
              placeItems="center"
              color="teal.200"
              flexShrink={0}
            >
              <FiDollarSign />
            </Box>

            <VStack align="start" gap={1}>
              <Text fontSize="sm" color="whiteAlpha.700">
                Potential Savings
              </Text>
              <Text fontSize="xl" fontWeight="900" color="green.300">
                {money(kpis.potentialSavings)}
              </Text>
            </VStack>
          </HStack>
        </TouringCard>
      </GridItem>

      <GridItem colSpan={{ base: 12, md: 3 }}>
        <TouringCard p={5}>
          <HStack gap={3} align="start">
            <Box
              w="34px"
              h="34px"
              borderRadius="12px"
              bg="teal.900"
              borderWidth="1px"
              borderColor="teal.700"
              display="grid"
              placeItems="center"
              color="teal.200"
              flexShrink={0}
            >
              <FiCreditCard />
            </Box>

            <VStack align="start" gap={1}>
              <Text fontSize="sm" color="whiteAlpha.700">
                Cost Per Show
              </Text>
              <Text fontSize="xl" fontWeight="900">
                {money(kpis.costPerShow)}
              </Text>
            </VStack>
          </HStack>
        </TouringCard>
      </GridItem>
    </Grid>
  )
}
