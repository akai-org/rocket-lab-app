import { Flex } from '@chakra-ui/react'
import React from 'react'
import StorageSidebarList from './StorageSidebarList'

const StorageSidebar = () => {
  return (
    <Flex
      boxShadow="0 0 10px 0.2px #DDDDDD"
      minH="calc(100vh - 100px)"
      flexDirection="column"
      w="223px"
      pt="20px"
    >
      <StorageSidebarList header="Dashboard" />
      <StorageSidebarList header="Części" />
      <StorageSidebarList header="Historia" />
      <StorageSidebarList header="Schematy" />
    </Flex>
  )
}

export default StorageSidebar
