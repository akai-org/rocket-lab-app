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
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FutureCartItem } from '../../../../services/cartService'
import { CartItem } from '../../../../store/Slices/storageCartSlice'
import ModalInfo from '../ModalInfo/ModalInfo'

type CheckoutItemProps = {
  item: CartItem
}

const CheckoutItem = ({ item: cartItem }: CheckoutItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()

  return (
    <Tr fontSize="16px" fontWeight="700">
      <Td w="70%">
        <Flex lineHeight="40px" onClick={onOpenInfo} cursor="pointer">
          <Image src={cartItem.item.imageUrl} w="40px" />
          <Text ml="10px" fontWeight="400">
            {cartItem.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
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
          <NumberInputField h="30px" />
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
        id={cartItem.item.id}
        name={cartItem.item.name}
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