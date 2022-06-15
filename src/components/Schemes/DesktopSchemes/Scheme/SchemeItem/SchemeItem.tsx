import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import QuantityBadge from '../../../../UI/Badges/QuantityBadge'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
}

const SchemeItem = ({ schemeQuantity, storageQuantity }: SchemeItemProps) => {
  return (
    <Tr>
      <Td>Nazwa elementu tymczasowego</Td>
      <Td>2137</Td>
      <Td>
        <QuantityBadge
          schemeQuantity={schemeQuantity}
          storageQuantity={storageQuantity}
        />
      </Td>
    </Tr>
  )
}

export default SchemeItem
