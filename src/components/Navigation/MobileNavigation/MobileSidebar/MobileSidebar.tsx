import React from 'react'
import { Box, Button, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { IoIosSettings } from 'react-icons/io'
import NavButton from '../../../UI/Custom Buttons/NavButton/NavButton'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter()
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
          <NavButton
            isItemActive={router.asPath === '/'}
            onClick={() => {
              router.push('/')
            }}
            fontSize="20px"
            h="50px"
            w="90%"
            maxW="400px"
          >
            Magazyn
          </NavButton>
          <NavButton
            isItemActive={router.asPath === '/list'}
            onClick={() => {
              router.push('/list')
            }}
            fontSize="20px"
            h="50px"
            w="90%"
            maxW="400px"
          >
            Lista Zakupów
          </NavButton>
          <NavButton
            isItemActive={router.asPath === '/history'}
            fontSize="20px"
            h="50px"
            w="90%"
            maxW="400px"
          >
            Historia
          </NavButton>
          <NavButton
            isItemActive={router.asPath === '/schemes'}
            fontSize="20px"
            h="50px"
            w="90%"
            maxW="400px"
          >
            Schematy
          </NavButton>
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
