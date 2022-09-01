import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HistoryLog } from '../../../../../mongo/models/history'
import { historyInfo } from '../../../../../store/store'
import { groupLogs } from '../../../../../utils/helpers'
import HistoryListItem from '../HistoryListItem/HistoryListItem'

const HistoryList = () => {
  const logs = useSelector(historyInfo).displayLogs
  const [groupedLogs, setGroupedLogs] = useState(groupLogs(logs))

  useEffect(() => {
    setGroupedLogs(groupLogs(logs))
  }, [logs])

  const keys: string[] = []
  groupedLogs.forEach((value, key) => {
    keys.push(key)
  })

  return (
    <Flex
      flexDir="column"
      w="100%"
      mt="10px"
      mx="auto"
      justifyContent="center"
      maxW="2000px"
    >
      {keys.map((key) => {
        return (
          <HistoryListItem
            logs={groupedLogs.get(key) as HistoryLog[]}
            groupDate={key}
            key={key}
          />
        )
      })}
    </Flex>
  )
}

export default HistoryList
