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
import { memo, useState, useRef, useEffect, useCallback } from 'react'
import { PopulatedSchema, PopulatedSchemaItem } from 'mongo'
import { useDispatch, useSelector } from 'react-redux'
import { itemsInfo, updateSchema } from 'store'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'
import * as _ from 'lodash'

interface ModalEditSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
  schema: PopulatedSchema
}

export const ModalEditScheme = memo(function ModalEditScheme({
  schema,
  ...props
}: ModalEditSchemeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  const items = useSelector(itemsInfo).items

  const [itemToDelete, setItemToDelete] = useState<string | undefined>()

  const filterItems = useCallback(() => {
    let itemsCopy = [...items]
    for (const schemaItem of schema.items) {
      itemsCopy = itemsCopy.filter((item) => item.id !== schemaItem.item.id)
    }
    return itemsCopy
  }, [items, schema.items])

  const [filteredItems, setFilteredItems] = useState(filterItems)

  const itemNumberInputRef = useRef<HTMLInputElement>(null)
  const itemInputRef = useRef<HTMLSelectElement>(null)

  const [copiedSchema, setCopiedSchema] = useState({ ...schema })

  useEffect(() => {
    if (schema.items.length === copiedSchema.items.length) return
    if (schema.items.length > copiedSchema.items.length) {
      const addedItems = _.differenceBy(schema.items, copiedSchema.items, 'id')
      setCopiedSchema((state) => ({
        ...state,
        items: [...state.items, ...addedItems],
      }))
    } else if (schema.items.length < copiedSchema.items.length) {
      const deletedItem = _.differenceBy(copiedSchema.items, schema.items, 'id')
      setCopiedSchema((state) => ({
        ...state,
        items: state.items.filter((item) => item.id !== deletedItem[0].id),
      }))
    }

    setFilteredItems(filterItems)
  }, [copiedSchema.items, filterItems, items, schema.items])

  const addItem = async (id: string) => {
    console.log(itemNumberInputRef.current?.value)
    try {
      // TODO: Start loading spinner here
      const updatedSchema = await fetcher(API_URL + '/api/schemas/addItem', {
        body: {
          schemaId: copiedSchema.id,
          schemaItem: {
            neededQuantity: itemNumberInputRef.current?.value || 1,
            item: id,
          },
        },
      })

      dispatch(updateSchema(updatedSchema))
    } catch (error) {
      console.log(error)
    } finally {
      // TODO: Stop loading spinner here
    }
  }

  const saveEdition = async () => {
    try {
      const updatedSchema = await fetcher(API_URL + '/api/schemas/update', {
        body: {
          schemaId: copiedSchema.id,
          schemaItems: copiedSchema.items,
          schemaName: copiedSchema.name,
          schemaDescription: copiedSchema.description,
        },
      })
      dispatch(updateSchema(updatedSchema))
    } catch (error) {
    } finally {
      props.onClose()
    }
  }

  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Edycja schematu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Text>Nazwa Schematu</Text>
            <Input
              h="30px"
              p="6px"
              mb="5px"
              placeholder="Wprowadź nazwę schematu"
              fontSize="sm"
              value={copiedSchema.name}
              onChange={(e) => {
                setCopiedSchema({
                  ...copiedSchema,
                  name: e.currentTarget.value,
                })
              }}
            />
            <Text>Opis:</Text>
            <Textarea
              fontSize="sm"
              p="5px"
              placeholder="Wprowadź opis"
              value={copiedSchema.description}
              onChange={(e) => {
                setCopiedSchema({
                  ...copiedSchema,
                  description: e.currentTarget.value,
                })
              }}
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
              >
                <NumberInputField
                  ref={itemNumberInputRef}
                  h="30px"
                  fontSize="sm"
                  px="5px"
                />
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
                    <Td
                      w="80%"
                      onClick={() => {
                        setItemToDelete(item.id)
                        onOpen()
                      }}
                      cursor="pointer"
                    >
                      {item.item.name}
                    </Td>
                    <Td w="1%" textAlign="right">
                      <NumberInput
                        allowMouseWheel
                        display="inline"
                        h="30px"
                        min={1}
                        onChange={(e) => {
                          setCopiedSchema((schemaCopy) => {
                            const itemsCopy = [...schemaCopy.items]
                            const changedItemIndex = itemsCopy.findIndex(
                              (copyItem) => copyItem.id === item.id
                            )
                            if (changedItemIndex === -1)
                              return { ...schemaCopy }

                            itemsCopy[changedItemIndex] = {
                              ...itemsCopy[changedItemIndex],
                              neededQuantity: +e,
                            }

                            return { ...schemaCopy, items: itemsCopy }
                          })
                        }}
                        value={
                          (
                            copiedSchema.items.find(
                              (schemaItem) => schemaItem.id === item.id
                            ) as PopulatedSchemaItem
                          ).neededQuantity
                        }
                      >
                        <NumberInputField h="30px" fontSize="xs" maxW="100px" />
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
          <ProductButton fontSize="sm" w="80px" ml="10px" onClick={saveEdition}>
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
      <DeleteItemDialog
        schemaId={copiedSchema.id}
        itemToDelete={itemToDelete}
        setItemToDelete={setItemToDelete}
        isOpenDialog={isOpen}
        onCloseDialog={onClose}
      />
    </Modal>
  )
})
