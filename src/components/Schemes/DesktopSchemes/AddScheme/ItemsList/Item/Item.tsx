import React, { FC } from 'react'
import { Flex, HStack, Text } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../../../../store/Slices/schemeSlice'
import { PopulatedItem } from '../../../../../../mongo/models/item'

interface ItemProps {
  item: PopulatedItem
  key: string
}

const Item = ({ item, key }: ItemProps) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeItem(item))
  }
  return (
    <Flex key={key} justifyContent="space-between">
      <HStack>
        <Text>{item.name}</Text>
        <Text>(x{item.quantity})</Text>
      </HStack>
      <AiOutlineClose cursor="pointer" onClick={handleDelete} />
    </Flex>
  )
}

export default Item
