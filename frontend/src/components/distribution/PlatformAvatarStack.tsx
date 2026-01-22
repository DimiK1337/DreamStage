//frontend/src/components/distribution/PlatformAvatarStack.tsx

import { HStack, Box, Text } from '@chakra-ui/react'
import type { ConnectedPlatform } from '@/lib/data/distribution'

export function PlatformAvatarStack({
  platforms,
  moreCount,
}: {
  platforms: ConnectedPlatform[]
  moreCount: number
}) {
  return (
    <HStack gap={2}>
      <HStack gap={-2}>
        {platforms.map((p) => (
          <Box
            key={p.key}
            title={p.label}
            w="26px"
            h="26px"
            borderRadius="full"
            bg={p.color}
            borderWidth="2px"
            borderColor="gray.950"
            display="grid"
            placeItems="center"
            color="gray.950"
            fontSize="11px"
            fontWeight="800"
          >
            {p.short}
          </Box>
        ))}
      </HStack>
      <Text fontSize="sm" color="whiteAlpha.700">
        +{moreCount} more
      </Text>
    </HStack>
  )
}
