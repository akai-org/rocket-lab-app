import { Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CartListsProps } from '../../../pages/list'
import { fetcher } from '../../../utils/requests'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const DesktopList = ({ cartLists }: CartListsProps) => {

  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddItem />
        {cartLists.map((cartList) => (
          <List {...cartList} key={cartList.id} />
        ))}
      </Flex>
    </Flex>
  )
}

export default DesktopList
