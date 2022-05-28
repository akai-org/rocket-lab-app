import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ListItem from '../ListItem/ListItem'
import { AiOutlineClose } from 'react-icons/ai'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import DeletePopover from '../../../UI/Popovers/DeletePopover'
import { PopulatedCartList } from '../../../../mongo/models/cart'


export interface Props extends PopulatedCartList {}

const List = (props: Props) => {

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
      {props.items.map((item) => (
        <ListItem {...item} />
      ))}
      <ModalEditList
        list={props.items}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Flex>
  )
}

export default List
