import { Button, Flex, Icon, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { IoIosSettings } from 'react-icons/io'

const DesktopSidebar = () => {
  const [isStorageActive, setIsStorageActive] = useState(true)
  const [isListActive, setIsListActive] = useState(false)
  const [isHistoryActive, setIsHistoryActive] = useState(false)
  const [isSchemesActive, setIsSchemesActive] = useState(false)
  return (
    <Flex
      flexDirection="column"
      w="223px"
      minH="calc(100vh - 80px)"
      pt="40px"
      boxShadow="0 0 10px 0.2px #DDDDDD"
    >
      <Flex flexDirection="column" w="100%" alignItems="center">
        <Button
          variant="outline"
          h="40px"
          w="80%"
          mb="30px"
          border={isStorageActive ? 'none' : '1px solid black'}
          borderRadius="0"
          colorScheme="black"
          fontSize="16px"
          fontWeight="normal"
          onClick={() => {
            setIsListActive(false)
            setIsStorageActive(true)
            setIsHistoryActive(false)
            setIsSchemesActive(false)
          }}
        >
          Magazyn
        </Button>
        <Button
          variant="outline"
          h="40px"
          w="80%"
          mb="30px"
          border={isListActive ? 'none' : '1px solid black'}
          borderRadius="0"
          colorScheme="black"
          fontSize="16px"
          fontWeight="normal"
          onClick={() => {
            setIsListActive(true)
            setIsStorageActive(false)
            setIsHistoryActive(false)
            setIsSchemesActive(false)
          }}
        >
          Lista Zakupów
        </Button>
        <Button
          variant="outline"
          h="40px"
          w="80%"
          mb="30px"
          border={isHistoryActive ? 'none' : '1px solid black'}
          borderRadius="0"
          colorScheme="black"
          fontSize="16px"
          fontWeight="normal"
          onClick={() => {
            setIsListActive(false)
            setIsStorageActive(false)
            setIsHistoryActive(true)
            setIsSchemesActive(false)
          }}
        >
          Historia
        </Button>
        <Button
          variant="outline"
          h="40px"
          w="80%"
          mb="30px"
          border={isSchemesActive ? 'none' : '1px solid black'}
          borderRadius="0"
          colorScheme="black"
          fontSize="16px"
          fontWeight="normal"
          onClick={() => {
            setIsListActive(false)
            setIsStorageActive(false)
            setIsHistoryActive(false)
            setIsSchemesActive(true)
          }}
        >
          Schematy
        </Button>
      </Flex>
      <Flex flexDirection="column" mt="auto" ml="20px">
        <Flex justifyContent="flex-start">
          <Icon as={IoIosSettings} mr="10px" fontSize="22px" />
          <Text>Ustawienia</Text>
        </Flex>
        <Link m="10px auto 20px 0" href="/api/auth/logout">
          <Button h="32px" w="120px" bgColor="#FF7700" color="white">
            Logout
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default DesktopSidebar
