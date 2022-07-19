import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from '../../../../../theme/useColors'
import ModalHistory from '../../../../components/Modals/ModalHistory/ModalHistory'
import HistoryListItemMessage from '../HistoryListItemMessage/HistoryListItemMessage'

const HistoryListItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          22 luty, 2022
        </Text>
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
      </Box>
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="normal" m="5px">
          22 luty, 2022
        </Text>
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
      </Box>
      <ModalHistory isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default HistoryListItem
