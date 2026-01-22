//frontend/src/components/touring/CostOptimizationsCard.tsx

'use client'

import { Button, HStack, Text, VStack, Box, Badge } from '@chakra-ui/react'
import { TouringCard } from './TouringCard'
import type { Optimization } from '@/lib/data/touring'

function money(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function impactBadge(impact: Optimization['impact']) {
  if (impact === 'high') {
    return { bg: 'green.900', color: 'green.200', borderColor: 'green.700', label: 'high impact' }
  }
  return { bg: 'yellow.900', color: 'yellow.200', borderColor: 'yellow.700', label: 'medium impact' }
}

export function CostOptimizationsCard({ items }: { items: Optimization[] }) {
  return (
    <TouringCard p={5}>
      <HStack justify="space-between" mb={3}>
        <Text fontWeight="900">Cost Optimizations</Text>
        <Button size="sm" variant="outline" borderRadius="12px" borderColor="whiteAlpha.200">
          Apply All
        </Button>
      </HStack>

      <VStack align="stretch" gap={3}>
        {items.map((x) => {
          const b = impactBadge(x.impact)

          return (
            <Box
              key={x.id}
              p={4}
              borderRadius="16px"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
            >
              <HStack justify="space-between" align="start" mb={2}>
                <VStack align="start" gap={1}>
                  <HStack gap={2}>
                    <Text fontWeight="900">{x.title}</Text>
                    <Badge
                      px={2}
                      py={0.5}
                      borderRadius="999px"
                      textTransform="lowercase"
                      bg={b.bg}
                      color={b.color}
                      borderWidth="1px"
                      borderColor={b.borderColor}
                    >
                      {b.label}
                    </Badge>
                  </HStack>

                  <Text fontSize="sm" color="whiteAlpha.700">
                    {x.description}
                  </Text>
                </VStack>

                <Button size="sm" variant="ghost" colorScheme="teal" borderRadius="12px">
                  Apply
                </Button>
              </HStack>

              <Text fontWeight="900" color="green.300">
                Save {money(x.savings)}
              </Text>
            </Box>
          )
        })}
      </VStack>
    </TouringCard>
  )
}
