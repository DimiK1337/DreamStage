//frontend/src/lib/data/touring.ts

export type BudgetSummary = {
  spent: number
  budget: number
}

export type TouringKpis = {
  budget: BudgetSummary
  potentialSavings: number
  costPerShow: number
}

export type CostCategory = {
  key: string
  label: string
  amount: number
  // fraction of bar fill 0..1 relative to max in list (computed in UI if you prefer)
  iconKey: 'transport' | 'hotel' | 'crew' | 'perdiem' | 'misc'
}

export type Impact = 'high' | 'medium'

export type Optimization = {
  id: string
  title: string
  impact: Impact
  description: string
  savings: number
}

export type CityCostRow = {
  id: string
  city: string
  dateLabel: string
  hotel: number
  transport: number
  perDiem: number
  total: number
}

export type TouringData = {
  kpis: TouringKpis
  categories: CostCategory[]
  optimizations: Optimization[]
  cities: CityCostRow[]
}

export function getMockTouringData(): TouringData {
  const spent = 17600
  const budget = 20000

  return {
    kpis: {
      budget: { spent, budget },
      potentialSavings: 4670,
      costPerShow: 4400,
    },
    categories: [
      { key: 'transport', label: 'Transportation', amount: 6200, iconKey: 'transport' },
      { key: 'hotel', label: 'Accommodation', amount: 4800, iconKey: 'hotel' },
      { key: 'crew', label: 'Equipment & Crew', amount: 3400, iconKey: 'crew' },
      { key: 'perdiem', label: 'Per Diems', amount: 2200, iconKey: 'perdiem' },
      { key: 'misc', label: 'Miscellaneous', amount: 1000, iconKey: 'misc' },
    ],
    optimizations: [
      {
        id: 'o1',
        title: 'Route Optimization',
        impact: 'high',
        description: 'Rearrange Chicago → Minneapolis → Brooklyn to save $1,200 in flights',
        savings: 1200,
      },
      {
        id: 'o2',
        title: 'Hotel Group Rate',
        impact: 'medium',
        description: 'Book 4+ nights at Marriott properties for 15% discount',
        savings: 720,
      },
      {
        id: 'o3',
        title: 'Equipment Rental',
        impact: 'high',
        description: 'Rent backline locally instead of transporting - saves $450/show',
        savings: 1800,
      },
      {
        id: 'o4',
        title: 'Crew Optimization',
        impact: 'medium',
        description: 'Hire local sound engineers instead of touring tech',
        savings: 950,
      },
    ],
    cities: [
      { id: 'c1', city: 'San Francisco', dateLabel: 'Jan 28', hotel: 380, transport: 520, perDiem: 180, total: 1080 },
      { id: 'c2', city: 'Chicago', dateLabel: 'Feb 5', hotel: 320, transport: 680, perDiem: 180, total: 1180 },
      { id: 'c3', city: 'Los Angeles', dateLabel: 'Feb 12', hotel: 420, transport: 380, perDiem: 180, total: 980 },
      { id: 'c4', city: 'Brooklyn', dateLabel: 'Feb 20', hotel: 480, transport: 720, perDiem: 180, total: 1380 },
    ],
  }
}
