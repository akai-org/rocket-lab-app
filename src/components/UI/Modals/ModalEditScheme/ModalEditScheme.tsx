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
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../Popovers/DeletePopover'

interface ModalEditSchemeProps extends Omit<ModalProps, 'children'> {}

const ModalEditScheme = (props: ModalEditSchemeProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader pr="50px">
          <Input
            h="30px"
            pl="5px"
            mb="5px"
            value="Nazwa schematu"
            fontWeight="500"
            fontSize="19px"
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Table>
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th w="80%">NAZWA</Th>
                  <Th w="1%" minW="120px" textAlign="right">
                    ILOŚĆ SZTUK
                  </Th>
                  <Th w="18%" textAlign="right">
                    DOSTĘPNOŚĆ
                  </Th>
                  <Th w="1%" textAlign="right">
                    AKCJE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* <SchemeItem /> */}
                <Tr fontSize="14px" h="40px">
                  <Td>
                    {/* <Text>Item 1</Text> */}
                    Item 1
                  </Td>
                  <Td>500</Td>
                  <Td textAlign="right">Dostępny</Td>
                  <Td>
                    <Flex justifyContent="flex-end">
                      <AiOutlineClose cursor="pointer" />
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton fontSize="16px" w="80px" ml="10px">
            Zapisz
          </ProductButton>
          <ProductButton fontSize="16px" w="80px" ml="10px">
            Zamknij
          </ProductButton>
          <DeletePopover
            label="Czy na pewno chcesz usunąć ten schemat?"
            onClick={() => console.log('USUNIĘTO SCHEMAT')}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditScheme
