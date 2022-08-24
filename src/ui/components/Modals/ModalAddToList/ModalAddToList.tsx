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
} from '@chakra-ui/react'
import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PopulatedCartList } from 'mongo'
import { CartItem, storageCartInfo } from 'store'
import { ProductButton, ChosenListPopover, DeletePopover } from 'ui/components'
import { CheckoutItem } from './CheckoutItem'
import { useColors } from 'ui/theme'

interface ModalAddToListProps extends Omit<ModalProps, 'children'> {
  items: CartItem[]
  addNewCartList: (
    name: string,
    listToMerge?: PopulatedCartList
  ) => Promise<void>
}

export const ModalAddToList = memo((props: ModalAddToListProps) => {
  // TODO: delete these hardcoded 'add_new'

  const [selectedList, setSelectedList] = useState('add_new')
  const [listName, setListName] = useState('')
  const [exsitingList, setExistingList] = useState<PopulatedCartList>()
  const colors = useColors()

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
  }, [selectedList, storageCartData])

  return (
    <Modal
      {...props}
      onClose={() => {
        setSelectedList('add_new')
        props.onClose()
      }}
    >
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem" bgColor={colors.backgroundPrimary}>
        <ModalHeader>Dodanie do listy</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="250px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="sm" fontWeight="bold">
                  <Th w="80%">NAZWA</Th>
                  <Th w="1%" textAlign="right" minW="120px">
                    ILOŚĆ SZTUK
                  </Th>
                  <Th w="1" textAlign="right">
                    Akcje
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {props.items.map((item) => (
                  <CheckoutItem key={item.item.id} item={item} />
                ))}
              </Tbody>
            </Table>
          </Flex>
          <Text my="10px">Wybierz listę:</Text>
          <Select
            h="30px"
            borderColor={colors.borderSecondary}
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
          {exsitingList && (
            <ChosenListPopover
              name={exsitingList.name}
              list={exsitingList}
              onClick={() => {}}
            />
          )}
          {selectedList === 'add_new' && (
            <Input
              borderColor={colors.borderSecondary}
              mt="15px"
              h="30px"
              fontSize="sm"
              placeholder="Nazwa listy"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={() => {
              props.addNewCartList(listName, exsitingList)
              setSelectedList('add_new')
            }}
            fontSize="sm"
            w="120px"
          >
            {exsitingList ? 'Dodaj do listy' : 'Dodaj listę'}
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={() => {}}
          />
          <ProductButton
            fontSize="sm"
            colorScheme="blue"
            ml="10px"
            w="80px"
            onClick={() => {
              setSelectedList('add_new')
              props.onClose()
            }}
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})
