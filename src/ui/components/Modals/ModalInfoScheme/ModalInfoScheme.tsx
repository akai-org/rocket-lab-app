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
import { PopulatedSchema } from 'mongo'

interface ModalInfoSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
  schema: PopulatedSchema
}

export const ModalInfoScheme = memo(
  ({ schema, ...props }: ModalInfoSchemeProps) => {
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
            <Flex
              flexDirection="column"
              maxH="350px"
              overflowY="scroll"
              w="100%"
            >
              <Text
                fontWeight="normal"
                overflow="auto"
                noOfLines={2}
                fontSize="lg"
              >
                {schema.name}
              </Text>
              {schema.description && (
                <Text m="5px 0 15px 0">
                  Opis:
                  <br /> {schema.description}
                </Text>
              )}
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
                  {schema.items.map((item) => (
                    <Tr key={item.id} fontSize="xs" h="40px">
                      <Td>{item.item.name}</Td>
                      <Td w="1%" minW="120px" textAlign="right">
                        {item.neededQuantity}
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
          schema={schema}
        />
      </Modal>
    )
  }
)
