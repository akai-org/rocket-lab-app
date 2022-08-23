import {
  Flex,
  Stack,
  Heading,
  Text,
  useDisclosure,
  Icon,
} from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from '../../../../theme/useColors'
import ModalHistory from '../../../../components/Modals/ModalHistory/ModalHistory'
import NameAndQuantityElement from '../NameAndQuantityElement/NameAndQuantityElement'

const HistoryListItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const colors = useColors()

  return (
    <Flex
      m="10px auto 5px 15px"
      color={colors.fontPrimary}
      flexDirection="column"
    >
      <Stack direction="row">
        <Icon
          as={FaUserCircle}
          mr="5px"
          color={colors.fontPrimary}
          fontSize="50px"
        />
        <Stack direction="column" maxW="70vw">
          <Stack direction="row">
            <Heading size="sm">Rafał Walkowiak</Heading>
            <Text fontSize="sm">21:37</Text>
          </Stack>
          <Text fontSize="sm" isTruncated>
            Wyciągnięto z magazynu:
          </Text>
          <NameAndQuantityElement />
          <Text
            as="u"
            color={colors.orangePrimary}
            onClick={onOpen}
            isTruncated
          >
            pokaż więcej
          </Text>
        </Stack>
      </Stack>
      <ModalHistory isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default HistoryListItem
