import { Flex, Image, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CartItem } from '../../../../mongo/models/cart'
import { Item } from '../../../../mongo/models/item'
import ModalInfo from '../../../UI/Modals/ModalInfo/ModalInfo'

interface Props extends CartItem {}

const ListItem = (props: Props) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return props.item ? (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer" onClick={onOpenInfo}>
          <Image src="item.png" w="40px" h="40px" />
          <Text lineHeight="40px" ml="10px">
            {props.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>{props.item.description}</Text>
      </Td>
      <Td textAlign="right">
        <Text color={props.quantity ? 'inherit' : 'red.500'}>
          {props.quantity ? props.quantity : 'brak w magazynie'}
        </Text>
      </Td>
      <ModalInfo
        categories={props.item.categories}
        id={props.id}
        name={props.item.name}
        description={props.item.description}
        imageUrl={props.item.imageUrl}
        quantity={props.item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  ) : null
}

export default ListItem
