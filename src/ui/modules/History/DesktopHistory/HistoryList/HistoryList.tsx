import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { historyInfo } from '../../../../../store/store'
import  HistoryListItem  from '../HistoryListItem/HistoryListItem'

const HistoryList = () => {
  const logs = useSelector(historyInfo).logs
  return (
    <Flex
      flexDir="column"
      w="100%"
      mt="10px"
      mx="auto"
      justifyContent="center"
      maxW="2000px"
    >
      {logs.map((log) => (
        <HistoryListItem key={log.id} />
      ))}
    </Flex>
  )
}

export default HistoryList
