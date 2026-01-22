//frontend/src/components/dashboard/RecentReleases.tsx

import { Badge, Box, Button, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { DashboardCard } from './DashboardCard'
import type { Release } from '@/lib/data/dashboard'
import { FiMoreHorizontal, FiMusic } from 'react-icons/fi'

function kindVariant(kind: Release['kind']) {
  if (kind === 'Album') return { bg: 'whiteAlpha.200', color: 'whiteAlpha.900' }
  if (kind === 'EP') return { bg: 'whiteAlpha.200', color: 'whiteAlpha.900' }
  return { bg: 'whiteAlpha.200', color: 'whiteAlpha.900' }
}

export function RecentReleases({ items }: { items: Release[] }) {
  return (
    <DashboardCard minH="360px">
      <HStack justify="space-between" mb={4}>
        <VStack align="start" gap={0}>
          <Text fontSize="lg" fontWeight="800">Recent Releases</Text>
          <Text fontSize="sm" color="whiteAlpha.700">Track your distribution</Text>
        </VStack>

        <Button size="sm" variant="ghost" colorScheme="teal" borderRadius="12px">
          View All
        </Button>
      </HStack>

      <VStack align="stretch" gap={3} mt={3}>
        {items.map((x) => (
          <HStack
            key={x.id}
            p={4}
            borderRadius="14px"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            justify="space-between"
            align="center"
          >
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
                flexShrink={0}
              >
                <FiMusic />
              </Box>

              <VStack align="start" gap={0} minW={0}>
                <HStack gap={2} minW={0}>
                  <Text fontWeight="800" truncate>{x.title}</Text>
                  <Badge px={2} py={0.5} borderRadius="999px" {...kindVariant(x.kind)}>
                    {x.kind}
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="whiteAlpha.700">
                  {x.platforms} platforms • {x.dateLabel}
                </Text>
              </VStack>
            </HStack>

            <HStack gap={3} flexShrink={0}>
              <VStack align="end" gap={0}>
                <Text fontWeight="800">{x.streamsLabel}</Text>
                <Text fontSize="sm" color="teal.300">{x.revenueLabel}</Text>
              </VStack>

              <IconButton
                aria-label="More"
                variant="ghost"
                size="sm"
                borderRadius="12px"
              >
                <FiMoreHorizontal />
              </IconButton>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </DashboardCard>
  )
}
