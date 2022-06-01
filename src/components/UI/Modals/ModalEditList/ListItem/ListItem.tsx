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
import { CartItem } from '../../../../../mongo/models/cart'
import ModalInfo from '../../ModalInfo/ModalInfo'

interface ModalEditListProps {
  item: CartItem
  changeQuantity: (newQuantity: number, itemId: string) => void
  onRemoveItem: (itemId: string) => void
}

const ListItem = ({ item, changeQuantity, onRemoveItem }: ModalEditListProps) => {
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
            {item.item.name}
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
          defaultValue={item.quantity}
          onChange={(e) => {
            changeQuantity(+e, item.id)
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
          <AiOutlineClose onClick={() => onRemoveItem(item.id)} cursor="pointer" />
        </Flex>
      </Td>
      <ModalInfo
        categories={item.item.categories}
        id={item.item.id}
        name={item.item.name}
        description={item.item.description}
        imageUrl={item.item.imageUrl}
        quantity={item.item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  )
}

export default ListItem
