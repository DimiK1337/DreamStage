//frontend/src/components/finances/IncomeSourcesDonut.tsx

'use client'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { FinancesCard } from './FinancesCard'
import type { IncomeSource } from '@/lib/data/finances'
import { format } from '@/lib/data/finances'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export function IncomeSourcesDonut({ items }: { items: IncomeSource[] }) {
  const total = items.reduce((a, b) => a + b.amount, 0)

  // simple palette (can refine later)
  const colors = ['#2dd4bf', '#fbbf24', '#a855f7', '#fb7185', '#60a5fa']

  return (
    <FinancesCard p={5} minH="320px">
      <Text fontWeight="900" mb={3}>
        Income Sources
      </Text>

      <HStack align="start" gap={6}>
        <Box h="200px" w="200px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={items}
                dataKey="amount"
                nameKey="label"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
              >
                {items.map((_, idx) => (
                  <Cell key={idx} fill={colors[idx % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <VStack align="stretch" gap={3} flex="1">
          {items.map((x, idx) => {
            const pct = total === 0 ? 0 : Math.round((x.amount / total) * 100)
            return (
              <HStack key={x.key} justify="space-between">
                <HStack gap={2}>
                  <Box w="8px" h="8px" borderRadius="full" bg={colors[idx % colors.length]} />
                  <Text fontSize="sm" color="whiteAlpha.700">
                    {x.label}
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <Text fontWeight="800">{format.money(x.amount, { compact: true })}</Text>
                  <Text fontSize="sm" color="whiteAlpha.600">
                    {pct}%
                  </Text>
                </HStack>
              </HStack>
            )
          })}
        </VStack>
      </HStack>
    </FinancesCard>
  )
}
