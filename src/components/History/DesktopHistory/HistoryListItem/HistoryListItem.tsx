import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import NameAndQuantityElement from '../NameAndQuantityElement/NameAndQuantityElement'

const HistoryListItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      w="60vw"
      m="10px auto 5px 15px"
      color="black"
      flexDirection="column"
      maxW="2000px"
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
            <Text fontSize="sm" isTruncated>
              Wyciągnięto z magazynu:
            </Text>
            <NameAndQuantityElement />
            <Text as="u" color="#FF7700" onClick={onOpen}>
              pokaż więcej
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Text fontSize="sm" isTruncated>
              Wyciągnięto z magazynu:
            </Text>
            <NameAndQuantityElement />
            <Text as="u" color="#FF7700" onClick={onOpen}>
              pokaż więcej
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Text fontSize="sm" isTruncated>
              Wyciągnięto z magazynu:
            </Text>
            <NameAndQuantityElement />
            <Text as="u" color="#FF7700" onClick={onOpen}>
              pokaż więcej
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row" mb="20px" w="100%">
          <Avatar size="md" backgroundColor="black" />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
            </Stack>
            <Text fontSize="sm" isTruncated>
              Wyciągnięto z magazynu:
            </Text>
            <NameAndQuantityElement />
            <Text as="u" color="#FF7700" onClick={onOpen}>
              pokaż więcej
            </Text>
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
            <Text fontSize="sm" isTruncated>
              Wyciągnięto z magazynu:
            </Text>
            <NameAndQuantityElement />
            <Text as="u" color="#FF7700" onClick={onOpen}>
              pokaż więcej
            </Text>
          </Stack>
        </Stack>
      </Box>

      {/* <Modal isOpen={isOpen} onClose={onClose} isCentered> */}
      {/* <MoreInfoModal /> */}
      {/* </Modal> */}
    </Flex>
  )
}

export default HistoryListItem
