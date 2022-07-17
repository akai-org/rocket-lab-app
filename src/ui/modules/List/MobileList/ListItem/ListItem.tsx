import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

import ModalInfo from '../../../../components/Modals/ModalInfo/ModalInfo'
import { CartItem } from '../../../../../mongo/models/cart'
import { Category } from '../../../../../mongo/models/category'

const ListItem = (props: CartItem) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return props.item ? (
    <Flex
      w="100%"
      m="0 auto"
      borderBottom="2px solid #D5D5D5"
      onClick={onOpenInfo}
    >
      <Flex ml=" 10px" my="auto">
        <Image src={props.item.imageUrl} w="50px" h="50px" />
      </Flex>
      <Box h="80px" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" noOfLines={1} fontWeight="600">
          {props.item.name}
        </Text>
        <Text fontSize="14px" fontWeight="500">
          Ilość: {props.quantity}
        </Text>
      </Box>
      <ModalInfo
        categories={props.item.categories as Category[]}
        id={props.item.id}
        name={props.item.name}
        description={props.item.description}
        imageUrl={props.item.imageUrl}
        quantity={props.item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Flex>
  ) : null
}

export default ListItem
