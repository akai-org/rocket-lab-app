import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  Text,
  Select,
  useDisclosure,
} from '@chakra-ui/react'
import { DeleteItemDialog, QuantityBadge, ProductButton } from 'ui/components'
import { memo, useState, useRef, useEffect } from 'react'
import { PopulatedSchema } from 'mongo'
import { useSelector } from 'react-redux'
import { itemsInfo } from 'store'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'

interface ModalEditSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
  schema: PopulatedSchema
}

export const ModalEditScheme = memo(
  ({ schema, ...props }: ModalEditSchemeProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const items = useSelector(itemsInfo).items
    const [filteredItems, setFilteredItems] = useState(() => {
      let itemsCopy = [...items]
      for (const schemaItem of schema.items) {
        itemsCopy = itemsCopy.filter((item) => item.id !== schemaItem.item.id)
      }
      return itemsCopy
    })

    const itemNumberInputRef = useRef<HTMLInputElement>(null)
    const itemInputRef = useRef<HTMLSelectElement>(null)

    const [copiedSchema, setCopiedSchema] = useState({ ...schema })
    const [rawScehma, setRawSchema] = useState()

    const addItem = async (id: string) => {
      await fetcher(API_URL + '/api/schemas/addItem', {
        body: {
          schemaId: copiedSchema.id,
          schemaItem: {
            neededQuantity: itemNumberInputRef.current?.value || 1,
            item: id,
          },
        },
      })
    }

    return (
      <Modal {...props}>
        <ModalOverlay backdropFilter="blur(3px)" />
        <ModalContent maxW="40rem">
          <ModalHeader>Edycja schematu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDirection="column"
              maxH="350px"
              overflowY="scroll"
              w="100%"
            >
              <Text>{copiedSchema.name}</Text>
              <Input
                h="30px"
                p="6px"
                mb="5px"
                placeholder="Wprowadź nazwę schematu"
                fontSize="sm"
              />
              <Text>Opis:</Text>
              <Textarea
                fontSize="sm"
                p="5px"
                placeholder="Wprowadź opis"
                defaultValue={copiedSchema.description}
              />
              <Text mt="10px">Przedmioty</Text>
              <Flex alignItems="center">
                <Select
                  ref={itemInputRef}
                  fontSize="sm"
                  h="30px"
                  placeholder="Wybierz przedmiot"
                >
                  {filteredItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <NumberInput
                  allowMouseWheel
                  h="30px"
                  maxW="100px"
                  minW="67px"
                  ml="10px"
                  defaultValue={1}
                  min={1}
                  ref={itemNumberInputRef}
                >
                  <NumberInputField h="30px" fontSize="sm" px="5px" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <Flex>
                <ProductButton
                  m="20px 0 0 auto"
                  fontSize="sm"
                  onClick={() => addItem(itemInputRef.current?.value as string)}
                  w="150px"
                >
                  Dodaj przedmiot
                </ProductButton>
              </Flex>
              <Table w="100%">
                <Thead>
                  <Tr fontSize="sm" fontWeight="bold">
                    <Th w="80%">NAZWA</Th>
                    <Th w="1%" minW="120px" textAlign="right">
                      ILOŚĆ SZTUK
                    </Th>
                    <Th w="18%" textAlign="right">
                      DOSTĘPNOŚĆ
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* <SchemeItem /> */}
                  {copiedSchema.items.map((item) => (
                    <Tr fontSize="xs" h="40px" key={item.id}>
                      <Td w="80%" onClick={onOpen} cursor="pointer">
                        {item.item.name}
                      </Td>
                      <Td w="1%" textAlign="right">
                        <NumberInput
                          allowMouseWheel
                          display="inline"
                          h="30px"
                          min={1}
                        >
                          <NumberInputField
                            h="30px"
                            fontSize="xs"
                            maxW="100px"
                          />
                          <NumberInputStepper h="30px">
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Td>
                      <Td w="18%" textAlign="right">
                        <QuantityBadge
                          schemeQuantity={item.neededQuantity}
                          storageQuantity={item.item.quantity}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <ProductButton fontSize="sm" w="80px" ml="10px">
              Zapisz
            </ProductButton>
            <ProductButton
              onClick={props.onClose}
              fontSize="sm"
              w="80px"
              ml="10px"
            >
              Zamknij
            </ProductButton>
          </ModalFooter>
        </ModalContent>
        <DeleteItemDialog isOpenDialog={isOpen} onCloseDialog={onClose} />
      </Modal>
    )
  }
)
