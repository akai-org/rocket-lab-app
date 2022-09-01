import { memo } from 'react'
import { Flex, Td, Text, Tr } from '@chakra-ui/react'
import { QuantityBadge } from 'ui/components'
import { useColors } from 'ui/theme'

interface SchemeItemProps {
  schemeQuantity: number
  storageQuantity: number
  name: string
}

export const SchemeItem = memo(
  ({ schemeQuantity, storageQuantity, name }: SchemeItemProps) => {
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
)
