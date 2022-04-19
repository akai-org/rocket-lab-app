import React, { useState } from 'react'
import { Box, Button, calc, Flex, Icon, Link, Text } from '@chakra-ui/react'
import SidebarList from './MobileSidebarList'
import { IoIosSettings } from 'react-icons/io'

const Sidebar = () => {
  const [isStorageActive, setIsStorageActive] = useState(false)
  const [isListActive, setIsListActive] = useState(true)
  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      h="calc(100vh - 75px)"
      w="90%"
      mt="75px"
      border="1px solid black"
      bgColor="white"
      zIndex="2"
    >
      <Flex flexDirection="column" h="100%" overflow="scroll">
        <Flex justifyContent="space-around" m="10px auto">
          <Button
            border={isStorageActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsListActive(false)
              setIsStorageActive(true)
            }}
          >
            Magazyn
          </Button>
          <Button
            border={isListActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            variant="outline"
            onClick={() => {
              setIsListActive(true)
              setIsStorageActive(false)
            }}
          >
            Lista Zakupów
          </Button>
        </Flex>
        {isListActive && (
          <>
            <SidebarList header="Lista 1" />
            <SidebarList header="Lista 2" />
            <SidebarList header="Lista 3" />
          </>
        )}
        <Flex flexDirection="column" mt="auto" mr="20px">
          <Flex justifyContent="flex-end">
            <Text>Ustawienia</Text>
            <Icon as={IoIosSettings} ml="10px" fontSize="22px" />
          </Flex>
          <Link m="10px 0 20px auto" href="/api/auth/logout">
            <Button h="32px" w="120px" bgColor="#FF7700" color="white">
              Logout
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Sidebar
