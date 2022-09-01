import { memo } from 'react'
import { Td, Text, Tr } from '@chakra-ui/react'
import { QuantityBadge } from 'ui/components'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
  name: string
}

export const SchemeItem = memo(
  ({ schemeQuantity, storageQuantity, name }: SchemeItemProps) => {
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
)
