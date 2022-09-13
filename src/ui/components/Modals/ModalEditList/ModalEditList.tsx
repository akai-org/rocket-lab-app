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
  Input,
} from '@chakra-ui/react'
import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PopulatedCartList } from 'mongo'
import { updateExistingCartLists } from 'store'
import { API_URL } from 'utils/constants'
import { useDeleteCartList } from 'utils/effects/useDeleteCartList'
import { fetcher } from 'utils/requests'
import { ProductButton, DeletePopover } from 'ui/components'
import { ListItem } from './ListItem'
import { useColors } from 'ui/theme'

interface ModalEditListProps extends Omit<ModalProps, 'children'> {
  cartList: PopulatedCartList
  name: string
}

export const ModalEditList = memo(function ModalEditList(
  props: ModalEditListProps
) {
  const dispatch = useDispatch()

  const [cartList, setCartList] = useState(props.cartList)
  const [listName, setListName] = useState(cartList.name)
  const colors = useColors()

  const deleteCartList = useDeleteCartList()

  const updateCartList = async () => {
    try {
      const updatedCartList = await fetcher(API_URL + '/api/cart/update', {
        method: 'PUT',
        body: { id: cartList.id, items: cartList.items, name: listName },
      })
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
      <ModalContent maxW="40rem" bgColor={colors.backgroundPrimary}>
        <ModalHeader pr="50px">
          <Input
            borderColor={colors.borderSecondary}
            h="30px"
            pl="5px"
            mb="5px"
            value={listName}
            onChange={(e) => {
              setListName(e.currentTarget.value)
            }}
            fontWeight="normal"
            fontSize="md"
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="sm" fontWeight="bold">
                  <Th w="80%">NAZWA</Th>
                  <Th w="1%" minW="120px" textAlign="right">
                    ILOŚĆ SZTUK
                  </Th>
                  <Th w="1%" textAlign="right">
                    Akcje
                  </Th>
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
            fontSize="sm"
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
            fontSize="sm"
            w="80px"
            ml="10px"
          >
            Zamknij
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={() => deleteCartList(props.cartList.id)}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})
