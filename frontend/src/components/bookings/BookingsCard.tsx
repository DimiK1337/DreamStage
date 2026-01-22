//frontend/src/components/bookings/BookingsCard.tsx

import { Box, type BoxProps } from '@chakra-ui/react'

export function BookingsCard(props: BoxProps) {
  const { children, ...rest } = props
  return (
    <Box
      bg="gray.900"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="18px"
      boxShadow="0 10px 30px rgba(0,0,0,0.35)"
      {...rest}
    >
      {children}
    </Box>
  )
}
