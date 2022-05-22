import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Select,
  Input,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { Item } from '../../../../mongo/models/item'
import { FutureCartItem } from '../../../../services/cartService'
import { CartItem } from '../../../../store/Slices/storageCartSlice'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeleteListPopover from '../../Popovers/DeleteListPopover'
import CheckoutItem from './CheckoutItem'

interface ModalAddToListProps extends Omit<ModalProps, 'children'> {
  items: CartItem[]
  addNewCartList: (name: string) => Promise<void>
}

const ModalAddToList = (props: ModalAddToListProps) => {
  const [selectedList, setSelectedList] = useState('add_new')
  const [listName, setListName] = useState('')

  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Dodanie do listy</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" h="350px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th>NAZWA</Th>
                  <Th textAlign="right">ILOŚĆ SZTUK</Th>
                  <Th textAlign="right">Akcje</Th>
                </Tr>
              </Thead>
              <Tbody>
                {props.items.map((item) => (
                  <CheckoutItem key={item.item.id} item={item} />
                ))}
              </Tbody>
            </Table>
          </Flex>
          <Text mt="20px" mb="5px">
            Wybierz listę:
          </Text>
          <Select
            h="30px"
            w="30%"
            borderColor="#D5D5D5"
            defaultValue="add_new"
            onChange={(e) => setSelectedList(e.target.value)}
          >
            <option value="add_new">Utwórz nową listę</option>
            <option value="list1">Lista 1</option>
            <option value="list2">Lista 2</option>
            <option value="list3">Lista 3</option>
          </Select>
          <Input
            mt="15px"
            maxW="400px"
            placeholder="Nazwa listy"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            visibility={selectedList !== 'add_new' ? 'hidden' : 'visible'}
          />
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={() => props.addNewCartList(listName)}
            fontSize="16px"
            w="120px"
          >
            Dodaj listę
          </ProductButton>
          <DeleteListPopover onClick={() => {}} />
          <ProductButton
            fontSize="16px"
            colorScheme="blue"
            ml="10px"
            w="80px"
            onClick={props.onClose}
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalAddToList
