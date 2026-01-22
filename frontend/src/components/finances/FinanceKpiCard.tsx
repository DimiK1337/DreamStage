//frontend/src/components/finances/FinanceKpiCard.tsx

'use client'

import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FinancesCard } from './FinancesCard'
import type { FinanceKpi } from '@/lib/data/finances'
import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi'

function trendIcon(t: FinanceKpi['trend']) {
  if (t === 'up') return FiTrendingUp
  if (t === 'down') return FiTrendingDown
  return FiMinus
}

function trendColor(t: FinanceKpi['trend']) {
  if (t === 'up') return 'green.300'
  if (t === 'down') return 'red.300'
  return 'whiteAlpha.700'
}

export function FinanceKpiCard({ kpi }: { kpi: FinanceKpi }) {
  const Ico = trendIcon(kpi.trend)

  return (
    <FinancesCard p={5}>
      <HStack justify="space-between" align="start">
        <VStack align="start" gap={1}>
          <Text fontSize="sm" color="whiteAlpha.700">
            {kpi.label}
          </Text>
          <Text fontSize="2xl" fontWeight="900">
            {kpi.value}
          </Text>
          <HStack gap={2} color={trendColor(kpi.trend)} fontSize="sm" fontWeight="700">
            <Icon as={Ico} />
            <Text color="whiteAlpha.700" fontWeight="600">
              {kpi.helper}
            </Text>
          </HStack>
        </VStack>

        <Box
          w="34px"
          h="34px"
          borderRadius="12px"
          bg="whiteAlpha.100"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          display="grid"
          placeItems="center"
          color={trendColor(kpi.trend)}
        >
          <Icon as={Ico} />
        </Box>
      </HStack>
    </FinancesCard>
  )
}
