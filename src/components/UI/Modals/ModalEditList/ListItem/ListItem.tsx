import {
  Flex,
  Tr,
  Td,
  Image,
  Text,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Item } from '../../../../../mongo/models/item'
import ModalInfo from '../../ModalInfo/ModalInfo'

interface ModalEditListProps {
  item: Item
}

const ListItem = ({ item }: ModalEditListProps) => {
  const [quantity, setQuantity] = useState(1)
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return (
    <Tr fontSize="14px" h="40px">
      <Td w="60%">
        <Flex lineHeight="40px" onClick={onOpenInfo} cursor="pointer">
          <Text fontWeight="500" minW="50px" isTruncated>
            {item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          allowMouseWheel
          display="inline"
          h="30px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={quantity}
          onChange={(e) => {
            setQuantity(parseInt(e))
          }}
          min={1}
        >
          <NumberInputField h="30px" minW="80px" />
          <NumberInputStepper h="30px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">
          <AiOutlineClose cursor="pointer" />
        </Flex>
      </Td>
      <ModalInfo
        categories={item.categories}
        id={item.id}
        name={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  )
}

export default ListItem
