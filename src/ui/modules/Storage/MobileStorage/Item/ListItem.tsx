import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
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

export const ListItem = memo(function ListItem({ item }: Props) {
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
          minH="90px"
          minW="90px"
          w="90px"
          h="90px"
        />
      </Flex>
      <Box
        h="100%"
        w="80%"
        color={colors.fontSecondary}
        m="0 auto 0 0"
        textAlign="left"
        p="20px"
      >
        <Text
          onClick={onOpenInfo}
          fontSize="sm"
          noOfLines={1}
          fontWeight="normal"
        >
          {item.name}
        </Text>

        <Text
          fontSize="xs"
          isTruncated
          fontWeight={item.quantity ? 'light' : 'normal'}
          color={item.quantity ? colors.fontSecondary : colors.errorPrimary}
        >
          {item.quantity ? `Ilość: ${item.quantity}` : 'Brak w magazynie'}
        </Text>
        <Flex flexDirection="row" mt="5px">
          <Flex justifyContent="flex-end">
            <ProductButton
              w="70px"
              onClick={onOpenDetails}
              fontSize="sm"
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
})
