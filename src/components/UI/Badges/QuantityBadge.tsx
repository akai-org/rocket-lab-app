import React from 'react'
import { Badge, BadgeProps } from '@chakra-ui/react'

interface QuantityBadgeProps extends BadgeProps {
  schemeQuantity: number
  storageQuantity: number
}

const QuantityBadge = ({
  schemeQuantity,
  storageQuantity,
  ...restProps
}: QuantityBadgeProps) => {
  let option = { text: 'Dostępne', color: 'green' }
  if (storageQuantity > 0 && storageQuantity < schemeQuantity)
    option = { text: 'Częściowo', color: 'yellow' }
  else if (storageQuantity === 0) option = { text: 'Brak', color: 'red' }
  return (
    <Badge variant="solid" colorScheme={option.color} {...restProps}>
      {option.text}
    </Badge>
  )
}

export default QuantityBadge
