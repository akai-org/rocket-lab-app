import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { historyInfo } from '../../../../../store/store'
import HistoryListItem from '../HistoryListItem/HistoryListItem'

const HistoryList = () => {
  const logs = useSelector(historyInfo)?.logs
  console.log({ logs })

  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    const tmpKeys: string[] = []
    logs?.forEach((value, key) => {
      tmpKeys.push(key)
    })
    setKeys(tmpKeys)
  }, [logs])

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
        return <HistoryListItem groupDate={key} key={key} />
      })}
    </Flex>
  )
}

export default HistoryList
