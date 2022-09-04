import { Flex, Text, Box } from '@chakra-ui/react'
import { FC } from 'react'
import { HistoryLog } from '../../../../../mongo/models/history'
import { useColors } from 'ui/theme'
import { HistoryGroupItem } from '../HistoryGroupItem'

interface Props {
  logs: HistoryLog[]
  groupDate: string
}

export const HistoryListItem: FC<Props> = ({ groupDate, logs }) => {
  const colors = useColors()

  return (
    <Flex
      m="10px auto 5px 15px"
      color={colors.fontPrimary}
      flexDirection="column"
    >
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="normal" m="5px">
          {groupDate}
        </Text>
        {!logs
          ? null
          : logs.map((log) => <HistoryGroupItem log={log} key={log.id} />)}
      </Box>
    </Flex>
  )
}
