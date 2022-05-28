import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ListItem from '../ListItem/ListItem'
import { AiOutlineClose } from 'react-icons/ai'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import DeletePopover from '../../../UI/Popovers/DeletePopover'

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
    <Flex
      flexDir="column"
      w="95%"
      mt="10px"
      mb="20px"
      mx="auto"
      justifyContent="center"
    >
      <Flex w="100%" justifyContent="space-between">
        <Heading
          fontSize="20px"
          lineHeight="10px"
          mt="15px"
          fontWeight="600"
          ml="15px"
        >
          Lista 1
        </Heading>
        <Flex>
          <ProductButton
            size="sm"
            onClick={onOpenEditList}
            w="80px"
            fontSize="16px"
            mr="5px"
          >
            Edytuj
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={() => {}}
          />
        </Flex>
      </Flex>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
      <ModalEditList
        list={items}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Flex>
  )
}

export default List
