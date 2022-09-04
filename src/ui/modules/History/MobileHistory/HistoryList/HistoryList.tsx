import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HistoryLog } from '../../../../../mongo/models/history'
import { historyInfo } from '../../../../../store/store'
import { groupLogs } from '../../../../../utils/helpers'
import { HistoryListItem } from '../HistoryListItem'

export const HistoryList = () => {
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
      w="95%"
      mt="10px"
      mb="20px"
      mx="auto"
      justifyContent="center"
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
