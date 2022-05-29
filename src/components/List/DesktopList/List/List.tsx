import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import { PopulatedCartList } from '../../../../mongo/models/cart'
import ListItem from '../ListItem/ListItem'
import ListMenu from '../../../UI/Menus/ListMenu'

export interface Props extends PopulatedCartList {}

const List = (props: Props) => {
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
  } = useDisclosure()
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
            <Heading
              fontSize="20px"
              lineHeight="10px"
              mt="15px"
              color="#4A5568"
              fontWeight="600"
              mb="15px"
              ml="20px"
            >
              {props.name}
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <ListMenu onEdit={onOpenEditList} onDelete={() => {}} />
          </Flex>
        </Flex>
        <AccordionPanel pb={4}>
          <Flex flexWrap="wrap" p="20px">
            {/* TODO: Usuwanie listy */}
            <Table p="20px">
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th minW="250px">NAZWA</Th>
                  <Th w="100%">OPIS</Th>
                  <Th textAlign="right" minW="170px">
                    ILOŚĆ SZTUK
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {props.items.map((item) => (
                  <ListItem key={item.id} {...item} />
                ))}
              </Tbody>
            </Table>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <ModalEditList
        list={props.items}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Accordion>
  )
}

export default List
