//frontend/src/lib/data/finances.ts

export type FinanceKpi = {
  key: 'income' | 'expenses' | 'profit' | 'margin'
  label: string
  value: string
  helper: string
  trend: 'up' | 'down' | 'flat'
}

export type IncomeExpensePoint = {
  month: string
  income: number
  expenses: number
}

export type IncomeSource = {
  key: string
  label: string
  amount: number
}

export type Transaction = {
  id: string
  title: string
  dateLabel: string
  type: 'income' | 'expense'
  amount: number
}

export type FinancesData = {
  kpis: FinanceKpi[]
  series: IncomeExpensePoint[]
  sources: IncomeSource[]
  transactions: Transaction[]
}

function money(n: number, opts?: { compact?: boolean }) {
  const compact = opts?.compact ?? false
  return n.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    notation: compact ? 'compact' : 'standard',
  })
}

export function getMockFinancesData(): FinancesData {
  const income = 77100
  const expenses = 17600
  const profit = income - expenses
  const margin = profit / income

  return {
    kpis: [
      {
        key: 'income',
        label: 'Total Income',
        value: money(income),
        helper: '+18.5% vs last quarter',
        trend: 'up',
      },
      {
        key: 'expenses',
        label: 'Total Expenses',
        value: money(expenses),
        helper: '-4.2% vs last quarter',
        trend: 'down',
      },
      {
        key: 'profit',
        label: 'Net Profit',
        value: money(profit),
        helper: '+24.8% vs last quarter',
        trend: 'up',
      },
      {
        key: 'margin',
        label: 'Profit Margin',
        value: `${(margin * 100).toFixed(1)}%`,
        helper: 'Excellent performance',
        trend: 'up',
      },
    ],
    series: [
      { month: 'Aug', income: 29000, expenses: 12000 },
      { month: 'Sep', income: 32000, expenses: 14000 },
      { month: 'Oct', income: 41000, expenses: 16000 },
      { month: 'Nov', income: 38000, expenses: 15000 },
      { month: 'Dec', income: 46000, expenses: 17000 },
      { month: 'Jan', income: 49000, expenses: 16500 },
    ],
    sources: [
      { key: 'streaming', label: 'Streaming', amount: 24800 },
      { key: 'live', label: 'Live Shows', amount: 36400 },
      { key: 'merch', label: 'Merchandise', amount: 8200 },
      { key: 'sync', label: 'Sync/Licensing', amount: 5600 },
      { key: 'other', label: 'Other', amount: 2100 },
    ],
    transactions: [
      { id: 't1', title: 'Spotify Q4 Royalties', dateLabel: 'Jan 15', type: 'income', amount: 4320 },
      { id: 't2', title: 'Equipment Rental - LA Show', dateLabel: 'Jan 14', type: 'expense', amount: 850 },
      { id: 't3', title: 'The Fillmore Deposit', dateLabel: 'Jan 12', type: 'income', amount: 6250 },
      { id: 't4', title: 'Merchandise Printing', dateLabel: 'Jan 10', type: 'expense', amount: 1200 },
      { id: 't5', title: 'Apple Music December', dateLabel: 'Jan 8', type: 'income', amount: 2180 },
      { id: 't6', title: 'Tour Bus Rental', dateLabel: 'Jan 5', type: 'expense', amount: 2400 },
      { id: 't7', title: 'Sync License - Netflix', dateLabel: 'Jan 3', type: 'income', amount: 3500 },
      { id: 't8', title: 'Studio Session', dateLabel: 'Jan 2', type: 'expense', amount: 600 },
    ],
  }
}

export const format = { money }
