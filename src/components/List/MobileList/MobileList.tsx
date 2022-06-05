import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { IS_DEV } from '../../../utils/constants'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const MobileList = () => {
  const storageCartData = useSelector(storageCartInfo)
  return (
    <Flex mt="80px" color="#3F3F3F" flexDirection="column">
      {IS_DEV && <AddItem />}
      {storageCartData.cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </Flex>
  )
}

export default MobileList
