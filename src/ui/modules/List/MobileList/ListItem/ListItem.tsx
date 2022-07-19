import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import ModalInfo from '../../../../components/Modals/ModalInfo/ModalInfo'
import { CartItem } from '../../../../../mongo/models/cart'
import { Category } from '../../../../../mongo/models/category'
import { useColors } from '../../../../../theme/useColors'

const ListItem = (props: CartItem) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  const colors = useColors()

  return props.item ? (
    <Flex
      w="100%"
      m="0 auto"
      borderBottom="2px solid #D5D5D5"
      onClick={onOpenInfo}
      color={colors.fontSecondary}
    >
      <Flex ml="10px" my="auto">
        <Image src={props.item.imageUrl} w="50px" h="50px" />
      </Flex>
      <Box w="80%" textAlign="left" p="20px">
        <Text fontSize="sm" noOfLines={1} fontWeight="bold">
          {props.item.name}
        </Text>
        <Text fontSize="xs" fontWeight="normal">
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
