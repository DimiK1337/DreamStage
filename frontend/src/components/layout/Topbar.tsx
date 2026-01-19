'use client'

import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputElement,
  InputGroup,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { FiBell, FiPlus, FiSearch } from 'react-icons/fi'

export function Topbar() {
  return (
    <HStack
      px={{ base: 4, md: 8 }}
      py={4}
      borderBottomWidth="1px"
      borderColor="whiteAlpha.100"
      bg="gray.950"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Box>
        <Text fontSize="lg" fontWeight="700">
          Dashboard
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          Welcome back, here&apos;s your overview
        </Text>
      </Box>

      <Spacer />

      <InputGroup
        maxW="420px"
        display={{ base: 'none', md: 'block' }}
      >
        <>
          <InputElement pointerEvents="none">
            <Icon as={FiSearch} color="whiteAlpha.600" />
          </InputElement>

          <Input
            placeholder="Search..."
            ps="10"              // padding-start so text doesn't overlap the icon
            bg="whiteAlpha.50"
            borderColor="whiteAlpha.200"
            borderRadius="14px"
            _hover={{ borderColor: 'whiteAlpha.300' }}
            _focus={{ borderColor: 'teal.300' }}
          />
        </>
      </InputGroup>

      <Button variant="ghost" borderRadius="14px">
        <Icon as={FiBell} />
      </Button>

      <Button colorScheme="teal" borderRadius="14px">
        <Icon as={FiPlus} mr={2} />
        New
      </Button>
    </HStack>
  )
}
