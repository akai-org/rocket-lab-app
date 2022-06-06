import { Flex } from '@chakra-ui/react'
import HistoryListItem from '../HistoryListItem/HistoryListItem'

const HistoryList = () => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      mt="10px"
      mx="auto"
      justifyContent="center"
      border="1px solid #D4D4D4"
      borderRadius="6px"
      maxW="2000px"
    >
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
    </Flex>
  )
}

export default HistoryList
