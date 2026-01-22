//frontend/src/components/dashboard/DashboardCard.tsx
import { Box, type BoxProps } from '@chakra-ui/react'

export function DashboardCard(props: BoxProps) {
  const { children, ...rest } = props
  return (
    <Box
      bg="gray.900"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="18px"
      p={5}
      boxShadow="0 10px 30px rgba(0,0,0,0.35)"
      {...rest}
    >
      {children}
    </Box>
  )
}
