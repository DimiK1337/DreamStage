//frontend/src/components/touring/CityBreakdownTable.tsx

'use client'

import {
  Text,
  HStack,
  Icon,
  TableRoot,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeader,
  TableCell,
} from '@chakra-ui/react'
import { TouringCard } from './TouringCard'
import type { CityCostRow } from '@/lib/data/touring'
import { FiMapPin } from 'react-icons/fi'

function money(n: number) {
  return n.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

export function CityBreakdownTable({ rows }: { rows: CityCostRow[] }) {
  return (
    <TouringCard p={5} mt={4}>
      <Text fontWeight="900" mb={3}>
        City-by-City Breakdown
      </Text>

      <TableRoot size="sm" >
        <TableHeader>
          <TableRow>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700">
              City
            </TableColumnHeader>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700">
              Date
            </TableColumnHeader>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700" textAlign="right">
              Hotel
            </TableColumnHeader>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700" textAlign="right">
              Transport
            </TableColumnHeader>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700" textAlign="right">
              Per Diem
            </TableColumnHeader>
            <TableColumnHeader color="whiteAlpha.600" fontWeight="700" textAlign="right">
              Total
            </TableColumnHeader>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id} borderTopWidth="1px" borderColor="whiteAlpha.100">
              <TableCell>
                <HStack gap={2}>
                  <Icon as={FiMapPin} color="teal.300" />
                  <Text fontWeight="700">{r.city}</Text>
                </HStack>
              </TableCell>

              <TableCell color="whiteAlpha.700">{r.dateLabel}</TableCell>

              <TableCell textAlign="right" color="whiteAlpha.800">
                {money(r.hotel)}
              </TableCell>
              <TableCell textAlign="right" color="whiteAlpha.800">
                {money(r.transport)}
              </TableCell>
              <TableCell textAlign="right" color="whiteAlpha.800">
                {money(r.perDiem)}
              </TableCell>

              <TableCell textAlign="right" fontWeight="900">
                {money(r.total)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </TouringCard>
  )
}
