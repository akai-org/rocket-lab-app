import { useSelector } from 'react-redux'
import { storageCartInfo } from 'store'
import { IS_DEV } from 'utils/constants'
import { AddItem } from './AddItem'
import { List } from './List/List'
import { MobileWrapper } from 'ui/components'
import React, { memo } from 'react'

export const MobileList = memo(() => {
  const storageCartData = useSelector(storageCartInfo)
  return (
    <MobileWrapper pb="150px">
      {IS_DEV && <AddItem />}
      {storageCartData.cartLists.map((cartList) => (
        <List {...cartList} key={cartList.id} />
      ))}
    </MobileWrapper>
  )
})
