import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import HistoryListItemMessage from '../HistoryListItemMessage/HistoryListItemMessage'

const HistoryListItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      w="60vw"
      m="10px auto 5px 15px"
      flexDirection="column"
      maxW="2000px"
      color="#2D3748"
    >
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="500" m="5px">
          22 luty, 2022
        </Text>
        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
              <Text as="u" color="#FF7700" onClick={onOpen}>
                pokaż&nbsp;więcej...
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
              <Text as="u" color="#FF7700" onClick={onOpen}>
                pokaż&nbsp;więcej...
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
              <Text as="u" color="#FF7700" onClick={onOpen}>
                pokaż&nbsp;więcej...
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
              <Text as="u" color="#FF7700" onClick={onOpen}>
                pokaż&nbsp;więcej...
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="500" m="5px">
          22 luty, 2022
        </Text>
        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
              <Text as="u" color="#FF7700" onClick={onOpen}>
                pokaż&nbsp;więcej...
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* <MoreInfoModal isOpen={isOpen} onClose={onClose} /> */}
    </Flex>
  )
}

export default HistoryListItem
