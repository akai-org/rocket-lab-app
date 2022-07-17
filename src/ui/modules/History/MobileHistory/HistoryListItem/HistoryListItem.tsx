import {
  Flex,
  Stack,
  Avatar,
  Heading,
  Text,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import ModalHistory from '../../../../components/Modals/ModalHistory/ModalHistory'
import NameAndQuantityElement from '../NameAndQuantityElement/NameAndQuantityElement'

const HistoryListItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex m="10px auto 5px 15px" color="black" flexDirection="column">
      <Stack direction="row">
        <Avatar size="md" backgroundColor="black" />
        <Stack direction="column" maxW="70vw">
          <Stack direction="row">
            <Heading size="sm">Rafał Walkowiak</Heading>
            <Text fontSize="sm">21:37</Text>
          </Stack>
          <Text fontSize="sm" isTruncated>
            Wyciągnięto z magazynu:
          </Text>
          <NameAndQuantityElement />
          <Text as="u" color="#FF7700" onClick={onOpen} isTruncated>
            pokaż więcej
          </Text>
        </Stack>
      </Stack>
      <ModalHistory isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default HistoryListItem
