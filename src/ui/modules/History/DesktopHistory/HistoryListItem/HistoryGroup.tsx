import {
  Box,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useColors } from '../../../../../theme/useColors'
import ModalHistory from '../../../../components/Modals/ModalHistory/ModalHistory'

interface Props {
  date: Date
  author: string
}

const HistoryGroup = () => {
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
        
        
      </Box>
      <ModalHistory isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default HistoryGroup
