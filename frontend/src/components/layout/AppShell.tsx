'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Flex minH="100vh" bg="gray.950">
      <Sidebar />
      <Box flex="1" minW={0}>
        <Topbar />
        <Box px={{ base: 4, md: 8 }} py={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
