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

const Scheme = () => {
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
              Nazwa Tymczasowa Schema tu
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
                <SchemeItem schemeQuantity={10} storageQuantity={15} />
                <SchemeItem schemeQuantity={10} storageQuantity={5} />
                <SchemeItem schemeQuantity={10} storageQuantity={0} />
              </Tbody>
            </Table>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Scheme
