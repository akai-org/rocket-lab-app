import { Flex, useToast } from '@chakra-ui/react'
import React from 'react'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const DesktopList = () => {
  // Temporarily TODO: fix this
  useToast().closeAll()
  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddItem />
        <List />
        <List />
        <List />
      </Flex>
    </Flex>
  )
}

export default DesktopList
