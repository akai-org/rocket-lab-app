import { Flex, Image, Text, Box, useDisclosure } from '@chakra-ui/react'
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
import { useColors } from '../../../../../../theme/useColors'

interface Props {
  item: PopulatedItem
}

const GridItem = ({ item }: Props) => {
  const dispatch = useDispatch()
  const storageCartData = useSelector(storageCartInfo).newCartList
  const colors = useColors()
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
    <Flex flexDirection="column" w="180px" m="10px auto 0 auto">
      <Image
        onClick={onOpenInfo}
        cursor="pointer"
        src={item.imageUrl}
        w="154px"
        m="5px auto"
      />
      <Box
        textAlign="center"
        w="95%"
        color={colors.fontSecondary}
        overflow="elipsis"
        m="0 auto"
      >
        <Text
          onClick={onOpenInfo}
          cursor="pointer"
          fontSize="sm"
          isTruncated
          fontWeight="light"
        >
          {item.name}
        </Text>
        <Box w="100%" mb="5px">
          <Text
            fontSize="xs"
            isTruncated
            fontWeight={item.quantity ? 'light' : 'normal'}
            color={item.quantity ? colors.fontSecondary : colors.errorPrimary}
          >
            {item.quantity ? `Ilość: ${item.quantity}` : 'Brak w magazynie'}
          </Text>
        </Box>
        <Flex flexDirection="row" alignItems="center" justifyContent="center">
          <ProductButton
            w="80px"
            onClick={onOpenDetails}
            fontSize="sm"
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

export default GridItem
