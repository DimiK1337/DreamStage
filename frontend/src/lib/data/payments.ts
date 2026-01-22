//frontend/src/lib/data/payments.ts

export type PaymentStatIconKey = 'paid' | 'pending' | 'expected'

export type PaymentStat = {
  label: string
  value: string
  iconKey: PaymentStatIconKey
}

export type PaymentTimelineStatus =
  | 'paid'
  | 'processing'
  | 'scheduled'
  | 'pending'

export type PaymentTimelineItem = {
  id: string
  title: string
  subtitle?: string
  amount: string
  status: PaymentTimelineStatus
  expectedDate: string
  progress?: number // 0–100, optional
}

export type PaymentMethod = {
  id: string
  name: string
  details: string
  active: boolean
}

export function getMockPaymentsData() {
  return {
    stats: [
      {
        label: 'Paid This Month',
        value: '$6,500',
        iconKey: 'paid',
      },
      {
        label: 'Pending Payments',
        value: '$54,000',
        iconKey: 'pending',
      },
      {
        label: 'Total Expected',
        value: '$60,500',
        iconKey: 'expected',
      },
    ] satisfies PaymentStat[],

    timeline: [
      {
        id: 'p1',
        title: 'The Fillmore – San Francisco',
        amount: '$12,500',
        status: 'processing',
        expectedDate: 'Jan 30, 2026',
        progress: 75,
      },
      {
        id: 'p2',
        title: 'Spotify Q4 2025 Royalties',
        amount: '$4,320',
        status: 'paid',
        expectedDate: 'Jan 15, 2026',
      },
      {
        id: 'p3',
        title: 'House of Blues – Chicago',
        amount: '$8,500',
        status: 'scheduled',
        expectedDate: 'Feb 8, 2026',
      },
    ] satisfies PaymentTimelineItem[],

    methods: [
      {
        id: 'm1',
        name: 'Chase Business Checking',
        details: '•••• 4829 · Primary account',
        active: true,
      },
    ] satisfies PaymentMethod[],
  }
}

