import { memo } from 'react'
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
import { SchemeItem } from './SchemeItem'
import { useDispatch } from 'react-redux'
import { SchemeMenu, ModalInfoScheme } from 'ui/components'
import { PopulatedSchema } from 'mongo'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'
import { deleteSchema } from 'store'
import { useColors } from 'ui/theme'

interface Props {
  schema: PopulatedSchema
}

export const Scheme = memo(function Scheme({ schema }: Props) {
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
              fontSize="lg"
              lineHeight="10px"
              my="15px"
              ml="15px"
              color={colors.fontSecondary}
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
        <AccordionPanel pb={4}>
          <Flex flexWrap="wrap" p="20px">
            <Table p="20px">
              <Thead>
                <Tr>
                  <Th w="80%">NAZWA</Th>
                  <Th w="1%">ILOŚĆ</Th>
                  <Th w="1%">Dostępność</Th>
                </Tr>
              </Thead>
              <Tbody>
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
