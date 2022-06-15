import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { schemeInfo } from '../../../../../store/store'
import { Flex, Text } from '@chakra-ui/react'
import Item from './Item/Item'

const ItemsList = () => {
  const schemeData = useSelector(schemeInfo)

  return (
    <Flex direction="column" mt="20px">
      {schemeData.items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Flex>
  )
}

export default ItemsList
