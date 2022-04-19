import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Filters from '../Filters/Filters'
import Sorting from '../Sorting/Sorting'
import GridItem from '../Item/GridItem'
import ListItem from '../Item/ListItem'

export type sortingType = 'grid' | 'list'

const ItemsList = () => {
  const [listType, setListType] = useState<sortingType>('grid')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  return (
    <Flex
      flexWrap="wrap"
      minW="300px"
      m="10px 0"
      mb={isFiltersOpen ? '320px' : '60px'}
    >
      <Sorting setListType={setListType} listType={listType} />
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      {listType === 'grid' ? <GridItem /> : <ListItem />}
      <Filters setIsFiltersOpen={setIsFiltersOpen} />
    </Flex>
  )
}

export default ItemsList
