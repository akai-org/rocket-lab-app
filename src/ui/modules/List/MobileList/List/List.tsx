import {
  Flex,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react'
import { ListItem } from '../ListItem'
import { ModalEditList, ListMenu } from 'ui/components'
import { PopulatedCartList } from 'mongo'
import { useDispatch } from 'react-redux'
import { removeExisitngCartList } from 'store'
import { fetcher, API_URL } from 'util'
import { useColors } from 'ui/theme'

export interface Props extends PopulatedCartList {}

export const List = (props: Props) => {
  const dispatch = useDispatch()
  const colors = useColors()

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
      border={`1px solid ${colors.borderPrimary}`}
      borderRadius="6px"
      mx="auto"
      my="10px"
      justifyContent="center"
    >
      <AccordionItem border="none">
        <Flex>
          <AccordionButton w="94%" justifyContent="space-between">
            <Text
              fontSize="md"
              noOfLines={1}
              color={colors.fontSecondary}
              textAlign="left"
              fontWeight="light"
            >
              {props.name}
            </Text>
            <AccordionIcon color={colors.fontSecondary} />
          </AccordionButton>
          <Flex pt="5px" w="4%" justifyContent="flex-end">
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
