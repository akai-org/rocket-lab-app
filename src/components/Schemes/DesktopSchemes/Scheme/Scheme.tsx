import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import SchemeItem from './SchemeItem/SchemeItem'
import ListMenu from '../../../UI/Menus/ListMenu'
import { useSelector } from 'react-redux'
import { itemsInfo, schemeInfo } from '../../../../store/store'

const Scheme = () => {
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
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
              fontSize="20px"
              lineHeight="10px"
              my="15px"
              ml="15px"
              color="#4A5568"
              fontWeight="500"
            >
              Nazwa Tymczasowa Schematu
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <ListMenu onEdit={onOpenEditList} onDelete={handleDelete} />
          </Flex>
        </Flex>
        <AccordionPanel pb={4}>
          <Flex flexWrap="wrap" p="20px">
            <Table p="20px">
              <Thead>
                <Tr>
                  <Th>NAZWA</Th>
                  <Th w="1%">ILOŚĆ</Th>
                  <Th w="1%">Dostępność</Th>
                </Tr>
              </Thead>
              <Tbody>
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
