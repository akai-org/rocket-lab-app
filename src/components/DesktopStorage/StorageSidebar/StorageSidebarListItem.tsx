import React from 'react'
import { Text, Flex } from '@chakra-ui/react'

const StorageidebarListItem: React.FC<{ id: string }> = (
  props
) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      p="10px 20px 0px 30px"
    >
      <Text>{props.id}</Text>
    </Flex>
  )
}

export default StorageidebarListItem
