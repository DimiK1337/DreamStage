//frontend/src/components/bookings/BookingCard.tsx

'use client'

import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiMapPin, FiCalendar, FiClock, FiUsers, FiZap } from 'react-icons/fi'
import type { Booking } from '@/lib/data/bookings'
import { format } from '@/lib/data/bookings'
import { BookingsCard } from './BookingsCard'
import { BookingStatusBadge } from './BookingStatusBadge'

export function BookingCard({ booking }: { booking: Booking }) {
  return (
    <BookingsCard p={5}>
      <HStack justify="space-between" align="start">
        <HStack gap={3} minW={0}>
          <Box
            w="42px"
            h="42px"
            borderRadius="14px"
            bg="teal.900"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            display="grid"
            placeItems="center"
            color="teal.200"
            flexShrink={0}
          >
            <Icon as={FiMapPin} />
          </Box>

          <VStack align="start" gap={1} minW={0}>
            <HStack gap={2} flexWrap="wrap">
              <Text fontWeight="800">{booking.venue}</Text>
              <BookingStatusBadge status={booking.status} />
            </HStack>

            <HStack gap={3} fontSize="sm" color="whiteAlpha.700" flexWrap="wrap">
              <HStack gap={1}>
                <Icon as={FiMapPin} />
                <Text>{booking.city}, {booking.region}</Text>
              </HStack>
              <HStack gap={1}>
                <Icon as={FiCalendar} />
                <Text>{booking.dateLabel}</Text>
              </HStack>
              <HStack gap={1}>
                <Icon as={FiClock} />
                <Text>{booking.timeLabel}</Text>
              </HStack>
              <HStack gap={1}>
                <Icon as={FiUsers} />
                <Text>{booking.capacityLabel}</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </HStack>

      {/* metrics strip */}
      <Box
        mt={4}
        p={4}
        borderRadius="14px"
        bg="whiteAlpha.50"
        borderWidth="1px"
        borderColor="whiteAlpha.100"
      >
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <VStack align="start" gap={0} minW="160px">
            <Text fontSize="xs" color="whiteAlpha.600">Booking Fee</Text>
            <Text fontWeight="800">{format.money(booking.fee)}</Text>
          </VStack>

          <VStack align="start" gap={0} minW="160px">
            <Text fontSize="xs" color="whiteAlpha.600">Est. Costs</Text>
            <Text fontWeight="800" color="red.300">-{format.money(booking.costs)}</Text>
          </VStack>

          <VStack align="start" gap={0} minW="160px">
            <Text fontSize="xs" color="whiteAlpha.600">Est. Profit</Text>
            <Text fontWeight="800" color="green.300">{format.money(booking.profit)}</Text>
          </VStack>

          <VStack align="start" gap={0} minW="120px">
            <Text fontSize="xs" color="whiteAlpha.600">Margin</Text>
            <Text fontWeight="800" color="teal.300">~{booking.marginPct}%</Text>
          </VStack>
        </HStack>
      </Box>

      {/* insight */}
      <HStack
        mt={3}
        p={3}
        borderRadius="12px"
        bg="teal.950"
        borderWidth="1px"
        borderColor="teal.900"
        color="teal.200"
        fontSize="sm"
        gap={2}
      >
        <Icon as={FiZap} />
        <Text color="whiteAlpha.700">{booking.insight}</Text>
      </HStack>
    </BookingsCard>
  )
}
