import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Item, PopulatedItem } from '../../../../mongo/models/item'
import {
  addToCart,
  removeFromCart,
} from '../../../../store/Slices/storageCartSlice'
import { storageCartInfo } from '../../../../store/store'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEditItem from '../../../UI/Modals/ModalEditItem/ModalEditItem'
import ModalInfo from '../../../UI/Modals/ModalInfo/ModalInfo'

interface Props {
  item: PopulatedItem
}

const ListItem = ({ item }: Props) => {
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
    <Flex
      w="95%"
      m="0 auto"
      justifyContent="flex-start"
      borderBottom="2px solid #D5D5D5"
    >
      <Flex m="auto 0 auto 10px">
        <Image
          onClick={onOpenInfo}
          src={item.imageUrl}
          minH="100px"
          minW="100px"
          w="100px"
          h="100px"
        />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text onClick={onOpenInfo} fontSize="16px" fontWeight="500">
          {item.name}
        </Text>

        <Text
          fontSize="15px"
          isTruncated
          fontWeight={item.quantity ? '400' : '500'}
          color={item.quantity ? 'inherit' : 'red.500'}
        >
          {item.quantity ? `Ilość: ${item.quantity}` : 'Brak w magazynie'}
        </Text>
        <Flex flexDirection="row" mt="5px">
          <Flex justifyContent="flex-end">
            <ProductButton
              w="70px"
              onClick={onOpenDetails}
              fontSize="16px"
              mr="5px"
            >
              Edytuj
            </ProductButton>
            {/* @ts-ignore: FIXME */}
            {storageCartData.some((element) => element.id === item.id) ? (
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
        </Flex>
      </Box>
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
    </Flex>
  )
}

export default ListItem
