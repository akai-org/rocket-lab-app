import {
  Flex,
  Tr,
  Td,
  Image,
  Text,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { CartItem } from '../../../../../mongo/models/cart'
import ModalInfo from '../../ModalInfo/ModalInfo'

interface ModalEditListProps {
  cartItem: CartItem
  changeQuantity: (newQuantity: number, itemId: string) => void
  onRemoveItem: (itemId: string) => void
}

const ListItem = ({
  cartItem,
  changeQuantity,
  onRemoveItem,
}: ModalEditListProps) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  return cartItem.item ? (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex lineHeight="40px" onClick={onOpenInfo} cursor="pointer">
          <Text fontWeight="500" noOfLines={1}>
            {cartItem.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          allowMouseWheel
          display="inline"
          h="30px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={cartItem.quantity}
          onChange={(e) => {
            changeQuantity(+e, cartItem.id)
          }}
          min={1}
        >
          <NumberInputField h="30px" minW="80px" />
          <NumberInputStepper h="30px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">
          <AiOutlineClose
            onClick={() => onRemoveItem(cartItem.id)}
            cursor="pointer"
          />
        </Flex>
      </Td>
      <ModalInfo
        categories={cartItem.item.categories}
        id={cartItem.item.id}
        name={cartItem.item.name}
        description={cartItem.item.description}
        imageUrl={cartItem.item.imageUrl}
        quantity={cartItem.item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  ) : null
}

export default ListItem
