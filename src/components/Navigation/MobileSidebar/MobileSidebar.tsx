import React, { useState } from 'react'
import { Box, Button, calc, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { IoIosSettings } from 'react-icons/io'

const Sidebar = () => {
  const [isStorageActive, setIsStorageActive] = useState(true)
  const [isListActive, setIsListActive] = useState(false)
  const [isHistoryActive, setIsHistoryActive] = useState(false)
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
        <Flex flexDir="column" w="100%" alignItems="center" m="30px auto">
          <Button
            variant="outline"
            h="50px"
            w="90%"
            maxW="400px"
            mb="30px"
            border={isStorageActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            fontSize="20px"
            fontWeight="normal"
            onClick={() => {
              setIsListActive(false)
              setIsStorageActive(true)
              setIsHistoryActive(false)
            }}
          >
            Magazyn
          </Button>
          <Button
            variant="outline"
            h="50px"
            w="90%"
            maxW="400px"
            mb="30px"
            border={isListActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            fontSize="20px"
            fontWeight="normal"
            onClick={() => {
              setIsListActive(true)
              setIsStorageActive(false)
              setIsHistoryActive(false)
            }}
          >
            Lista Zakupów
          </Button>
          <Button
            variant="outline"
            h="50px"
            w="90%"
            maxW="400px"
            mb="30px"
            border={isHistoryActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            fontSize="20px"
            fontWeight="normal"
            onClick={() => {
              setIsListActive(false)
              setIsStorageActive(false)
              setIsHistoryActive(true)
            }}
          >
            Historia
          </Button>
        </Flex>
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
