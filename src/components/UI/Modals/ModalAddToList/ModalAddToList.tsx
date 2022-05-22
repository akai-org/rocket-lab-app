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
} from '@chakra-ui/react'
import { Item } from '../../../../../its-not-rocket-science-app/src/mongo/models/item'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeleteListPopover from '../../Popovers/DeleteListPopover'
import CheckoutItem from './CheckoutItem'

interface ModalAddToListProps extends Omit<ModalProps, 'children'> {
  items: Item[]
}

const ModalAddToList = (props: ModalAddToListProps) => {
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
                  <CheckoutItem item={item} />
                ))}
              </Tbody>
            </Table>
          </Flex>
          <Text mt="20px" mb="5px">
            Wybierz listę:
          </Text>
          <Select h="30px" w="30%" borderColor="#D5D5D5">
            <option value="list1">Lista 1</option>
            <option value="list2">Lista 2</option>
            <option value="list3">Lista 3</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <ProductButton onClick={() => {}} fontSize="16px" w="120px">
            Dodaj do listy
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
