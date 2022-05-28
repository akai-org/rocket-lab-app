import {
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Text,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  CartItem,
  changeItemQuantity,
  removeFromCart,
} from '../../../../store/Slices/storageCartSlice'
import ModalInfo from '../ModalInfo/ModalInfo'

export type CheckoutItemProps = {
  item: CartItem
}

const CheckoutItem = ({ item: cartItem }: CheckoutItemProps) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()

  const dispatch = useDispatch()

  return (
    <Tr fontSize="16px" fontWeight="700">
      <Td w="60%">
        <Flex lineHeight="40px" onClick={onOpenInfo} cursor="pointer">
          <Text fontWeight="500" minW="50px" isTruncated>
            {cartItem.item.name}
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
          defaultValue={cartItem.quantity}
          onChange={(e) => {
            dispatch(changeItemQuantity({ id: cartItem.item.id, quantity: +e }))
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
        <Flex
          justifyContent="flex-end"
          onClick={(e) => {
            dispatch(removeFromCart(cartItem.item))
          }}
        >
          <AiOutlineClose cursor="pointer" />
        </Flex>
      </Td>
      <ModalInfo
        id={cartItem.item.id}
        name={cartItem.item.name}
        categories={cartItem.item.categories}
        description={cartItem.item.description}
        imageUrl={cartItem.item.imageUrl}
        quantity={cartItem.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  )
}

export default CheckoutItem
