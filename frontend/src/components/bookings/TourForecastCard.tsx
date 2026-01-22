//frontend/src/components/bookings/TourForecastCard.tsx

import { HStack, Text, VStack } from '@chakra-ui/react'
import { BookingsCard } from './BookingsCard'
import type { TourForecast } from '@/lib/data/bookings'
import { format } from '@/lib/data/bookings'

export function TourForecastCard({ forecast }: { forecast: TourForecast }) {
  return (
    <BookingsCard p={5}>
      <Text fontWeight="800" mb={3}>
        Tour Forecast
      </Text>

      <VStack align="stretch" gap={3} fontSize="sm">
        <HStack justify="space-between">
          <Text color="whiteAlpha.700">Total Revenue</Text>
          <Text fontWeight="800">{format.money(forecast.totalRevenue)}</Text>
        </HStack>

        <HStack justify="space-between">
          <Text color="whiteAlpha.700">Total Costs</Text>
          <Text fontWeight="800" color="red.300">
            -{format.money(forecast.totalCosts)}
          </Text>
        </HStack>

        <HStack justify="space-between" pt={2}>
          <Text color="whiteAlpha.700">Net Profit</Text>
          <Text fontWeight="900" color="green.300">
            {format.money(forecast.netProfit)}
          </Text>
        </HStack>

        <HStack justify="space-between">
          <Text color="whiteAlpha.700">Avg. Margin</Text>
          <Text fontWeight="800" color="teal.300">
            {forecast.avgMarginPct.toFixed(1)}%
          </Text>
        </HStack>
      </VStack>
    </BookingsCard>
  )
}
