import { Flex, Image, Text, Box, useDisclosure } from '@chakra-ui/react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEdit from '../../../UI/Modals/ModalEdit'

interface Props {
  item: Item
}

const GridItem = ({ item }: Props) => {
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onClose: onCloseDetails,
  } = useDisclosure()

  return (
    <Flex flexDirection="column" w="50%" maxW="200px" m="10px auto 0 auto">
      <Image src={item.imageUrl} w="80%" m="5px auto" alt="" />
      <Box textAlign="center" w="90%" m="0 auto">
        <Text fontSize="16px" isTruncated fontWeight="500">
          {item.name}
        </Text>
        <Box w="100%" mb="5px">
          <Text fontSize="14px" fontWeight="400">
            {/* Warunkowe wyświetlanie ilości: jeżeli ilość===0 to napis brak w magazynie */}
            Ilość: 58
          </Text>
        </Box>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <ProductButton w="120px" onClick={onOpenDetails} fontSize="16px">
            Szczegóły
          </ProductButton>

          <ProductButton
            mt="5px"
            mb="25px"
            w="120px"
            onClick={() => {}}
            fontSize="16px"
          >
            Dodaj do listy
          </ProductButton>
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

export default GridItem
