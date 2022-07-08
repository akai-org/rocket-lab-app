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
import { useSelector } from 'react-redux'
import { itemsInfo, schemeInfo } from '../../../../store/store'
import SchemeMenu from '../../../UI/Menus/SchemeMenu'
import SchemeItem from './SchemeItem/SchemeItem'
import React from 'react'
import { PopulatedSchema } from '../../../../mongo/models/schema'

interface Props {
  schema: PopulatedSchema
}

const Scheme = ({ schema }: Props) => {
  const {
    isOpen: isOpenEditScheme,
    onOpen: onOpenEditScheme,
    onClose: onCloseEditScheme,
  } = useDisclosure()

  const itemsData = useSelector(itemsInfo)
  const schemeData = useSelector(schemeInfo)

  const handleDelete = () => {}

  return (
    <Accordion
      allowMultiple
      borderRadius="6px"
      bgColor="white"
      border="1px solid #C4C4C4"
      mt="20px"
    >
      <AccordionItem border="none">
        <Flex>
          <AccordionButton w="100%" justifyContent="space-between">
            <Text
              fontSize="17px"
              noOfLines={1}
              color="#4A5568"
              textAlign="left"
              fontWeight="500"
            >
              {schema.name}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <SchemeMenu onEdit={onOpenEditScheme} onDelete={handleDelete} />
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
    </Accordion>
  )
}

export default Scheme
