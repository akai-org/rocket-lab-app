import { Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartListsProps } from '../../../pages/list'
import { storageCartInfo } from '../../../store/store'
import { IS_DEV } from '../../../utils/constants'
import { fetcher } from '../../../utils/requests'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const DesktopList = () => {
  const storageCartData = useSelector(storageCartInfo)

  return (
    <Flex
      flexDirection="row"
      w="100vw"
      pb="150px"
      maxW="2000px"
      m="75px auto 0 auto"
    >
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        {IS_DEV && <AddItem />}
        {storageCartData.cartLists.map((cartList) => (
          <List {...cartList} key={cartList.id} />
        ))}
      </Flex>
    </Flex>
  )
}

export default DesktopList
