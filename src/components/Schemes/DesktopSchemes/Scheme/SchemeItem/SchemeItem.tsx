import React from 'react'
import { Td, Text, Tr } from '@chakra-ui/react'
import QuantityBadge from '../../../../UI/Badges/QuantityBadge'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
}

const SchemeItem = ({ schemeQuantity, storageQuantity }: SchemeItemProps) => {
  return (
    <Tr>
      <Td>
        <Text noOfLines={1}>Nazwa elementu tymczasowego</Text>
      </Td>
      <Td>2137</Td>
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
