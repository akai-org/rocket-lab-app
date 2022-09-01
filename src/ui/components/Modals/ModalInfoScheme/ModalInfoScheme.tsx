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
import {
  QuantityBadge,
  DeletePopover,
  ProductButton,
  ModalEditScheme,
} from 'ui/components'
import { memo } from 'react'

interface ModalInfoSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
}

export const ModalInfoScheme = memo((props: ModalInfoSchemeProps) => {
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
            <Text fontWeight="normal" noOfLines={2} fontSize="lg">
              Schemat nr 1 - nazwa schematu
            </Text>
            <Text m="5px 0 15px 0">
              Opis:
              <br /> Tutaj jest opis schematu.
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
                <Tr fontSize="xs" h="40px">
                  <Td>Item 1</Td>
                  <Td w="1%" minW="120px" textAlign="right">
                    55
                  </Td>
                  <Td w="18%" textAlign="right">
                    <QuantityBadge schemeQuantity={101} storageQuantity={100} />
                  </Td>
                </Tr>
                <Tr fontSize="xs" h="40px">
                  <Td>Item 2</Td>
                  <Td w="1%" minW="120px" textAlign="right">
                    1255
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
          <ProductButton
            onClick={onOpenEditScheme}
            fontSize="sm"
            w="80px"
            ml="10px"
          >
            Edytuj
          </ProductButton>
          <ProductButton
            onClick={props.onClose}
            fontSize="sm"
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
})
