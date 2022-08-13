import { useSelector } from 'react-redux'
import { storageCartInfo } from 'store'
import { IS_DEV } from 'utils'
import AddItem from './AddItem/AddItem'
import List from './List/List'
import { MobileWrapper } from 'ui/components'

export const MobileList = () => {
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
