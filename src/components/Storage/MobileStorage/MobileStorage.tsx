import React, { useState, useEffect } from 'react'
import { Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import Sorting from './Sorting/Sorting'
import GridItem from './Item/GridItem'
import ListItem from './Item/ListItem'
import {
  MainViewProps,
  sortingType,
} from '../../../utils/types/frontendGeneral'
import FiltersGeneral from '../../UI/FiltersGeneral/FiltersGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { HiInformationCircle } from 'react-icons/hi'
import ModalAddToList from '../../UI/Modals/ModalAddToList/ModalAddToList'
import { Router } from 'next/router'
import StorageEdit from './StorageEdit/StorageEdit'
import { PopulatedCartList, CartItem } from '../../../mongo/models/cart'
import {
  updateExistingCartLists,
  clearCart,
} from '../../../store/Slices/storageCartSlice'
import { fetcher } from '../../../utils/requests'
import { API_URL, ITEMS_QUERY_LIMIT } from '../../../utils/constants'
import ProductButton from '../../UI/Custom Buttons/ProductButton/ProductButton'

const MobileStorage = ({ items, setItems, itemsCount }: MainViewProps) => {
  const [listType, setListType] = useState<sortingType>('grid')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const storageCartData = useSelector(storageCartInfo)
  const toast = useToast()
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useDisclosure()
  const id = 'add-to-list-toast'

  const dispatch = useDispatch()
  const [skip, setSkip] = useState(ITEMS_QUERY_LIMIT)

  Router.events.on('beforeHistoryChange', () => {
    toast.closeAll()
  })

  // TODO: The exact same component is used in DesktopStorage.tsx
  const addNewList = async (name: string, listToMerge?: PopulatedCartList) => {
    try {
      if (!listToMerge) {
        await fetcher(API_URL + '/api/cart/add', {
          method: 'POST',
          body: { name, items: storageCartData.newCartList },
        })
      } else {
        const toAddList = [...storageCartData.newCartList]
        const newList: CartItem[] = []
        for (const item of listToMerge.items) {
          const foundCopyindex = toAddList.findIndex(
            (cartItem) => cartItem.item.id === item.item?.id
          )
          const changedItem = { ...item }
          if (toAddList[foundCopyindex]) {
            changedItem.quantity += toAddList[foundCopyindex].quantity

            toAddList.splice(foundCopyindex, 1)
          }
          newList.push(changedItem)
        }
        const updatedList = await fetcher(API_URL + '/api/cart/update', {
          method: 'PUT',
          body: { id: listToMerge.id, items: [...toAddList, ...newList] },
        })
        console.log(updatedList)
        dispatch(updateExistingCartLists(updatedList))
      }
      dispatch(clearCart())
      onCloseDetails()
    } catch (error) {
      console.log(error)
    }
  }

  const loadMoreItems = async () => {
    try {
      const moreItems = await fetcher(API_URL + '/api/items', { body: skip })
      setSkip((state) => state + ITEMS_QUERY_LIMIT)
      if (setItems) {
        setItems((state) => [...state, ...moreItems])
      }
      console.log(moreItems)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!toast.isActive(id) && storageCartData.newCartList.length) {
      toast({
        id,
        position: 'top-left',
        render: () => (
          <Button
            bgColor="#FF7700"
            w="260px"
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
    } else if (storageCartData.newCartList.length === 0) {
      toast.closeAll()
    }
  }, [storageCartData.newCartList, isOpenDetails])

  return (
    <Flex
      flexWrap="wrap"
      minW="300px"
      m="10px 0"
      mb={isFiltersOpen ? '320px' : '60px'}
    >
      <Sorting setListType={setListType} listType={listType} />
      <StorageEdit />
      {listType === 'grid'
        ? items && items.map((item) => <GridItem item={item} key={item.id} />)
        : items && items.map((item) => <ListItem item={item} key={item.id} />)}
      <Flex w="100%" alignItems="center" justifyContent="center">
        <ProductButton
          mt="25px"
          mb="25px"
          w="250px"
          h="50px"
          disabled={skip >= itemsCount}
          onClick={loadMoreItems}
        >
          Załaduj więcej
        </ProductButton>
      </Flex>
      <FiltersGeneral>
        {(props) => <Filters {...props} setIsFiltersOpen={setIsFiltersOpen} />}
      </FiltersGeneral>
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

export default MobileStorage
