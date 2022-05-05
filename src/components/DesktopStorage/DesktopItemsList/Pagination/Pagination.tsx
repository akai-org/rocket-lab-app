import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { sortingType } from '../../../../utils/types/frontendGeneral'
import { PaginationGeneral } from '../../../UI/PaginationGeneral/PaginationGeneral'
import { SortingMechanism } from './PaginationDisplay'

export const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
  itemsCount?: number
}> = (props) => {
  return (
    <>
      <PaginationGeneral paginationSettings={SortingMechanism} itemsCount={props.itemsCount} />
      <Flex>
        <Icon
          cursor="pointer"
          color={props.listType === 'grid' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          mr="10px"
          onClick={() => {
            props.setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          cursor="pointer"
          color={props.listType === 'list' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          onClick={() => {
            props.setListType('list')
          }}
          as={FaThList}
        />
      </Flex>
    </>
  )
}
