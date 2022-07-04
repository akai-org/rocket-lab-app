import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { storageCartInfo } from '../../../store/store'
import { IS_DEV } from '../../../utils/constants'
import AddItem from './AddItem/AddItem'
import List from './List/List'
import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'

const DesktopList = () => {
  const storageCartData = useSelector(storageCartInfo)

  return (
    <DesktopWrapper>
      {IS_DEV && <AddItem />}
      {storageCartData.cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </DesktopWrapper>
  )
}

export default DesktopList
