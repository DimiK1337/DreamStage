//frontend/src/components/distribution/DistributionHeader.tsx

'use client'

import { HStack, VStack, Text, Button, Icon, Spacer } from '@chakra-ui/react'
import { FiUploadCloud, FiSettings } from 'react-icons/fi'
import { PlatformAvatarStack } from './PlatformAvatarStack'
import type { ConnectedPlatform } from '@/lib/data/distribution'

export function DistributionHeader({
  platforms,
  moreCount,
}: {
  platforms: ConnectedPlatform[]
  moreCount: number
}) {
  return (
    <HStack mb={4} align="start">
      <VStack align="start" gap={0}>
        <Text fontSize="xl" fontWeight="800">
          Distribution
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          Manage your releases across platforms
        </Text>

        <HStack mt={3} gap={3}>
          <Button colorScheme="teal" borderRadius="14px">
            <Icon as={FiUploadCloud} mr={2} />
            New Release
          </Button>

          <Button variant="outline" borderRadius="14px" borderColor="whiteAlpha.200">
            <Icon as={FiSettings} mr={2} />
            Platform Settings
          </Button>
        </HStack>
      </VStack>

      <Spacer />

      <PlatformAvatarStack platforms={platforms} moreCount={moreCount} />
    </HStack>
  )
}
