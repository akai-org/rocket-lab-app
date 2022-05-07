import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { sortingType } from '../../../../../utils/types/frontendGeneral'
import { PaginationGeneral } from '../../../../UI/PaginationGeneral/PaginationGeneral'
import { SortingMechanism } from './PaginationDisplay'

export const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
  itemsCount?: number
}> = (props) => {
  return (
    <PaginationGeneral itemsCount={props.itemsCount}>
      {(controlls) => (
        <Flex
          justifyContent="space-between"
          borderBottom="1px solid #C4C4C4"
          h="45px"
          p="12px 20px"
        >
          <SortingMechanism {...controlls} />
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
        </Flex>
      )}
    </PaginationGeneral>
  )
}
