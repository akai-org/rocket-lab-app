import { Flex, Text } from '@chakra-ui/react'
import ListItem from '../ListItem/ListItem'
import { AiOutlineClose } from 'react-icons/ai'

const List = () => {
  return (
    <Flex flexDir="column" w="95%" mt="10px" mx="auto" justifyContent="center">
      <Flex w="100%" justifyContent="space-between">
        <Text
          fontSize="20px"
          lineHeight="10px"
          mt="15px"
          fontWeight="600"
          ml="15px"
        >
          Lista 1
        </Text>
        <AiOutlineClose
          size={25}
          style={{ marginRight: '15px', paddingTop: '5px' }}
          onClick={() => {
            //   TO DO Delete list
          }}
          fontWeight="bold"
        />
      </Flex>
      <ListItem />
      <ListItem />
      <ListItem />
    </Flex>
  )
}

export default List
