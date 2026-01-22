//frontend/src/lib/data/dashboard.ts

export type IconKey = 'dollar' | 'music' | 'calendar' | 'trend'

export type DashboardKpi = {
  key: 'revenue' | 'streams' | 'gigs' | 'margin'
  label: string
  value: string
  helper: string
  iconKey: IconKey
}

export type RevenuePoint = {
  month: string
  revenue: number
  expenses: number
}

export type Release = {
  id: string
  title: string
  kind: 'Single' | 'Album' | 'EP'
  platforms: number
  dateLabel: string // e.g. "Jan 10, 2026"
  streamsLabel: string // e.g. "2.4M"
  revenueLabel: string // e.g. "$4,320"
}

export type GigStatus = 'confirmed' | 'pending'
export type Gig = {
  id: string
  venue: string
  city: string
  region: string
  dateLabel: string // e.g. "Jan 28, 2026"
  fee: number
  profit: number
  status: GigStatus
}

export type PaymentStatus = 'Completed' | 'Pending' | 'Processing'
export type Payment = {
  id: string
  title: string
  dateLabel: string
  amount: number
  status: PaymentStatus
  // Only for "Processing" rows (0..100)
  progressPct?: number
}

export type MockDashboardData = {
  kpis: DashboardKpi[]
  revenueSeries: RevenuePoint[]
  releases: Release[]
  gigs: Gig[]
  payments: Payment[]
}

export function getMockDashboardData(): MockDashboardData {
  return {
    kpis: [
      { key: 'revenue', label: 'Total Revenue', value: '$48,250.00', helper: '+12.5% from last month', iconKey: 'dollar' },
      { key: 'streams', label: 'Total Streams', value: '11.7M', helper: '+8.2% from last month', iconKey: 'music' },
      { key: 'gigs', label: 'Upcoming Gigs', value: '4', helper: '2 confirmed this week', iconKey: 'calendar' },
      { key: 'margin', label: 'Profit Margin', value: '68%', helper: '+4% improvement', iconKey: 'trend' },
    ],
    revenueSeries: [
      { month: 'Jan', revenue: 4200, expenses: 2600 },
      { month: 'Feb', revenue: 6000, expenses: 2400 },
      { month: 'Mar', revenue: 5200, expenses: 3000 },
      { month: 'Apr', revenue: 7600, expenses: 3400 },
      { month: 'May', revenue: 8400, expenses: 3100 },
      { month: 'Jun', revenue: 9800, expenses: 3300 },
      { month: 'Jul', revenue: 11800, expenses: 3600 },
    ],
    releases: [
      { id: 'r1', title: 'Midnight Dreams', kind: 'Single', platforms: 3, dateLabel: 'Jan 10, 2026', streamsLabel: '2.4M', revenueLabel: '$4,320' },
      { id: 'r2', title: 'Electric Soul', kind: 'Album', platforms: 4, dateLabel: 'Dec 15, 2025', streamsLabel: '8.1M', revenueLabel: '$12,850' },
      { id: 'r3', title: 'Summer Vibes', kind: 'EP', platforms: 3, dateLabel: 'Nov 28, 2025', streamsLabel: '1.2M', revenueLabel: '$2,180' },
    ],
    gigs: [
      { id: 'g1', venue: 'The Fillmore', city: 'San Francisco', region: 'CA', dateLabel: 'Jan 28, 2026', fee: 12500, profit: 8200, status: 'confirmed' },
      { id: 'g2', venue: 'House of Blues', city: 'Chicago', region: 'IL', dateLabel: 'Feb 5, 2026', fee: 8500, profit: 5100, status: 'confirmed' },
      { id: 'g3', venue: 'The Roxy', city: 'Los Angeles', region: 'CA', dateLabel: 'Feb 12, 2026', fee: 15000, profit: 10500, status: 'pending' },
      { id: 'g4', venue: 'Brooklyn Steel', city: 'Brooklyn', region: 'NY', dateLabel: 'Feb 20, 2026', fee: 18000, profit: 12600, status: 'confirmed' },
    ],
    payments: [
      { id: 'p1', title: 'Spotify Royalties', dateLabel: 'Jan 15, 2026', amount: 4320, status: 'Completed' },
      { id: 'p2', title: 'The Fillmore - San Francisco', dateLabel: 'Jan 28, 2026', amount: 12500, status: 'Pending' },
      { id: 'p3', title: 'Apple Music Royalties', dateLabel: 'Jan 20, 2026', amount: 2180, status: 'Processing', progressPct: 72 },
      { id: 'p4', title: 'Merchandise Sales', dateLabel: 'Jan 12, 2026', amount: 1850, status: 'Completed' },
    ],
  }
}
