import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { SchemeMenu, ModalInfoScheme } from 'ui/components'
import { SchemeItem } from './SchemeItem'
import { memo } from 'react'
import { PopulatedSchema } from 'mongo'
import { API_URL } from 'utils/constants'
import { fetcher } from 'utils/requests'
import { deleteSchema } from 'store'
import { useColors } from 'ui/theme'

interface Props {
  schema: PopulatedSchema
}

export const Scheme = memo(({ schema }: Props) => {
  const {
    isOpen: isOpenInfoScheme,
    onOpen: onOpenInfoScheme,
    onClose: onCloseInfoScheme,
  } = useDisclosure()
  const dispatch = useDispatch()
  const colors = useColors()

  const handleDelete = async () => {
    try {
      const deletedSchema = await fetcher(API_URL + '/api/schemas/delete', {
        method: 'DELETE',
        body: { id: schema.id },
      })
      dispatch(deleteSchema(deletedSchema))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Accordion
      allowMultiple
      borderRadius="6px"
      bgColor={colors.backgroundPrimary}
      border={`1px solid ${colors.borderPrimary}`}
      mt="20px"
    >
      <AccordionItem border="none">
        <Flex>
          <AccordionButton w="100%" justifyContent="space-between">
            <Text
              fontSize="md"
              noOfLines={1}
              color={colors.fontSecondary}
              textAlign="left"
              fontWeight="light"
            >
              {schema.name}
            </Text>
            <AccordionIcon color={colors.fontSecondary} />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <SchemeMenu onOpenInfo={onOpenInfoScheme} onDelete={handleDelete} />
          </Flex>
        </Flex>
        <AccordionPanel>
          <Flex overflow="scroll">
            <Table overflow="scroll">
              <Thead>
                <Tr>
                  <Th w="98%">NAZWA</Th>
                  <Th w="1%">ILOŚĆ</Th>
                  <Th w="1%">Dostępność</Th>
                </Tr>
              </Thead>
              <Tbody overscroll="scroll">
                {schema.items.map((schemaItem) => (
                  <SchemeItem
                    name={schemaItem.item.name}
                    key={schemaItem.id}
                    schemeQuantity={schemaItem.neededQuantity}
                    storageQuantity={schemaItem.item.quantity}
                  />
                ))}
              </Tbody>
            </Table>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <ModalInfoScheme
        onClose={onCloseInfoScheme}
        isOpen={isOpenInfoScheme}
        isCentered
      />
    </Accordion>
  )
})
