//frontend/src/components/distribution/ReleaseCard.tsx

'use client'

import { Box, HStack, Text, VStack, Badge } from '@chakra-ui/react'
import { DistributionCard } from './DistributionCard'
import { PlatformTile } from './PlatformTile'
import type { ReleaseCardData } from '@/lib/data/distribution'
import { FiMusic } from 'react-icons/fi'

export function ReleaseCard({ release }: { release: ReleaseCardData }) {
  return (
    <DistributionCard p={5}>
      <HStack justify="space-between" align="start" mb={4}>
        <HStack gap={4} minW={0}>
          <Box
            w="56px"
            h="56px"
            borderRadius="16px"
            bg="teal.900"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            display="grid"
            placeItems="center"
            color="teal.200"
            flexShrink={0}
          >
            <FiMusic />
          </Box>

          <VStack align="start" gap={1} minW={0}>
            <HStack gap={2} flexWrap="wrap">
              <Text fontSize="lg" fontWeight="800">
                {release.title}
              </Text>

              <Badge px={2} py={0.5} borderRadius="999px" bg="whiteAlpha.200" color="whiteAlpha.900">
                {release.type}
              </Badge>

              {typeof release.trackCount === 'number' ? (
                <Text fontSize="sm" color="whiteAlpha.600">
                  {release.trackCount} tracks
                </Text>
              ) : null}
            </HStack>

            <Text fontSize="sm" color="whiteAlpha.700">
              {release.releasedLabel}
            </Text>

            <HStack gap={4} mt={1} fontSize="sm">
              <HStack gap={2}>
                <Text color="whiteAlpha.600">{release.totalStreamsLabel}</Text>
                <Text color="whiteAlpha.600">streams</Text>
              </HStack>
              <Text color="teal.300" fontWeight="800">
                {release.revenueLabel}
              </Text>
            </HStack>
          </VStack>
        </HStack>

        <Text fontSize="sm" color="teal.300" fontWeight="700" cursor="pointer">
          View Details
        </Text>
      </HStack>

      <HStack gap={3} flexWrap="wrap">
        {release.platforms.map((p, idx) => (
          <PlatformTile key={`${release.id}-${p.platform}-${idx}`} item={p} />
        ))}
      </HStack>
    </DistributionCard>
  )
}
