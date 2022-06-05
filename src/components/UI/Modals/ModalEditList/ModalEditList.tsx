import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Flex,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CartItem, PopulatedCartList } from '../../../../mongo/models/cart'
import {
  removeExisitngCartList,
  updateExistingCartLists,
} from '../../../../store/Slices/storageCartSlice'
import { API_URL } from '../../../../utils/constants'
import { fetcher } from '../../../../utils/requests'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../Popovers/DeletePopover'
import ListItem from './ListItem/ListItem'

interface ModalEditListProps extends Omit<ModalProps, 'children'> {
  cartList: PopulatedCartList
  name: string
}

const ModalEditList = (props: ModalEditListProps) => {
  const dispatch = useDispatch()

  const [cartList, setCartList] = useState(props.cartList)

  console.log(props.cartList)

  // TODO: The same function is used in Desktop List & Mobile list - redundancy
  const deleteCartList = async () => {
    try {
      const deletedCartList = await fetcher(
        API_URL + '/api/cart/delete',
        {
          method: 'DELETE',
          body: { id: props.cartList.id },
        }
      )
      dispatch(removeExisitngCartList(deletedCartList))
    } catch (error) {
      console.log(error)
    }
  }

  const updateCartList = async () => {
    try {
      const updatedCartList = await fetcher(
        API_URL + '/api/cart/update',
        { method: 'PUT', body: { id: cartList.id, items: cartList.items } }
      )
      dispatch(updateExistingCartLists(updatedCartList))
    } catch (error) {
      console.log(error)
    }
  }

  const removeCartListItem = (itemId: string) => {
    setCartList((state) => {
      const updatedItems = state.items.filter((item) => item.id !== itemId)
      return { ...state, items: updatedItems }
    })
  }

  const changeQuantity = (newQuantity: number, itemId: string) => {
    setCartList((state) => {
      const items = [...state.items]
      const itemIndex = items.findIndex((item) => item.id === itemId)
      const updatedItem = { ...items[itemIndex], quantity: newQuantity }
      items.splice(itemIndex, 1, updatedItem)
      return { ...state, items }
    })
  }

  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>{cartList.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th>NAZWA</Th>
                  <Th textAlign="right">ILOŚĆ SZTUK</Th>
                  <Th textAlign="right">Akcje</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartList.items.map((item) => (
                  <ListItem
                    onRemoveItem={removeCartListItem}
                    changeQuantity={changeQuantity}
                    key={item.id}
                    cartItem={item}
                  />
                ))}
              </Tbody>
            </Table>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={() => {
              updateCartList()
              props.onClose()
            }}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zapisz
          </ProductButton>
          <ProductButton
            onClick={() => {
              setCartList(props.cartList)
              props.onClose()
            }}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zamknij
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={deleteCartList}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditList
