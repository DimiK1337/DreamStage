//frontend/src/components/bookings/BookingStatusBadge.tsx

import { Badge } from '@chakra-ui/react'
import type { BookingStatus } from '@/lib/data/bookings'

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  const isConfirmed = status === 'confirmed'

  return (
    <Badge
      px={2.5}
      py={0.5}
      borderRadius="999px"
      textTransform="lowercase"
      bg={isConfirmed ? 'green.900' : 'yellow.900'}
      color={isConfirmed ? 'green.200' : 'yellow.200'}
      borderWidth="1px"
      borderColor={isConfirmed ? 'green.700' : 'yellow.700'}
    >
      {status}
    </Badge>
  )
}
