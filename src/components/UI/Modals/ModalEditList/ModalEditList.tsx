import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Flex,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../Popovers/DeletePopover'
import ListItem from './ListItem/ListItem'

interface ModalEditListProps extends Omit<ModalProps, 'children'> {
  list: Item[]
  name: string
}

const ModalEditList = (props: ModalEditListProps) => {
  const [name, setName] = useState(props.name)
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>{props.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th>NAZWA</Th>
                  <Th textAlign="right">ILOŚĆ SZTUK</Th>
                  <Th textAlign="right">Akcje</Th>
                </Tr>
              </Thead>
              <Tbody>
                {props.list.map((item) => (
                  <ListItem item={item} />
                ))}
              </Tbody>
            </Table>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={props.onClose}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zapisz
          </ProductButton>
          <ProductButton
            onClick={props.onClose}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zamknij
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={() => {}}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditList
