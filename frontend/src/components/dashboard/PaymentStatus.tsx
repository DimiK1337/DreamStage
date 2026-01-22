//frontend/src/components/dashboard/PaymentStatus.tsx

import { Box, HStack, Progress, Text, VStack, Button, ProgressRange, ProgressRoot, ProgressTrack } from '@chakra-ui/react'
import { DashboardCard } from './DashboardCard'
import type { Payment } from '@/lib/data/dashboard'

function money(n: number) {
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function statusColor(status: Payment['status']) {
  if (status === 'Completed') return 'green.300'
  if (status === 'Pending') return 'yellow.300'
  return 'teal.300'
}

export function PaymentStatus({ items }: { items: Payment[] }) {
  return (
    <DashboardCard>
      <HStack justify="space-between" mb={4}>
        <VStack align="start" gap={0}>
          <Text fontSize="lg" fontWeight="800">Payment Status</Text>
          <Text fontSize="sm" color="whiteAlpha.700">Guaranteed payments</Text>
        </VStack>

        <Button size="sm" variant="ghost" colorScheme="teal" borderRadius="12px">
          View All →
        </Button>
      </HStack>

      <VStack align="stretch" gap={4} mt={2}>
        {items.map((p) => (
          <Box
            key={p.id}
            p={4}
            borderRadius="16px"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
          >
            <HStack justify="space-between" align="start">
              <VStack align="start" gap={0}>
                <Text fontWeight="800">{p.title}</Text>
                <Text fontSize="sm" color="whiteAlpha.700">{p.dateLabel}</Text>
              </VStack>

              <VStack align="end" gap={0}>
                <Text fontWeight="800">{money(p.amount)}</Text>
                <Text fontSize="sm" color={statusColor(p.status)}>{p.status}</Text>
              </VStack>
            </HStack>

            {p.status === 'Processing' && typeof p.progressPct === 'number' && (
              <ProgressRoot mt={3} value={p.progressPct} borderRadius="999px" bg="whiteAlpha.100" height="8px">
                <ProgressTrack borderRadius="999px">
                  <ProgressRange borderRadius="999px" />
                </ProgressTrack>
              </ProgressRoot>

            )}
          </Box>
        ))}
      </VStack>
    </DashboardCard>
  )
}
