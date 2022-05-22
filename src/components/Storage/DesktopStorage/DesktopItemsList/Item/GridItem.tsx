import { Flex, Image, Text, Box, useDisclosure } from '@chakra-ui/react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Item } from '../../../../../mongo/models/item'
import {
  addToCart,
  removeFromCart,
} from '../../../../../store/Slices/storageCartSlice'
import { storageCartInfo } from '../../../../../store/store'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEdit from '../../../../UI/Modals/ModalEdit/ModalEdit'
import ModalInfo from '../../../../UI/Modals/ModalInfo/ModalInfo'

interface Props {
  item: Item
}

const GridItem = ({ item }: Props) => {
  const dispatch = useDispatch()
  const storageCartData = useSelector(storageCartInfo).list
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
    <Flex flexDirection="column" maxW="190px" m="10px auto 0 auto">
      <Image
        onClick={onOpenInfo}
        cursor="pointer"
        src={item.imageUrl}
        w="154px"
        m="5px auto"
      />
      <Box textAlign="center" w="95%" overflow="elipsis" m="0 auto">
        <Text
          onClick={onOpenInfo}
          cursor="pointer"
          fontSize="16px"
          isTruncated
          fontWeight="400"
        >
          {item.name}
        </Text>
        <Box w="100%" mb="5px">
          <Text
            fontSize="14px"
            isTruncated
            fontWeight={item.quantity ? '400' : '500'}
            color={item.quantity ? 'inherit' : 'red.500'}
          >
            {item.quantity ? `Ilość: ${item.quantity}` : 'Brak w magazynie'}
          </Text>
        </Box>
        <Flex flexDirection="row" alignItems="center" justifyContent="center">
          <ProductButton
            w="80px"
            onClick={onOpenDetails}
            fontSize="16px"
            mr="10px"
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
      </Box>
      <ModalInfo
        id={item.id}
        name={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
      <ModalEdit
        id={item.id}
        name={item.name}
        description={item.description}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
        onClose={onCloseDetails}
        isOpen={isOpenDetails}
        isCentered
      />
    </Flex>
  )
}

export default GridItem
