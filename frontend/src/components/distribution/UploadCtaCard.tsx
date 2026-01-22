//frontend/src/components/distribution/UploadCtaCard.tsx

'use client'

import { Box, Button, Icon, Text, VStack } from '@chakra-ui/react'
import { DistributionCard } from './DistributionCard'
import { FiUploadCloud } from 'react-icons/fi'

export function UploadCtaCard() {
  return (
    <DistributionCard
      mt={6}
      p={10}
      borderStyle="dashed"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      bg="transparent"
      textAlign="center"
    >
      <VStack gap={3}>
        <Box
          w="44px"
          h="44px"
          borderRadius="full"
          bg="teal.900"
          borderWidth="1px"
          borderColor="teal.700"
          display="grid"
          placeItems="center"
          color="teal.200"
        >
          <Icon as={FiUploadCloud} />
        </Box>

        <Text fontSize="lg" fontWeight="800">
          Ready to release new music?
        </Text>

        <Text fontSize="sm" color="whiteAlpha.700" maxW="520px">
          Upload your tracks and distribute to 150+ streaming platforms worldwide
        </Text>

        <Button colorScheme="teal" borderRadius="14px" mt={1}>
          Start Upload
        </Button>
      </VStack>
    </DistributionCard>
  )
}
