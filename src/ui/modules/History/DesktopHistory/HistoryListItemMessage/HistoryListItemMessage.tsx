import { Text } from '@chakra-ui/react'
import { memo } from 'react'

export const HistoryListItemMessage = memo(function HistoryListItemMessage() {
  return (
    <Text fontSize="sm" isTruncated>
      Wyciągnięto z magazynu: Silnik od malucha x1, Śruba lewoskrętna x25,
      Silnik od malucha x1, Śruba lewoskrętna x25, Silnik od malucha x1, Śruba
      lewoskrętna x25, Silnik od malucha x1, Śruba lewoskrętna x25, Silnik od
      malucha x1, Śruba lewoskrętna x25, Silnik od malucha x1, Śruba lewoskrętna
      x25, Silnik od malucha x1, Śruba lewoskrętna x25, Silnik od malucha x1,
      Śruba lewoskrętna x25, Silnik od malucha x1, Śruba lewoskrętna x25, Silnik
      od malucha x1, Śruba lewoskrętna x25,
    </Text>
  )
})
