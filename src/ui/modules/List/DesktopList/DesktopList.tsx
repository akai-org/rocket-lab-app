import { useSelector } from 'react-redux'
import { storageCartInfo } from 'store'
import { IS_DEV } from 'utils'
import { AddItem } from './AddItem'
import { List } from './List'
import { DesktopWrapper } from 'ui/components'

export const DesktopList = () => {
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
