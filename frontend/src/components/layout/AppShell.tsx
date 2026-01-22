'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <Flex minH="100vh" bg="gray.950">
      <Sidebar />
      <Box flex="1" minW={0}>
        <Topbar title={title} subtitle={subtitle} />
        <Box px={{ base: 4, md: 8 }} py={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
