import React from 'react'
import { Td, Text, Tr } from '@chakra-ui/react'
import QuantityBadge from '../../../../../components/Badges/QuantityBadge'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
  name: string
}

const SchemeItem = ({
  schemeQuantity,
  storageQuantity,
  name,
}: SchemeItemProps) => {
  return (
    <Tr fontSize="xs">
      <Td>
        <Text noOfLines={1}>{name}</Text>
      </Td>
      <Td>{schemeQuantity}</Td>
      <Td textAlign="right">
        <QuantityBadge
          schemeQuantity={schemeQuantity}
          storageQuantity={storageQuantity}
        />
      </Td>
    </Tr>
  )
}

export default SchemeItem
