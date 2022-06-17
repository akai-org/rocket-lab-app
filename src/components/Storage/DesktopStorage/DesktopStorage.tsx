import { Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'
import FiltersControlls from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import { MainViewProps } from '../../../utils/types/frontendGeneral'
import FiltersGeneral from '../../UI/FiltersGeneral/FiltersGeneral'
import { useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { useEffect } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import ModalAddToList from '../../UI/Modals/ModalAddToList/ModalAddToList'
import Router from 'next/router'
import StorageEdit from './StorageEdit/StorageEdit'
import { useAddNewList } from '../../../utils/effects/useAddNewList'

const DesktopStorage = ({ items, itemsCount }: MainViewProps) => {
  const toast = useToast()
  const storageCartData = useSelector(storageCartInfo)
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useDisclosure()
  const id = 'add-to-list-toast'

  Router.events.on('beforeHistoryChange', () => {
    toast.closeAll()
  })
  const addNewList = useAddNewList(onCloseDetails)

  useEffect(() => {
    if (!toast.isActive(id) && storageCartData.newCartList.length !== 0) {
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
    } else if (storageCartData.newCartList.length === 0) {
      toast.closeAll()
    }
  }, [storageCartData.newCartList.length, isOpenDetails])

  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="95%" flexDirection="column" ml="223px" p="40px">
        <StorageEdit />
        <FiltersControlls />
        <DesktopItemsList itemsCount={itemsCount} items={items} />
      </Flex>
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
