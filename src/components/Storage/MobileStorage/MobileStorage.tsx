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
import { storageCartInfo } from '../../../store/store'
import { HiInformationCircle } from 'react-icons/hi'
import ModalAddToList from '../../UI/Modals/ModalAddToList/ModalAddToList'
import { Router } from 'next/router'
import StorageEdit from './StorageEdit/StorageEdit'

const MobileStorage = ({ items }: MainViewProps) => {
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

  Router.events.on('beforeHistoryChange', () => {
    toast.closeAll()
  })

  useEffect(() => {
    if (!toast.isActive(id) && storageCartData.list.length) {
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
    } else if (storageCartData.list.length === 0) {
      toast.closeAll()
    }
  }, [storageCartData.list, isOpenDetails])

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
      <FiltersGeneral>
        {(props) => <Filters {...props} setIsFiltersOpen={setIsFiltersOpen} />}
      </FiltersGeneral>
      <ModalAddToList
        items={storageCartData.list}
        onClose={onCloseDetails}
        isOpen={isOpenDetails}
        isCentered
      />
    </Flex>
  )
}

export default MobileStorage
