import {
  Flex,
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
  Text,
} from '@chakra-ui/react'
import { ModalEditList, ListMenu } from 'ui/components'
import { PopulatedCartList } from 'mongo'
import { ListItem } from '../ListItem'
import { fetcher } from 'utils/requests'
import { useDispatch } from 'react-redux'
import { removeExisitngCartList } from 'store'
import { API_URL } from 'utils/constants'
import { useColors } from 'ui/theme'
import { memo } from 'react'

interface Props extends PopulatedCartList {}

export const List = memo((props: Props) => {
  const {
    isOpen: isOpenEditList,
    onOpen: onOpenEditList,
    onClose: onCloseEditList,
  } = useDisclosure()
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
              lineHeight="25px"
              noOfLines={1}
              textAlign="left"
              my="5px"
              ml="10px"
              color={colors.fontSecondary}
              fontWeight="light"
            >
              {props.name}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          <Flex pt="5px" mr="20px">
            <ListMenu onEdit={onOpenEditList} onDelete={deleteCartList} />
          </Flex>
        </Flex>
        <AccordionPanel pb={4}>
          <Flex flexWrap="wrap" p="20px">
            {/* TODO: Usuwanie listy */}
            <Table p="20px">
              <Thead>
                <Tr fontSize="sm" fontWeight="normal">
                  <Th w="50%">NAZWA</Th>
                  <Th w="50%">OPIS</Th>
                  <Th textAlign="right" w="1%" minW="150px">
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
        cartList={props}
        name="defaultowa lista"
        onClose={onCloseEditList}
        isOpen={isOpenEditList}
        isCentered
      />
    </Accordion>
  )
})
