import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import Sorting from './Sorting/Sorting'
import GridItem from './Item/GridItem'
import ListItem from './Item/ListItem'
import {
  MainViewProps,
  sortingType,
} from '../../../utils/types/frontendGeneral'
import FiltersGeneral from '../../UI/FiltersGeneral/FiltersGeneral'

const MobileStorage = ({ items }: MainViewProps) => {
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
      {listType === 'grid'
        ? items && items.map((item) => <GridItem item={item} key={item.id} />)
        : items && items.map((item) => <ListItem item={item} key={item.id} />)}
      <FiltersGeneral>
        {(props) => <Filters {...props} setIsFiltersOpen={setIsFiltersOpen} />}
      </FiltersGeneral>
    </Flex>
  )
}

export default MobileStorage
