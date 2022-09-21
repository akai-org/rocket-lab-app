import { useSelector } from 'react-redux'
import { storageCartInfo } from 'store'
import { AddItem } from './AddItem'
import { List } from './List'
import { DesktopWrapper } from 'ui/components'
import { memo } from 'react'

export const DesktopList = memo(function DesktopList() {
  const storageCartData = useSelector(storageCartInfo)

  return (
    <DesktopWrapper>
      <AddItem />
      {storageCartData.cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </DesktopWrapper>
  )
})
