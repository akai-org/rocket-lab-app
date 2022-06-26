import { Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartListsProps } from '../../../pages/list'
import { storageCartInfo } from '../../../store/store'
import { IS_DEV } from '../../../utils/constants'
import { fetcher } from '../../../utils/requests'
import AddItem from './AddItem/AddItem'
import List from './List/List'
import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'

const DesktopList = () => {
  const storageCartData = useSelector(storageCartInfo)

  console.log(storageCartData.cartLists)

  return (
    <DesktopWrapper>
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        {IS_DEV && <AddItem />}
        {storageCartData.cartLists.map((cartList) => (
          <List {...cartList} key={cartList.id} />
        ))}
      </Flex>
    </DesktopWrapper>
  )
}

export default DesktopList
