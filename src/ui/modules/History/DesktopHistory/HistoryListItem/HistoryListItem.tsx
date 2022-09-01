import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { HistoryLog } from '../../../../../mongo/models/history'
import { useColors } from 'ui/theme'
import { HistoryGroupItem } from '../HistoryGroupItem/HistoryGroupItem'

export interface Props {
  logs: HistoryLog[]
  groupDate: string
}

export const HistoryListItem: FC<Props> = ({ logs, groupDate }) => {
  const colors = useColors()

  return (
    <Flex
      w="60vw"
      m="10px auto 5px 15px"
      flexDirection="column"
      maxW="2000px"
      color={colors.fontSecondary}
    >
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="normal" m="5px">
          {groupDate}
        </Text>
        {!logs
          ? null
          : logs.map((log) => <HistoryGroupItem key={log.id} log={log} />)}
      </Box>
    </Flex>
  )
}
