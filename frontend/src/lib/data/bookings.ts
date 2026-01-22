//frontend/src/lib/data/bookings.ts

export type BookingStatus = 'confirmed' | 'pending'

export type Booking = {
  id: string
  venue: string
  status: BookingStatus
  city: string
  region: string
  dateLabel: string
  timeLabel: string
  capacityLabel: string
  fee: number
  costs: number
  profit: number
  marginPct: number
  insight: string
}

export type SuggestedBooking = {
  id: string
  venue: string
  city: string
  region: string
  dateLabel: string
  price: number
  rationale: string
}

export type TourForecast = {
  totalRevenue: number
  totalCosts: number
  netProfit: number
  avgMarginPct: number
}

export type BookingsData = {
  assistant: { title: string; subtitle: string }
  bookings: Booking[]
  suggested: SuggestedBooking[]
  forecast: TourForecast
}

function money(n: number) {
  return n.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

export function getMockBookingsData(): BookingsData {
  return {
    assistant: {
      title: 'AI Booking Assistant',
      subtitle: '2 venue suggestions based on your tour route',
    },
    bookings: [
      {
        id: 'b1',
        venue: 'The Fillmore',
        status: 'confirmed',
        city: 'San Francisco',
        region: 'CA',
        dateLabel: 'Jan 28, 2026',
        timeLabel: '8:00 PM',
        capacityLabel: '1,150 cap',
        fee: 12500,
        costs: 4300,
        profit: 8200,
        marginPct: 66,
        insight: 'Strong market - consider adding merch booth',
      },
      {
        id: 'b2',
        venue: 'House of Blues',
        status: 'confirmed',
        city: 'Chicago',
        region: 'IL',
        dateLabel: 'Feb 5, 2026',
        timeLabel: '9:00 PM',
        capacityLabel: '1,800 cap',
        fee: 8500,
        costs: 3400,
        profit: 5100,
        marginPct: 60,
        insight: 'Bundle with Milwaukee show to reduce travel costs',
      },
      {
        id: 'b3',
        venue: 'The Roxy',
        status: 'pending',
        city: 'Los Angeles',
        region: 'CA',
        dateLabel: 'Feb 12, 2026',
        timeLabel: '7:30 PM',
        capacityLabel: '500 cap',
        fee: 15000,
        costs: 4500,
        profit: 10500,
        marginPct: 70,
        insight: 'High-value booking - VIP packages recommended',
      },
      {
        id: 'b4',
        venue: 'Brooklyn Steel',
        status: 'confirmed',
        city: 'Brooklyn',
        region: 'NY',
        dateLabel: 'Feb 20, 2026',
        timeLabel: '8:30 PM',
        capacityLabel: '1,800 cap',
        fee: 18000,
        costs: 5400,
        profit: 12600,
        marginPct: 70,
        insight: 'Coordinate with nearby NYC press opportunities',
      },
    ],
    suggested: [
      {
        id: 's1',
        venue: '9:30 Club',
        city: 'Washington',
        region: 'DC',
        dateLabel: 'Feb 18, 2026',
        price: 14000,
        rationale: 'Route optimization - between NYC and Chicago',
      },
      {
        id: 's2',
        venue: 'First Avenue',
        city: 'Minneapolis',
        region: 'MN',
        dateLabel: 'Feb 8, 2026',
        price: 9500,
        rationale: 'High demand in market + low competition',
      },
    ],
    forecast: {
      totalRevenue: 54000,
      totalCosts: 17600,
      netProfit: 36400,
      avgMarginPct: 67.4,
    },
  }
}

export const format = { money }
