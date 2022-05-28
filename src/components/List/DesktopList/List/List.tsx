import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import DeletePopover from '../../../UI/Popovers/DeletePopover'
import ListItem from '../ListItem/ListItem'

const List = () => {
  // TO DELETE DUMMY CONTENT
  const items = [
    {
      name: 'przedmiot',
      description: 'jego opis',
      categories: ['cat1', 'cat2'],
      imageUrl: 'item.png',
      quantity: 96,
      createdAt: new Date(),
      updatedAt: new Date(),
      toBuy: true,
      id: 'asdasdasdasID',
    },
    {
      name: 'przedmiot',
      description: 'jego opis',
      categories: ['cat1', 'cat2'],
      imageUrl: 'item.png',
      quantity: 96,
      createdAt: new Date(),
      updatedAt: new Date(),
      toBuy: true,
      id: 'asdasdasdasID',
    },
    {
      name: 'przedmiot',
      description: 'jego opis',
      categories: ['cat1', 'cat2'],
      imageUrl: 'item.png',
      quantity: 96,
      createdAt: new Date(),
      updatedAt: new Date(),
      toBuy: true,
      id: 'asdasdasdasID',
    },
  ]
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
  } = useDisclosure()
  return (
    <Box
      borderRadius="6px"
      bgColor="white"
      border="1px solid #C4C4C4"
      mt="20px"
    >
      <Flex flexWrap="wrap" p="20px">
        {/* TODO: Usuwanie listy */}
        <Flex w="100%" justifyContent="space-between">
          <Heading
            fontSize="20px"
            lineHeight="10px"
            mt="15px"
            color="#4A5568"
            fontWeight="600"
            mb="15px"
            ml="20px"
          >
            Lista 1
          </Heading>
          <Flex pt="5px" mr="20px">
            <ProductButton
              size="sm"
              onClick={onOpenEditList}
              w="80px"
              fontSize="16px"
            >
              Edytuj
            </ProductButton>
            <DeletePopover
              label="Czy na pewno chcesz usunąć tę listę?"
              onClick={() => {}}
            />
          </Flex>
        </Flex>
        <Table p="20px">
          <Thead>
            <Tr fontSize="16px" fontWeight="700">
              <Th minW="250px">NAZWA</Th>
              <Th w="100%">OPIS</Th>
              <Th textAlign="right" minW="170px">
                ILOŚĆ SZTUK
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </Tbody>
        </Table>
      </Flex>
      <ModalEditList
        list={items}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Box>
  )
}

export default List
