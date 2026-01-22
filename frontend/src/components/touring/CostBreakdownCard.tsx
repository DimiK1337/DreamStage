//frontend/src/components/touring/CostBreakdownCard.tsx

"use client"

import { HStack, Text, VStack, Box, Icon } from '@chakra-ui/react'
import { TouringCard } from './TouringCard'
import type { CostCategory } from '@/lib/data/touring'
import { FiTruck, FiHome, FiUsers, FiCoffee, FiMoreHorizontal } from 'react-icons/fi'

function money(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function iconFor(key: CostCategory['iconKey']) {
  if (key === 'transport') return FiTruck
  if (key === 'hotel') return FiHome
  if (key === 'crew') return FiUsers
  if (key === 'perdiem') return FiCoffee
  return FiMoreHorizontal
}

export function CostBreakdownCard({ items }: { items: CostCategory[] }) {
  const max = Math.max(...items.map((x) => x.amount))

  return (
    <TouringCard p={5}>
      <Text fontWeight="900" mb={3}>
        Cost Breakdown
      </Text>

      <VStack align="stretch" gap={4}>
        {items.map((x) => {
          const pct = Math.round((x.amount / max) * 100)
          const Ico = iconFor(x.iconKey)

          return (
            <Box key={x.key}>
              <HStack justify="space-between" mb={2}>
                <HStack gap={2} color="whiteAlpha.800">
                  <Icon as={Ico} color="whiteAlpha.600" />
                  <Text fontSize="sm">{x.label}</Text>
                </HStack>
                <Text fontSize="sm" fontWeight="800">
                  {money(x.amount)}
                </Text>
              </HStack>

              <Box
                h="6px"
                borderRadius="999px"
                bg="whiteAlpha.100"
                overflow="hidden"
              >
                <Box h="full" w={`${pct}%`} bg="teal.300" />
              </Box>
            </Box>
          )
        })}
      </VStack>
    </TouringCard>
  )
}
