//frontend/src/components/finances/RecentTransactions.tsx

'use client'

import { Box, HStack, Icon, Text, VStack, Button } from '@chakra-ui/react'
import { FinancesCard } from './FinancesCard'
import type { Transaction } from '@/lib/data/finances'
import { format } from '@/lib/data/finances'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'

export function RecentTransactions({ items }: { items: Transaction[] }) {
  return (
    <FinancesCard p={5}>
      <HStack justify="space-between" mb={3}>
        <Text fontWeight="900">Recent Transactions</Text>
        <Button size="sm" variant="ghost" colorScheme="teal" borderRadius="12px">
          View All
        </Button>
      </HStack>

      <VStack align="stretch" gap={2}>
        {items.map((t) => {
          const isIncome = t.type === 'income'
          return (
            <Box
              key={t.id}
              p={4}
              borderRadius="14px"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
            >
              <HStack justify="space-between" align="center">
                <HStack gap={3}>
                  <Box
                    w="32px"
                    h="32px"
                    borderRadius="12px"
                    bg={isIncome ? 'green.900' : 'red.900'}
                    borderWidth="1px"
                    borderColor={isIncome ? 'green.700' : 'red.700'}
                    display="grid"
                    placeItems="center"
                    color={isIncome ? 'green.200' : 'red.200'}
                  >
                    <Icon as={isIncome ? FiArrowUpRight : FiArrowDownRight} />
                  </Box>

                  <VStack align="start" gap={0}>
                    <Text fontWeight="800">{t.title}</Text>
                    <Text fontSize="sm" color="whiteAlpha.600">
                      {t.dateLabel}
                    </Text>
                  </VStack>
                </HStack>

                <Text fontWeight="900" color={isIncome ? 'green.300' : 'red.300'}>
                  {isIncome ? '+' : '-'}
                  {format.money(t.amount)}
                </Text>
              </HStack>
            </Box>
          )
        })}
      </VStack>
    </FinancesCard>
  )
}
