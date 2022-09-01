import { Text } from '@chakra-ui/react'
import { memo } from 'react'

export const NameAndQuantityElement = memo(() => {
  return (
    <Text fontSize="sm" isTruncated>
      Silnik od malucha x1, Śruba lewoskrętna x25, Silnik od malucha x1, Śruba
      lewoskrętna x25
    </Text>
  )
})
