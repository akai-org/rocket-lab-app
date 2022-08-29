import { Flex } from '@chakra-ui/react'
import { HistoryListItem } from '../HistoryListItem'
import React, { memo } from 'react'

export const HistoryList = memo(() => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      mt="10px"
      mx="auto"
      justifyContent="center"
      maxW="2000px"
    >
      <HistoryListItem />
      <HistoryListItem />
    </Flex>
  )
})
