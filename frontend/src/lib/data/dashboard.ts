
import { FiDollarSign, FiMusic, FiCalendar, FiTrendingUp } from 'react-icons/fi'

export type IconKey = 'dollar' | 'music' | 'calendar' | 'trend'

export type Kpi = {
  key: 'revenue' | 'streams' | 'gigs' | 'margin'
  label: string
  value: string
  helper: string
  iconKey: IconKey
}


export type Release = {
  id: string
  title: string
  type: 'Single' | 'Album' | 'EP'
  streams: string
  revenue: string
}

export type DashboardData = {
  kpis: Kpi[]
  releases: Release[]
}

function formatCurrencyUSD(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}

function formatCompact(n: number) {
  return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(n)
}

export function getMockDashboardData(): DashboardData {
  // Deterministic-ish mock data (no randomness => stable UI while developing)
  const revenue = 48250
  const streams = 11_700_000
  const upcomingGigs = 4
  const margin = 0.68

  return {
    kpis: [
      {
        key: 'revenue',
        label: 'Total Revenue',
        value: formatCurrencyUSD(revenue),
        helper: '+12.5% from last month',
        iconKey: 'dollar',
      },
      {
        key: 'streams',
        label: 'Total Streams',
        value: formatCompact(streams),
        helper: '+8.2% from last month',
        iconKey: 'music',
      },
      {
        key: 'gigs',
        label: 'Upcoming Gigs',
        value: String(upcomingGigs),
        helper: '2 confirmed this week',
        iconKey: 'calendar',
      },
      {
        key: 'margin',
        label: 'Profit Margin',
        value: `${Math.round(margin * 100)}%`,
        helper: '+4% improvement',
        iconKey: 'trend',
      },
    ],
    releases: [
      { id: 'r1', title: 'Midnight Dreams', type: 'Single', streams: '2.4M', revenue: '$4,320' },
      { id: 'r2', title: 'Electric Soul', type: 'Album', streams: '8.1M', revenue: '$12,850' },
      { id: 'r3', title: 'Summer Vibes', type: 'EP', streams: '1.2M', revenue: '$2,180' },
    ],
  }
}
