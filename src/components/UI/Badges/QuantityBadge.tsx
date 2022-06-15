import React from 'react'
import { Badge } from '@chakra-ui/react'

interface QuantityBadgeProps {
  schemeQuantity: number
  storageQuantity: number
}

const QuantityBadge = ({
  schemeQuantity,
  storageQuantity,
}: QuantityBadgeProps) => {
  let option = { text: 'Dostępne', color: 'green' }
  if (storageQuantity > 0 && storageQuantity < schemeQuantity)
    option = { text: 'Częściowo', color: 'yellow' }
  else if (storageQuantity === 0) option = { text: 'Brak', color: 'red' }
  return (
    <Badge variant="solid" colorScheme={option.color}>
      {option.text}
    </Badge>
  )
}

export default QuantityBadge
