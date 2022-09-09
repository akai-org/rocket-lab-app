import { Flex, Image, Text, Box, useDisclosure } from '@chakra-ui/react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { PopulatedItem } from 'mongo'
import { addToCart, removeFromCart, storageCartInfo } from 'store'
import { ProductButton, ModalEditItem, ModalInfo } from 'ui/components'
import { useColors } from 'ui/theme'
import { memo } from 'react'

interface Props {
  item: PopulatedItem
}

export const GridItem = memo(function GridItem({ item }: Props) {
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
    <Flex flexDirection="column" w="50%" maxW="200px" m="10px auto 0 auto">
      <Image
        onClick={onOpenInfo}
        src={item.imageUrl}
        w="80%"
        m="5px auto"
        alt=""
      />
      <Box textAlign="center" color={colors.fontSecondary} w="90%" m="0 auto">
        <Text onClick={onOpenInfo} fontSize="sm" isTruncated fontWeight="500">
          {item.name}
        </Text>
        <Box w="100%" mb="5px">
          <Text
            fontSize="xs"
            isTruncated
            fontWeight={item.quantity ? 'light' : 'normal'}
            color={item.quantity ? 'inherit' : colors.errorPrimary}
          >
            {item.quantity ? `Ilość: ${item.quantity}` : 'Brak w magazynie'}
          </Text>
        </Box>
        <Flex flexDirection="row" alignItems="center" justifyContent="center">
          <ProductButton
            mr="10px"
            w="80px"
            onClick={onOpenDetails}
            fontSize="sm"
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
})
