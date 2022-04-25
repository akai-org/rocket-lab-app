import { Flex } from '@chakra-ui/react'
import React from 'react'
import StorageSidebarList from './StorageSidebarList'

const StorageSidebar = () => {
  return (
    <Flex
      flexDirection="column"
      w="223px"
      minH="calc(100vh - 80px)"
      pt="20px"
      boxShadow="0 0 10px 0.2px #DDDDDD"
    >
      <StorageSidebarList header="Dashboard" />
      <StorageSidebarList header="Części" />
      <StorageSidebarList header="Historia" />
      <StorageSidebarList header="Schematy" />
    </Flex>
  )
}

export default StorageSidebar
