//frontend/src/components/bookings/AiBookingAssistantBanner.tsx

'use client'

import { Button, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { BookingsCard } from './BookingsCard'
import { FiZap, FiArrowRight } from 'react-icons/fi'

export function AiBookingAssistantBanner({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <BookingsCard
      p={4}
      bgGradient="linear(to-r, teal.900, gray.900, yellow.900)"
      borderColor="whiteAlpha.150"
    >
      <HStack justify="space-between" align="center">
        <HStack gap={3}>
          <HStack
            w="36px"
            h="36px"
            borderRadius="12px"
            bg="teal.900"
            borderWidth="1px"
            borderColor="teal.700"
            justify="center"
          >
            <Icon as={FiZap} color="teal.200" />
          </HStack>

          <VStack align="start" gap={0}>
            <Text fontWeight="800">{title}</Text>
            <Text fontSize="sm" color="whiteAlpha.700">
              {subtitle}
            </Text>
          </VStack>
        </HStack>

        <Button variant="outline" borderRadius="14px" borderColor="whiteAlpha.200">
          View Suggestions
          <Icon as={FiArrowRight} ml={2} />
        </Button>
      </HStack>
    </BookingsCard>
  )
}
