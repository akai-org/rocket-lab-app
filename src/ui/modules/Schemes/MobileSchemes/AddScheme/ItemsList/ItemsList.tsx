import { useContext, memo } from 'react'
import { Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { Item } from './Item'
import { SchemasContext } from 'pages/schemes'

export const ItemsList = memo(function ItemsList() {
  const context = useContext(SchemasContext)

  return (
    <Flex direction="column" mt="20px" overflow="scroll">
      <Table>
        <Thead>
          <Tr fontSize="sm" fontWeight="bold">
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
          {context?.items.map((schemaItem) => (
            <Item schemaItem={schemaItem} key={schemaItem.item.id} />
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
})
