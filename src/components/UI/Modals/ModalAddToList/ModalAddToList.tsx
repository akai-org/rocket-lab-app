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
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Select,
  Input,
  Heading,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PopulatedCartList } from '../../../../mongo/models/cart'
import { CartItem } from '../../../../store/Slices/storageCartSlice'
import { storageCartInfo } from '../../../../store/store'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeleteListPopover from '../../Popovers/DeleteListPopover'
import CheckoutItem from './CheckoutItem'
import { ExistingCheckoutItem } from './ExistingCheckoutItem'

interface ModalAddToListProps extends Omit<ModalProps, 'children'> {
  items: CartItem[]
  addNewCartList: (
    name: string,
    listToMerge?: PopulatedCartList
  ) => Promise<void>
}

const ModalAddToList = (props: ModalAddToListProps) => {
  // TODO: delete these hardcoded 'add_new'

  const [selectedList, setSelectedList] = useState('add_new')
  const [listName, setListName] = useState('')
  const [exsitingList, setExistingList] = useState<PopulatedCartList>()

  const storageCartData = useSelector(storageCartInfo)

  useEffect(() => {
    if (selectedList !== undefined && selectedList !== 'add_new') {
      const foundSelectedList = storageCartData.cartLists.find(
        (cartList) => cartList.id === selectedList
      )
      setExistingList(foundSelectedList)
    } else if (selectedList === 'add_new') {
      setExistingList(undefined)
    }
  }, [selectedList])

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
            {exsitingList && (
              <>
                <Heading mt="7px" mb="7px" size="md">
                  {exsitingList.name}
                </Heading>
                <Table>
                  <Thead>
                    <Tr fontSize="16px" fontWeight="700">
                      <Th>NAZWA</Th>
                      <Th textAlign="right">ILOŚĆ SZTUK</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {exsitingList.items.map((item) => (
                      <ExistingCheckoutItem key={item.item.id} item={item} />
                    ))}
                  </Tbody>
                </Table>
              </>
            )}
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
            {storageCartData.cartLists.map((cartList) => (
              <option value={cartList.id} key={cartList.id}>
                {cartList.name}
              </option>
            ))}
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
            onClick={() => props.addNewCartList(listName, exsitingList)}
            fontSize="16px"
            w="120px"
          >
            {exsitingList ? 'Dodaj do listy' : 'Dodaj listę'}
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
