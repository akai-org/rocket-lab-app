import {
  Flex,
  Text,
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
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../Popovers/DeletePopover'
import ModalEditScheme from '../ModalEditScheme/ModalEditScheme'

interface ModalInfoSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
}

const ModalInfoScheme = (props: ModalInfoSchemeProps) => {
  const {
    isOpen: isOpenEditScheme,
    onOpen: onOpenEditScheme,
    onClose: onCloseEditScheme,
  } = useDisclosure()
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Informacje o schemacie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Text fontWeight="500" noOfLines={2} fontSize="19px">
              Nazwa schematu
            </Text>
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
                </Tr>
              </Thead>
              <Tbody>
                {/* <SchemeItem /> */}
                <Tr fontSize="14px" h="40px">
                  <Td>Item 1</Td>
                  <Td w="1%" minW="120px" textAlign="right">
                    55
                  </Td>
                  <Td w="18%" textAlign="right">
                    Dostępny
                  </Td>
                </Tr>
                <Tr fontSize="14px" h="40px">
                  <Td>Item 2</Td>
                  <Td w="1%" minW="120px" textAlign="right">
                    1255
                  </Td>
                  <Td w="18%" textAlign="right">
                    Częściowo
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={onOpenEditScheme}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Edytuj
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
            label="Czy na pewno chcesz usunąć ten schemat?"
            onClick={() => console.log('USUNIĘTO SCHEMAT')}
          />
        </ModalFooter>
      </ModalContent>
      <ModalEditScheme
        onClose={onCloseEditScheme}
        isOpen={isOpenEditScheme}
        isCentered
      />
    </Modal>
  )
}

export default ModalInfoScheme
