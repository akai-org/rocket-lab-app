import React from 'react'
import { Flex, Td, Text, Tr } from '@chakra-ui/react'
import QuantityBadge from '../../../../../components/Badges/QuantityBadge'
import { useColors } from '../../../../../../theme/useColors'

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
  const colors = useColors()

  return (
    <Tr fontSize="xs" color={colors.fontSecondary}>
      <Td>
        <Text noOfLines={1}>{name}</Text>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">{schemeQuantity}</Flex>
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
