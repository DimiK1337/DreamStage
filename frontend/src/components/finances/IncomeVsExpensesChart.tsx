//frontend/src/components/finances/IncomeVsExpensesChart.tsx

'use client'

import { Box, HStack, Text, Button } from '@chakra-ui/react'
import { FinancesCard } from './FinancesCard'
import type { IncomeExpensePoint } from '@/lib/data/finances'
import { FiFilter, FiDownload } from 'react-icons/fi'

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function moneyTick(n: number) {
  if (n >= 1000) return `$${Math.round(n / 1000)}k`
  return `$${n}`
}

function fmtMoney(n: number) {
  return n.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

function TooltipBox({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name?: string; value?: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null

  const income = payload.find((p) => p.name === 'income')?.value ?? 0
  const expenses = payload.find((p) => p.name === 'expenses')?.value ?? 0

  return (
    <Box
      bg="rgba(0,0,0,0.85)"
      border="1px solid rgba(255,255,255,0.15)"
      borderRadius="12px"
      px={3}
      py={2}
      color="white"
    >
      <Text fontWeight="800" mb={1}>
        {label}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.800">
        Expenses : {fmtMoney(expenses)}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.800">
        Income : {fmtMoney(income)}
      </Text>
    </Box>
  )
}

export function IncomeVsExpensesChart({ data }: { data: IncomeExpensePoint[] }) {
  const INCOME = '#1ad6b5'   // teal
  const EXPENSES = '#f4c430' // yellow
  const ACTIVE_BAND = 'rgba(255,255,255,0.12)'

  return (
    <FinancesCard p={5} minH="320px">
      <HStack justify="space-between" mb={3}>
        <Box>
          <Text fontWeight="900">Income vs Expenses</Text>
          <Text fontSize="sm" color="whiteAlpha.700">
            Last 6 months
          </Text>
        </Box>

        <HStack gap={2}>
          <Button size="sm" variant="outline" borderRadius="12px" borderColor="whiteAlpha.200">
            <FiFilter />
            <Box as="span" ml={2}>
              Filter
            </Box>
          </Button>
          <Button size="sm" variant="outline" borderRadius="12px" borderColor="whiteAlpha.200">
            <FiDownload />
            <Box as="span" ml={2}>
              Export
            </Box>
          </Button>
        </HStack>
      </HStack>

      <Box h="240px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={22} barGap={10}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.35)"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="rgba(255,255,255,0.35)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => moneyTick(Number(v))}
            />

            <Tooltip
              cursor={{ fill: ACTIVE_BAND }}
              content={({ active, payload, label }) => (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <TooltipBox active={active} payload={payload as any} label={label as any} />
              )}
            />

            {/* Lovable-style bars */}
            <Bar
              dataKey="income"
              fill={INCOME}
              radius={[10, 10, 0, 0]}
            />

            <Bar
              dataKey="expenses"
              fill={EXPENSES}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </FinancesCard>
  )
}
