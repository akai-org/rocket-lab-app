import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import DeletePopover from '../../../UI/Popovers/DeleteListPopover'
import ListItem from '../ListItem/ListItem'

const List = () => {
  return (
    <Box
      borderRadius="6px"
      bgColor="white"
      border="1px solid #C4C4C4"
      mt="20px"
    >
      <Flex flexWrap="wrap" p="20px">
        {/* TODO: Usuwanie listy */}
        <Flex w="100%" justifyContent="space-between">
          <Heading
            fontSize="20px"
            lineHeight="10px"
            mt="15px"
            color="#4A5568"
            fontWeight="600"
            mb="15px"
            ml="20px"
          >
            Lista 1
          </Heading>
          <Box pt="5px">
            <DeletePopover onClick={() => {}} />
          </Box>
        </Flex>
        <Table p="20px">
          <Thead>
            <Tr fontSize="16px" fontWeight="700">
              <Th minW="250px">NAZWA</Th>
              <Th w="100%">OPIS</Th>
              <Th textAlign="right" minW="170px">
                ILOŚĆ SZTUK
              </Th>
              <Th textAlign="right">AKCJE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </Tbody>
        </Table>
      </Flex>
    </Box>
  )
}

export default List
