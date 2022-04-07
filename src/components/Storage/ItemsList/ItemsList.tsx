import React, { useState } from 'react'
import {
  Flex,
  Select,
  Text,
  ButtonGroup,
  IconButton,
  Icon,
  Box,
} from '@chakra-ui/react'
import Filters from '../Filters/Filters'
import Sorting from '../Sorting/Sorting'
import Item from '../Item/Item'

const ItemsList = () => {
  const [listType, setListType] = useState('grid')
  return (
    <Flex m="10px 0" flexWrap="wrap">
      <Sorting setListType={setListType} listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Item listType={listType} />
      <Flex></Flex>
      <Filters />
    </Flex>
  )
}

export default ItemsList
