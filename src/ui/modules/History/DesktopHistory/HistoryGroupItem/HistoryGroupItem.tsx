import { Stack, Icon, Heading, Text } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from '../../../../../theme/useColors'
import HistoryListItemMessage from '../HistoryListItemMessage/HistoryListItemMessage'

export const HistoryGroupItem = () => {
  const colors = useColors()
  return (
    <Stack direction="row" mb="20px" w="100%">
      <Icon
        as={FaUserCircle}
        mr="5px"
        color={colors.fontPrimary}
        fontSize="50px"
      />
      <Stack direction="column" w="90%" maxW="1600px">
        <Stack direction="row">
          <Heading size="sm">Rafał Walkowiak</Heading>
          <Text fontSize="sm">21:37</Text>
        </Stack>
        <Stack direction="row">
          <HistoryListItemMessage />
          <Text
            as="u"
            color={colors.orangePrimary}
            onClick={onOpen}
            cursor="pointer"
          >
            pokaż&nbsp;więcej...
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
