import { Stack, Icon, Heading, Text, Badge } from '@chakra-ui/react'
import { HistoryLog } from 'mongo'
import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from 'ui/theme'
import { HistoryListItemMessage } from '../HistoryListItemMessage/HistoryListItemMessage'

export interface Props {
  log: HistoryLog
}

export const HistoryGroupItem: FC<Props> = ({ log }) => {
  const colors = useColors()

  const logDate = new Date(log.createdAt)
  return (
    <Stack key={log.id} direction="row" mb="20px" w="100%">
      <Icon
        as={FaUserCircle}
        mr="5px"
        color={colors.fontPrimary}
        fontSize="50px"
      />
      <Stack direction="column" w="90%" maxW="1600px">
        <Stack direction="row">
          <Heading size="sm">{log.author}</Heading>
          <Text fontSize="sm">
            {`${logDate.getHours()}:${logDate.getMinutes()}`}
          </Text>
          <Badge variant="solid" colorScheme="orange" color="white">
            {log.resource.type}
          </Badge>
        </Stack>
        <Stack direction="row">
          <HistoryListItemMessage
            resourceType={log.type}
            changedQuantity={log.resource.changedQuantity}
            name={log.resource.name}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
