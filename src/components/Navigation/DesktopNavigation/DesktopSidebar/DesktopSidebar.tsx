import { Button, Flex, Icon, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { IoIosSettings } from 'react-icons/io'
import NavButton from '../../../Overridden/NavButton/NavButton'

const DesktopSidebar = () => {
  const [isStorageActive, setIsStorageActive] = useState(true)
  const [isListActive, setIsListActive] = useState(false)
  const [isHistoryActive, setIsHistoryActive] = useState(false)
  const [isSchemesActive, setIsSchemesActive] = useState(false)
  return (
    <Flex
      position="absolute"
      left="0"
      top="0"
      flexDirection="column"
      w="223px"
      h="100vh"
      mt="75px"
      m={''}
      bgColor="white"
      maxH="calc(100vh - 80px)"
      boxShadow="0 0 10px 0.2px #DDDDDD"
      zIndex="1"
    >
      <Flex flexDirection="column" w="100%" alignItems="center">
        <NavButton
          setIsHistoryActive={setIsHistoryActive}
          setIsSchemesActive={setIsSchemesActive}
          setIsListActive={setIsListActive}
          setIsStorageActive={setIsStorageActive}
          setCurrentActive={setIsStorageActive}
          isItemActive={isStorageActive}
          mt="20px"
          w="80%"
        >
          Magazyn
        </NavButton>
        <NavButton
          setIsHistoryActive={setIsHistoryActive}
          setIsSchemesActive={setIsSchemesActive}
          setIsListActive={setIsListActive}
          setIsStorageActive={setIsStorageActive}
          setCurrentActive={setIsListActive}
          isItemActive={isListActive}
          w="80%"
        >
          Lista Zakupów
        </NavButton>
        <NavButton
          setIsHistoryActive={setIsHistoryActive}
          setIsSchemesActive={setIsSchemesActive}
          setIsListActive={setIsListActive}
          setIsStorageActive={setIsStorageActive}
          setCurrentActive={setIsHistoryActive}
          isItemActive={isHistoryActive}
          w="80%"
        >
          Historia
        </NavButton>
        <NavButton
          setIsHistoryActive={setIsHistoryActive}
          setIsSchemesActive={setIsSchemesActive}
          setIsListActive={setIsListActive}
          setIsStorageActive={setIsStorageActive}
          setCurrentActive={setIsSchemesActive}
          isItemActive={isSchemesActive}
          w="80%"
        >
          Schematy
        </NavButton>
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
