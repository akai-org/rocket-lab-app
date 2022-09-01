import { Flex, Stack, Heading, Text, Icon, Box } from '@chakra-ui/react'
import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { HistoryLog } from '../../../../../mongo/models/history'
import { useColors } from 'ui/theme'
import { HistoryListItemMessage } from '../../DesktopHistory/HistoryListItemMessage/HistoryListItemMessage'

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
          : logs.map((log) => {
              const logDate = new Date(log.createdAt)
              return (
                <Stack mb={2} key={log.id} direction="row">
                  <Icon
                    as={FaUserCircle}
                    mr="5px"
                    color={colors.fontPrimary}
                    fontSize="50px"
                  />
                  <Stack direction="column" maxW="70vw">
                    <Stack direction="row">
                      <Heading size="sm">{log.author}</Heading>
                      <Text fontSize="sm">
                        {`${logDate.getHours()}:${logDate.getMinutes()}`}
                      </Text>
                    </Stack>
                    <HistoryListItemMessage
                      resourceType={log.type}
                      changedQuantity={log.resource.changedQuantity}
                      name={log.resource.name}
                    />
                  </Stack>
                </Stack>
              )
            })}
      </Box>
    </Flex>
  )
}
