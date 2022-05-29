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
import ListItem from '../ListItem/ListItem'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import DeletePopover from '../../../UI/Popovers/DeletePopover'
import { PopulatedCartList } from '../../../../mongo/models/cart'
import ListMenu from '../../../UI/Menus/ListMenu'

export interface Props extends PopulatedCartList {}

{
  /* <ProductButton
  size="sm"
  onClick={onOpenEditList}
  w="80px"
  fontSize="16px"
  mr="5px"
>
  Edytuj
</ProductButton>
<DeletePopover
  label="Czy na pewno chcesz usunąć tę listę?"
  onClick={() => {}}
/> */
}

const List = (props: Props) => {
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
  } = useDisclosure()
  return (
    <Accordion
      allowMultiple
      flexDir="column"
      w="95%"
      border="1px solid #C4C4C4"
      borderRadius="6px"
      mx="auto"
      my="10px"
      justifyContent="center"
    >
      <AccordionItem border="none">
        <Flex>
          <AccordionButton w="100%" justifyContent="space-between">
            <Heading
              fontSize="20px"
              lineHeight="5px"
              fontWeight="600"
            >
              Lista 1
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <ListMenu onEdit={onOpenEditList} onDelete={() => {}} />
          </Flex>
        </Flex>
        <AccordionPanel pb={4}>
          {props.items.map((item) => (
            <ListItem {...item} />
          ))}
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
