//frontend/src/components/dashboard/UpcomingGigs.tsx

import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { DashboardCard } from './DashboardCard'
import type { Gig } from '@/lib/data/dashboard'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

function money(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export function UpcomingGigs({ items }: { items: Gig[] }) {
  const confirmedCount = items.length

  return (
    <DashboardCard>
      <HStack justify="space-between" mb={4}>
        <VStack align="start" gap={0}>
          <Text fontSize="lg" fontWeight="800">Upcoming Gigs</Text>
          <Text fontSize="sm" color="whiteAlpha.700">Next 30 days</Text>
        </VStack>

        <Badge px={3} py={1} borderRadius="999px" bg="teal.900" color="teal.200" borderWidth="1px" borderColor="teal.700">
          {confirmedCount} Bookings
        </Badge>
      </HStack>

      <VStack align="stretch" gap={3}>
        {items.map((g) => (
          <HStack
            key={g.id}
            p={4}
            borderRadius="16px"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            justify="space-between"
            align="center"
          >
            <HStack gap={3} minW={0}>
              <Box
                w="44px"
                h="44px"
                borderRadius="14px"
                bg="teal.900"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                display="grid"
                placeItems="center"
                color="teal.200"
                flexShrink={0}
              >
                <FiMapPin />
              </Box>

              <VStack align="start" gap={0} minW={0}>
                <Text fontWeight="800" truncate>{g.venue}</Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  {g.city}, {g.region}
                </Text>
              </VStack>

              <HStack gap={2} color="whiteAlpha.700" fontSize="sm" ml={{ base: 0, md: 4 }} display={{ base: 'none', md: 'flex' }}>
                <FiCalendar />
                <Text>{g.dateLabel}</Text>
              </HStack>
            </HStack>

            <HStack gap={6} flexShrink={0} display={{ base: 'none', md: 'flex' }}>
              <VStack align="start" gap={0}>
                <Text fontSize="xs" color="whiteAlpha.600">Fee</Text>
                <Text fontWeight="800">{money(g.fee)}</Text>
              </VStack>
              <VStack align="start" gap={0}>
                <Text fontSize="xs" color="whiteAlpha.600">Profit</Text>
                <Text fontWeight="800" color="teal.300">{money(g.profit)}</Text>
              </VStack>
            </HStack>

            <Badge
              px={3}
              py={1}
              borderRadius="999px"
              bg={g.status === 'confirmed' ? 'green.900' : 'yellow.900'}
              color={g.status === 'confirmed' ? 'green.200' : 'yellow.200'}
              borderWidth="1px"
              borderColor={g.status === 'confirmed' ? 'green.700' : 'yellow.700'}
              textTransform="lowercase"
            >
              {g.status}
            </Badge>
          </HStack>
        ))}
      </VStack>
    </DashboardCard>
  )
}
