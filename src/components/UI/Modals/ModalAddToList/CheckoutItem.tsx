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
import { Item } from '../../../../mongo/models/item'
import ModalInfo from '../ModalInfo/ModalInfo'

type CheckoutItemProps = {
  item: Item
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()

  return (
    <Tr fontSize="16px" fontWeight="700">
      <Td w="60%">
        <Flex lineHeight="40px" onClick={onOpenInfo} cursor="pointer">
          <Image src={item.imageUrl} w="40px" />
          <Text ml="10px" fontWeight="400">
            {item.name}
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

export default CheckoutItem
