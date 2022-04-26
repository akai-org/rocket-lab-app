import React, { useState } from 'react'
import { Box, Image, Flex, Heading, Icon, Button } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'

const DesktopNavigation = () => {
  const [isStorageActive, setIsStorageActive] = useState(false)
  const [isListActive, setIsListActive] = useState(true)
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      w="100vw"
      borderBottom="1px solid #D5D5D5"
      boxShadow="0 -15px 40px 2px #D5D5D5"
      bgColor="white"
      zIndex="1"
    >
      <Flex
        w="100%"
        maxW="2000px"
        h="80px"
        m="0 auto"
        p="0 40px"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image h="51px" src="/logo-desktop.png" alt="logo-desktop" />
          <Box>
            <Heading
              mt="18px"
              lineHeight="11px"
              fontSize="11px"
              fontWeight="400"
              letterSpacing="1px"
            >
              PUT
            </Heading>
            <Heading
              mt="2px"
              lineHeight="22px"
              letterSpacing="4px"
              fontSize="22px"
              fontWeight="600"
            >
              ROCKETLAB
            </Heading>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Button
            variant="outline"
            h="39px"
            border={isStorageActive ? 'none' : '1px solid black'}
            borderRadius="0"
            colorScheme="black"
            fontSize="16px"
            fontWeight="normal"
            onClick={() => {
              setIsListActive(false)
              setIsStorageActive(true)
            }}
          >
            Magazyn
          </Button>
          <Button
            variant="outline"
            h="39px"
            ml="30px"
            mr="50px"
            border={isListActive ? 'none' : '1px solid black'}
            borderRadius="0"
            fontWeight="normal"
            fontSize="16px"
            colorScheme="black"
            onClick={() => {
              setIsListActive(true)
              setIsStorageActive(false)
            }}
          >
            Lista Zakupów
          </Button>
          <Icon as={FaUserCircle} mr="10px" fontSize="40px" />
        </Flex>
      </Flex>
    </Box>
  )
}

export default DesktopNavigation
