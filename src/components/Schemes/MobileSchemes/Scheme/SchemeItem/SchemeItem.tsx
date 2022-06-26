import React from 'react'
import { Flex, Td, Text, Tr } from '@chakra-ui/react'
import QuantityBadge from '../../../../UI/Badges/QuantityBadge'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
}

const SchemeItem = ({ schemeQuantity, storageQuantity }: SchemeItemProps) => {
  return (
    <Tr fontSize="14px">
      <Td>
        <Text noOfLines={1}>Nazwa elementu tymczasowego</Text>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">27</Flex>
      </Td>
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
