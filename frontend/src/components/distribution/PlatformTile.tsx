//frontend/src/components/distribution/PlatformTile.tsx

import { Box, HStack, Text } from '@chakra-ui/react'
import type { PlatformMetric } from '@/lib/data/distribution'

function dotColor(status: PlatformMetric['status']) {
  if (status === 'processing') return 'yellow.300'
  if (status === 'warning') return 'orange.300'
  return 'green.300'
}

export function PlatformTile({ item }: { item: PlatformMetric }) {
  return (
    <Box
      flex="1"
      minW="160px"
      p={4}
      borderRadius="14px"
      bg="whiteAlpha.50"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
    >
      <HStack justify="space-between" mb={1}>
        <Text fontSize="sm" color="whiteAlpha.700">
          {item.platform}
        </Text>
        <Box w="9px" h="9px" borderRadius="full" bg={dotColor(item.status)} />
      </HStack>

      <Text fontSize="lg" fontWeight="800">
        {item.streamsLabel}
      </Text>
    </Box>
  )
}
