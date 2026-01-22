//frontend/src/components/bookings/BookingsSectionHeader.tsx

'use client'

import { Button, HStack, Icon, Text } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

export function BookingsSectionHeader() {
  return (
    <HStack justify="space-between" mt={2} mb={3}>
      <Text fontSize="lg" fontWeight="800">
        Upcoming Bookings
      </Text>

      <Button colorScheme="teal" borderRadius="14px" size="sm">
        <Icon as={FiPlus} mr={2} />
        New Booking
      </Button>
    </HStack>
  )
}
