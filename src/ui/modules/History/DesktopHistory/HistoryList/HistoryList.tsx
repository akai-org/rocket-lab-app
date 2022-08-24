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
      maxW="2000px"
    >
      <HistoryListItem />
      <HistoryListItem />
    </Flex>
  )
}

export default HistoryList
