//frontend/src/app/bookings/page.tsx

import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { AppShell } from '@/components/layout/AppShell'
import { getMockBookingsData } from '@/lib/data/bookings'
import { AiBookingAssistantBanner } from '@/components/bookings/AiBookingAssistantBanner'
import { BookingsSectionHeader } from '@/components/bookings/BookingsSectionHeader'
import { BookingCard } from '@/components/bookings/BookingCard'
import { SuggestedBookingsCard } from '@/components/bookings/SuggestedBookingsCard'
import { TourForecastCard } from '@/components/bookings/TourForecastCard'

export default function BookingsPage() {
  const data = getMockBookingsData()

  return (
    <AppShell title="Bookings" subtitle="Smart gig management & forecasting">
      <VStack align="stretch" gap={4}>
        <AiBookingAssistantBanner title={data.assistant.title} subtitle={data.assistant.subtitle} />

        <Grid templateColumns={{ base: '1fr', md: 'repeat(12, 1fr)' }} gap={4} alignItems="start">
          <GridItem colSpan={{ base: 12, md: 8 }}>
            <BookingsSectionHeader />
            <VStack align="stretch" gap={4}>
              {data.bookings.map((b) => (
                <BookingCard key={b.id} booking={b} />
              ))}
            </VStack>
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 4 }}>
            <VStack align="stretch" gap={4}>
              <SuggestedBookingsCard items={data.suggested} />
              <TourForecastCard forecast={data.forecast} />
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </AppShell>
  )
}
