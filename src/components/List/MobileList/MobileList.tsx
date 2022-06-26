import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { IS_DEV } from '../../../utils/constants'
import AddItem from './AddItem/AddItem'
import List from './List/List'
import MobileWrapper from '../../UI/Wrappers/MobileWrapper/MobileWrapper'

const MobileList = () => {
  const storageCartData = useSelector(storageCartInfo)
  return (
    <MobileWrapper pb="150px">
      {IS_DEV && <AddItem />}
      {storageCartData.cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </MobileWrapper>
  )
}

export default MobileList
