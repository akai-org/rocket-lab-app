import { Flex, Image, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
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
  const [quantity, setQuantity] = useState(50)
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer" onClick={onOpenInfo}>
          <Image src="item.png" w="40px" h="40px" />
          <Text lineHeight="40px" ml="10px">
            Harnaś
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>To król gór</Text>
      </Td>
      <Td textAlign="right">
        <Text color={quantity ? 'inherit' : 'red.500'}>
          {quantity ? quantity : 'brak w magazynie'}
        </Text>
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
