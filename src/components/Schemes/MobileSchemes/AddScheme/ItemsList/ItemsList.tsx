import React from 'react'
import { useSelector } from 'react-redux'
import { schemeInfo } from '../../../../../store/store'
import { Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import Item from './Item/Item'

const ItemsList = () => {
  const schemeData = useSelector(schemeInfo)

  return (
    <Flex direction="column" mt="20px" overflow="scroll">
      <Table>
        <Thead>
          <Tr fontSize="16px" fontWeight="700">
            <Th w="80%">NAZWA</Th>
            <Th textAlign="right" w="1%" minW="115px">
              ILOŚĆ SZTUK
            </Th>
            <Th w="1%" textAlign="right">
              AKCJE
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {schemeData.items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}

export default ItemsList
