import {
  Flex,
  Heading,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react'
import ListItem from '../ListItem/ListItem'
import ModalEditList from '../../../UI/Modals/ModalEditList/ModalEditList'
import { PopulatedCartList } from '../../../../mongo/models/cart'
import ListMenu from '../../../UI/Menus/ListMenu'
import { useDispatch } from 'react-redux'
import { removeExisitngCartList } from '../../../../store/Slices/storageCartSlice'
import { fetcher } from '../../../../utils/requests'
import { API_URL } from '../../../../utils/constants'

export interface Props extends PopulatedCartList {}

const List = (props: Props) => {
  const dispatch = useDispatch()

  const deleteCartList = async () => {
    try {
      const deletedCartList = await fetcher(API_URL + '/api/cart/delete', {
        method: 'DELETE',
        body: { id: props.id },
      })
      dispatch(removeExisitngCartList(deletedCartList))
    } catch (error) {
      console.log(error)
    }
  }
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
        <Flex height="45px">
          <AccordionButton justifyContent="space-between">
            <Text
              fontSize="17px"
              isTruncated
              color="#4A5568"
              textAlign="left"
              fontWeight="500"
            >
              {props.name}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" px="10px" w="5%" justifyContent="flex-end">
            <ListMenu onEdit={onOpenEditList} onDelete={deleteCartList} />
          </Flex>
        </Flex>
        <AccordionPanel pb={4}>
          {props.items.map((item) => (
            <ListItem {...item} />
          ))}
        </AccordionPanel>
      </AccordionItem>
      <ModalEditList
        cartList={props}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Accordion>
  )
}

export default List
