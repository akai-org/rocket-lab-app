import { Stack, Icon, Heading, Text } from '@chakra-ui/react'
import { HistoryLog } from 'mongo'
import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from 'ui/theme'
import { HistoryListItemMessage } from '../../DesktopHistory/HistoryListItemMessage'

export interface Props {
  log: HistoryLog
}

export const HistoryGroupItem: FC<Props> = ({ log }) => {
  const colors = useColors()

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
}
