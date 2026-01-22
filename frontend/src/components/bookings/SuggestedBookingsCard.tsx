//frontend/src/components/bookings/SuggestedBookingsCard.tsx

'use client'

import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { BookingsCard } from './BookingsCard'
import type { SuggestedBooking } from '@/lib/data/bookings'
import { format } from '@/lib/data/bookings'

export function SuggestedBookingsCard({ items }: { items: SuggestedBooking[] }) {
  return (
    <BookingsCard p={5}>
      <HStack justify="space-between" mb={3}>
        <Text fontWeight="800">Suggested Bookings</Text>
      </HStack>

      <VStack align="stretch" gap={4}>
        {items.map((x) => (
          <Box
            key={x.id}
            p={4}
            borderRadius="14px"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
          >
            <HStack justify="space-between" align="start">
              <VStack align="start" gap={0}>
                <Text fontWeight="800">{x.venue}</Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  {x.city}, {x.region} • {x.dateLabel}
                </Text>
                <Text fontSize="xs" color="teal.300" mt={2}>
                  {x.rationale}
                </Text>
              </VStack>

              <Text fontWeight="800" color="teal.300">
                {format.money(x.price)}
              </Text>
            </HStack>

            <Button
              mt={3}
              size="sm"
              w="full"
              variant="outline"
              borderRadius="12px"
              borderColor="teal.700"
              color="teal.200"
              _hover={{ bg: 'teal.950' }}
            >
              Request Booking
            </Button>
          </Box>
        ))}
      </VStack>
    </BookingsCard>
  )
}
