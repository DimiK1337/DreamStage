//frontend/src/components/dashboard/RevenueOverviewChart.tsx

'use client'

import { Box } from '@chakra-ui/react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { RevenuePoint } from '@/lib/data/dashboard'

function formatCurrencyTick(v: number) {
  if (v >= 1000) return `$${Math.round(v / 1000)}k`
  return `$${v}`
}

function formatCurrency(v: number) {
  return v.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function RevenueOverviewChart({ data }: { data: RevenuePoint[] }) {
  return (
    <Box h="260px" w="full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 14, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chakra-colors-teal-300)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--chakra-colors-teal-300)" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="expFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chakra-colors-yellow-300)" stopOpacity={0.30} />
              <stop offset="100%" stopColor="var(--chakra-colors-yellow-300)" stopOpacity={0.0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatCurrencyTick}
            width={44}
          />

          <Tooltip
            contentStyle={{
              background: 'rgba(15, 17, 20, 0.95)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12,
              color: 'white',
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.75)' }}
            formatter={(value: unknown, name?: string) => {
              const v = typeof value === 'number' ? value : 0
              const label = name === 'revenue' ? 'Revenue' : 'Expenses'
              return [formatCurrency(v), label] as const
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="var(--chakra-colors-teal-300)"
            strokeWidth={2}
            fill="url(#revFill)"
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="var(--chakra-colors-yellow-300)"
            strokeWidth={2}
            fill="url(#expFill)"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
