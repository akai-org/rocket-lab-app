import { Box, Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { useState, memo } from 'react'
import { ListItem, GridItem } from './Item'
import { MainViewProps, sortingType } from 'utils'
import { PaginationControlls } from './Pagination'
import { useColors } from 'ui/theme'

export const DesktopItemsList = memo(function DesktopItemsList({
  items,
}: MainViewProps) {
  const colors = useColors()
  const [listType, setListType] = useState<sortingType>('grid')

  return (
    <Box
      borderRadius="6px"
      bgColor={colors.backgroundPrimary}
      border={`1px solid ${colors.borderPrimary}`}
      mt="20px"
    >
      <PaginationControlls listType={listType} setListType={setListType} />
      {listType === 'list' ? (
        <Flex flexWrap="wrap" color={colors.fontSecondary} p="20px">
          <Table p="20px">
            <Thead>
              <Tr fontSize="sm" fontWeight="bold">
                <Th w="50%">NAZWA</Th>
                <Th w="50%">OPIS</Th>
                <Th textAlign="right" w="1%">
                  ILOŚĆ
                </Th>
                <Th textAlign="right" w="1%">
                  Akcje
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {items!.map((item) =>
                item ? <ListItem item={item} key={item.id} /> : null
              )}
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
})
