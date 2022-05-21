import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEdit from '../../../UI/Modals/ModalEdit'

interface Props {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
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
          src={item.imageUrl}
          minH="100px"
          minW="100px"
          w="100px"
          h="100px"
        />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" fontWeight="500">
          {item.name}
        </Text>

        <Text fontSize="16px">Ilość: 58</Text>
        <Flex flexDirection="row" mt="5px">
          <Flex justifyContent="flex-end">
            <ProductButton
              w="100px"
              onClick={onOpenDetails}
              fontSize="16px"
              mr="5px"
            >
              Szczegóły
            </ProductButton>

            <ProductButton w="120px" fontSize="16px">
              Dodaj do listy
            </ProductButton>
          </Flex>
        </Flex>
      </Box>
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

export default ListItem
