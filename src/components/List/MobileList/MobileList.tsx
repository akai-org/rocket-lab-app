import { Flex } from '@chakra-ui/react'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const MobileList = () => {
  return (
    <Flex mt="80px" color="#3F3F3F" flexDirection="column">
      <AddItem />
      <List />
      <List />
    </Flex>
  )
}

export default MobileList
