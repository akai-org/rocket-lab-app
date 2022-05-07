import { Box, Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import ListItem from './Item/ListItem'
import GridItem from './Item/GridItem'
import {
  MainViewProps,
  sortingType,
} from '../../../../utils/types/frontendGeneral'
import { PaginationGeneral } from '../../../UI/PaginationGeneral/PaginationGeneral'
import { PaginationControlls } from './Pagination/PaginationControlls'

const DesktopItemsList = ({ items, itemsCount }: MainViewProps) => {
  const [listType, setListType] = useState<sortingType>('grid')
  return (
    <Box
      borderRadius="6px"
      bgColor="white"
      border="1px solid #C4C4C4"
      mt="20px"
    >
      <PaginationGeneral itemsCount={itemsCount}>
        {(controlls) => (
          <PaginationControlls
            {...controlls}
            listType={listType}
            setListType={setListType}
          />
        )}
      </PaginationGeneral>
      {listType === 'list' ? (
        <Flex flexWrap="wrap" p="20px">
          <Table p="20px">
            <Thead>
              <Tr fontSize="16px" fontWeight="700">
                <Th minW="300px">NAZWA</Th>
                <Th w="100%">OPIS</Th>
                <Th textAlign="right" minW="170px">
                  ILOŚĆ SZTUK
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {items &&
                items.map((item) => <ListItem item={item} key={item.id} />)}
            </Tbody>
          </Table>
        </Flex>
      ) : (
        <Flex flexWrap="wrap" p="20px">
          {items && items.map((item) => <GridItem item={item} key={item.id} />)}
        </Flex>
      )}
    </Box>
  )
}

export default DesktopItemsList