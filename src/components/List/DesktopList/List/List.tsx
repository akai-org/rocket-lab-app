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
import {
  CartItem,
  CartList,
  PopulatedCartList,
} from '../../../../mongo/models/cart'
import DeletePopover from '../../../UI/Popovers/DeletePopover'
import ListItem from '../ListItem/ListItem'
import { fetcher } from '../../../../utils/requests'
import { useDispatch } from 'react-redux'
import { removeExisitngCartList } from '../../../../store/Slices/storageCartSlice'

export interface Props extends PopulatedCartList {}

const List = (props: Props) => {
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
  } = useDisclosure()

  const dispatch = useDispatch()

  const deleteCartList = async () => {
    try {
      const deletedCartList = await fetcher(
        'http://localhost:3000/api/cart/delete',
        {
          method: 'DELETE',
          body: { id: props.id },
        }
      )
      dispatch(removeExisitngCartList(deletedCartList))
    } catch (error) {
      console.log(error)
    }
  }

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
            {props.name}
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
              onClick={deleteCartList}
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
            {props.items.map((item) => (
              <ListItem key={item.id} {...item} />
            ))}
          </Tbody>
        </Table>
      </Flex>
      <ModalEditList
        list={props.items}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Box>
  )
}

export default List
