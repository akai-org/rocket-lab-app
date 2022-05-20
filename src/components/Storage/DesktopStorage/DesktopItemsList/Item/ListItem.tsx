import { Flex, Image, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { Item } from '../../../../../mongo/models/item'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEdit from '../../../../UI/Modals/ModalEdit'

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
    <>
      <Tr fontSize="14px" w="100%">
        <Td minW="250px">
          <Flex justifyContent="flex-start">
            <Image src={item.imageUrl} w="40px" h="40px" />
            <Text isTruncated lineHeight="40px" ml="10px">
              {item.name}
            </Text>
          </Flex>
        </Td>
        <Td w="70%" minW="300px" maxW="500px">
          <Text isTruncated>{item.description}</Text>
        </Td>
        <Td textAlign="right" minW="140px">
          <Text isTruncated color={item.quantity ? 'inherit' : 'red.500'}>
            {item.quantity ? item.quantity : 'brak w magazynie'}
          </Text>
        </Td>
        <Td w="10%">
          <Flex justifyContent="flex-end">
            <ProductButton
              w="120px"
              onClick={onOpenDetails}
              fontSize="16px"
              mx="5px"
            >
              Szczegóły
            </ProductButton>
            <ProductButton w="120px" onClick={() => {}} fontSize="16px">
              Dodaj do listy
            </ProductButton>
          </Flex>
        </Td>
      </Tr>
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
    </>
  )
}

export default ListItem
