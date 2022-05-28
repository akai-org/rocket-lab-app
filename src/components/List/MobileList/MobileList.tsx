import { Flex } from '@chakra-ui/react'
import { CartListsProps } from '../../../pages/list'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const MobileList = ({cartLists}: CartListsProps) => {
  return (
    <Flex mt="80px" color="#3F3F3F" flexDirection="column">
      <AddItem />
      {cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </Flex>
  )
}

export default MobileList
