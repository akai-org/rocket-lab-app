import {
  Box,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

import { Item } from '../../../../mongo/models/item'
import ModalInfo from '../../../UI/Modals/ModalInfo/ModalInfo'

interface Props {
  item?: Item
}

const ListItem = ({
  item = {
    name: 'string',
    imageUrl: 'item.png',
    description: 'string',
    toBuy: true,
    id: 'string',
    categories: [''],
    quantity: 69,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
}: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [quantity, setQuantity] = useState(58)
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return (
    <Flex
      w="100%"
      m="0 auto"
      borderBottom="2px solid #D5D5D5"
      onClick={onOpenInfo}
    >
      <Flex ml=" 10px" my="auto">
        <Image src={item.imageUrl} w="50px" h="50px" />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" fontWeight="600">
          {item.name}
        </Text>
        <Text fontSize="14px" fontWeight="500">
          Ilość: {quantity}
        </Text>
      </Box>
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
    </Flex>
  )
}

export default ListItem
