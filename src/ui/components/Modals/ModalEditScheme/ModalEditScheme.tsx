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
import DeleteItemDialog from '../../AlertDialogs/DeleteItemDialog'
import QuantityBadge from '../../Badges/QuantityBadge'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'

interface ModalEditSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
}

const ModalEditScheme = (props: ModalEditSchemeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Edycja schematu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Text>Nazwa schematu</Text>
            <Input
              h="30px"
              p="6px"
              mb="5px"
              placeholder="Wprowadź nazwę schematu"
              fontSize="sm"
            />
            <Text>Opis:</Text>
            <Textarea fontSize="sm" p="5px" placeholder="Wprowadź opis" />
            <Text mt="10px">Przedmioty</Text>
            <Flex alignItems="center">
              <Select fontSize="sm" h="30px" placeholder="Wybierz przedmiot">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <NumberInput
                allowMouseWheel
                h="30px"
                maxW="100px"
                minW="67px"
                ml="10px"
                min={1}
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
                // onClick={}
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
                <Tr fontSize="xs" h="40px">
                  <Td w="80%" onClick={onOpen} cursor="pointer">
                    Item 1
                  </Td>
                  <Td w="1%" textAlign="right">
                    <NumberInput
                      allowMouseWheel
                      display="inline"
                      h="30px"
                      min={1}
                    >
                      <NumberInputField h="30px" fontSize="xs" maxW="100px" />
                      <NumberInputStepper h="30px">
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td w="18%" textAlign="right">
                    <QuantityBadge schemeQuantity={10} storageQuantity={50} />
                  </Td>
                </Tr>
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

export default ModalEditScheme
