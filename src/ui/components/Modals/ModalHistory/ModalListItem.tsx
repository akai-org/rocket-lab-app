import { Stack, Image, Text } from '@chakra-ui/react'
import { memo } from 'react'

export const ElementInfo = memo(function ElementInfo() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p="0 20px 0 0"
    >
      <Stack direction="row" alignItems="center">
        <Image
          boxSize="40px"
          objectFit="cover"
          src="/item.png"
          alt="Item"
          mr="5px"
        />
        <Text fontSize="sm" isTruncated>
          Silnik od malucha
        </Text>
      </Stack>
      <Text fontSize="sm">1 szt.</Text>
    </Stack>
  )
})
