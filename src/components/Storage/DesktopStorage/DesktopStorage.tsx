import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import FiltersControlls from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import { MainViewProps } from '../../../utils/types/frontendGeneral'
import FiltersGeneral from '../../UI/FiltersGeneral/FiltersGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { useEffect } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import ModalAddToList from '../../UI/Modals/ModalAddToList/ModalAddToList'
import { fetcher } from '../../../utils/requests'
import {
  clearCart,
  updateExistingCartLists,
} from '../../../store/Slices/storageCartSlice'
import {
  CartItem,
  CartList,
  PopulatedCartList,
} from '../../../mongo/models/cart'

const DesktopStorage = ({ items, itemsCount }: MainViewProps) => {
  const toast = useToast()
  const storageCartData = useSelector(storageCartInfo)
  const dispatch = useDispatch()
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useDisclosure()
  const id = 'add-to-list-toast'

  const addNewList = async (name: string, listToMerge?: PopulatedCartList) => {
    try {
      if (!listToMerge) {
        await fetcher('http://localhost:3000/api/cart/add', {
          method: 'POST',
          body: { name, items: storageCartData.newCartList },
        })
      } else {
        const toAddList = [...storageCartData.newCartList]
        const newList: CartItem[] = []
        for (const item of listToMerge.items) {
          const foundCopyindex = toAddList.findIndex(
            (cartItem) => cartItem.item.id === item.item.id
          )
          const changedItem = { ...item }
          if (toAddList[foundCopyindex]) {
            changedItem.quantity += toAddList[foundCopyindex].quantity

            toAddList.splice(foundCopyindex, 1)
          }
          newList.push(changedItem)
        }
        const updatedList = await fetcher(
          'http://localhost:3000/api/cart/update',
          {
            method: 'PUT',
            body: { id: listToMerge.id, items: [...toAddList, ...newList] },
          }
        )
        console.log(updatedList)
        dispatch(updateExistingCartLists(updatedList))
      }
      dispatch(clearCart())
      onCloseDetails()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!toast.isActive(id) && storageCartData.newCartList.length) {
      toast({
        id,
        position: 'top',
        render: () => (
          <Button
            bgColor="#FF7700"
            w="300px"
            p="15px"
            borderRadius="10px"
            h="60px"
            color="white"
            onClick={() => {
              onOpenDetails()
              toast.closeAll()
            }}
          >
            <Flex flexDirection="column" w="100%" justifyContent="flex-start">
              <Flex lineHeight="20px" alignItems="center">
                <HiInformationCircle size="22px" />
                <Text fontWeight="500" fontSize="18px" ml="5px">
                  Wybrano przedmioty
                </Text>
              </Flex>
              <Text fontSize="17px" fontWeight="400" ml="30px" textAlign="left">
                Kliknij aby wybrać listę
              </Text>
            </Flex>
          </Button>
        ),
        duration: 36000000,
        isClosable: false,
      })
    }
  }, [storageCartData.newCartList.length, isOpenDetails])

  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="95%" flexDirection="column" ml="223px" p="40px">
        <FiltersGeneral>
          {(props) => <FiltersControlls {...props} />}
        </FiltersGeneral>
        <DesktopItemsList itemsCount={itemsCount} items={items} />
      </Flex>
      {!storageCartData.newCartList.length && toast.closeAll()}
      <ModalAddToList
        addNewCartList={addNewList}
        items={storageCartData.newCartList}
        onClose={onCloseDetails}
        isOpen={isOpenDetails}
        isCentered
      />
    </Flex>
  )
}

export default DesktopStorage
