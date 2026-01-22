//frontend/src/components/payments/PaymentMethodsCard.tsx

'use client'

import { Box, Button, HStack, Text, VStack, Badge } from '@chakra-ui/react'
import type { PaymentMethod } from '@/lib/data/payments'

export function PaymentMethodsCard({ methods }: { methods: PaymentMethod[] }) {
  return (
    <Box
      bg="gray.900"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="18px"
      p={5}
    >
      <HStack justify="space-between" mb={4}>
        <Text fontWeight="800">Payment Methods</Text>
        <Button size="sm" colorScheme="teal" borderRadius="12px">
          Add Account
        </Button>
      </HStack>

      <VStack align="stretch" gap={3}>
        {methods.map((m) => (
          <HStack
            key={m.id}
            justify="space-between"
            bg="whiteAlpha.50"
            borderRadius="14px"
            px={4}
            py={3}
          >
            <Box>
              <Text fontWeight="600">{m.name}</Text>
              <Text fontSize="sm" color="whiteAlpha.600">
                {m.details}
              </Text>
            </Box>

            {m.active && (
              <Badge colorScheme="green" borderRadius="full">
                Active
              </Badge>
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
