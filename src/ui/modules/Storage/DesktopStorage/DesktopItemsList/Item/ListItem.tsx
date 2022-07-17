import { Flex, Image, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { PopulatedItem } from '../../../../../../mongo/models/item'
import {
  addToCart,
  removeFromCart,
} from '../../../../../../store/Slices/storageCartSlice'
import { storageCartInfo } from '../../../../../../store/store'
import ProductButton from '../../../../../components/Custom Buttons/ProductButton/ProductButton'
import ModalEditItem from '../../../../../components/Modals/ModalEditItem/ModalEditItem'
import ModalInfo from '../../../../../components/Modals/ModalInfo/ModalInfo'

interface Props {
  item: PopulatedItem
}

const ListItem = ({ item }: Props) => {
  console.log(item)
  const dispatch = useDispatch()
  const storageCartData = useSelector(storageCartInfo).newCartList
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useDisclosure()
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return (
    <>
      <Tr fontSize="14px">
        <Td justifyContent="flex-start" onClick={onOpenInfo} cursor="pointer">
          <Flex>
            <Image src={item.imageUrl} w="40px" h="40px" />
            <Text noOfLines={1} lineHeight="40px" ml="10px">
              {item.name}
            </Text>
          </Flex>
        </Td>
        <Td onClick={onOpenInfo} cursor="pointer">
          <Text noOfLines={1}>{item.description}</Text>
        </Td>
        <Td textAlign="right">
          <Text
            noOfLines={1}
            fontSize="14px"
            fontWeight={item.quantity ? '400' : '500'}
            color={item.quantity ? 'inherit' : 'red.500'}
          >
            {item.quantity ? item.quantity : 'Brak w magazynie'}
          </Text>
        </Td>
        <Td w="10%">
          <Flex justifyContent="flex-end">
            <ProductButton
              w="80px"
              onClick={onOpenDetails}
              fontSize="16px"
              mx="5px"
            >
              Edytuj
            </ProductButton>
            {storageCartData.some((element) => element.item.id === item.id) ? (
              <AiOutlineCheck
                size="25px"
                onClick={() => {
                  dispatch(removeFromCart(item))
                }}
                cursor="pointer"
              />
            ) : (
              <AiOutlinePlus
                size="25px"
                cursor="pointer"
                onClick={() => {
                  dispatch(addToCart(item))
                }}
              />
            )}
          </Flex>
        </Td>
      </Tr>
      <ModalInfo
        categories={item.categories}
        id={item.id}
        name={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
      <ModalEditItem
        id={item.id}
        name={item.name}
        categories={item.categories}
        description={item.description}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        onClose={onCloseDetails}
        isOpen={isOpenDetails}
        isCentered
      />
    </>
  )
}

export default ListItem
