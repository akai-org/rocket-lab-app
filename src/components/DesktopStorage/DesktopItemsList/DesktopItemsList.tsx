import { Box, Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import ListItem from './Item/ListItem'
import GridItem from './Item/GridItem'
import Sorting from './Sorting/Sorting'
import { sortingType } from '../../../utils/types/frontendGeneral'
import { ItemProps } from '../../../utils/types/frontendGeneral'

interface Props {
  items: ItemProps[]
}

const DesktopItemsList = ({ items }: Props) => {
  const [listType, setListType] = useState<sortingType>('grid')
  return (
    <Box
      borderRadius="6px"
      bgColor="white"
      border="1px solid #C4C4C4"
      mt="20px"
    >
      <Sorting listType={listType} setListType={setListType} />
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
              {items.map((item) => (
                <ListItem item={item} key={item.id} />
              ))}
            </Tbody>
          </Table>
        </Flex>
      ) : (
        <Flex flexWrap="wrap" p="20px">
          {items.map((item) => (
            <GridItem item={item} key={item.id} />
          ))}
        </Flex>
      )}
    </Box>
  )
}

export default DesktopItemsList
