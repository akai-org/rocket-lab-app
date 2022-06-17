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
import { useSelector } from 'react-redux'
import { itemsInfo, storageCartInfo } from '../../../store/store'
import { HiInformationCircle } from 'react-icons/hi'
import ModalAddToList from '../../UI/Modals/ModalAddToList/ModalAddToList'
import { Router, useRouter } from 'next/router'
import StorageEdit from './StorageEdit/StorageEdit'
import { ITEMS_QUERY_LIMIT } from '../../../utils/constants'
import ProductButton from '../../UI/Custom Buttons/ProductButton/ProductButton'
import { useAddNewList } from '../../../utils/effects/useAddNewList'
import queryString from 'query-string'

const MobileStorage = ({ setItems, itemsCount }: MainViewProps) => {
  const router = useRouter()
  const query = queryString.parseUrl(router.asPath).query
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
  const [skip, setSkip] = useState(ITEMS_QUERY_LIMIT)
  const items = useSelector(itemsInfo).displayItems

  Router.events.on('beforeHistoryChange', () => {
    toast.closeAll()
  })

  const addNewList = useAddNewList(onCloseDetails)

  const processedItems = [...items].splice(0, skip)

  const loadMoreItems = () => {
    setSkip((state) => {
      const newAmount = state + ITEMS_QUERY_LIMIT
      if (newAmount <= items.length) {
        return newAmount
      } else {
        return items.length
      }
    })
  }

  useEffect(() => {
    setSkip(ITEMS_QUERY_LIMIT)
  }, [query.sort])

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
        ? processedItems.map((item) => <GridItem item={item} key={item.id} />)
        : processedItems.map((item) => <ListItem item={item} key={item.id} />)}
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
      <Filters setIsFiltersOpen={setIsFiltersOpen} />
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
