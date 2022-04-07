import React from 'react'
import { Box, Image, Flex, Heading } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { Squash as Hamburger } from 'hamburger-react'

const MobileNavigation = () => {
  return (
    <Box w="100vw" borderBottom="1px solid #D5D5D5">
      <Flex
        m="0 auto"
        p="0 20px"
        h="75px"
        w="100%"
        maxW="2000px"
        boxShadow="0 -10px 40px 2px #D5D5D5"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image h="34px" src="/logo-mobile.png" alt="logo-mobile" />
          <Box>
            <Heading
              fontSize="10px"
              fontWeight="400"
              lineHeight="10px"
              mt="2px"
            >
              PUT
            </Heading>
            <Heading
              fontWeight="600"
              lineHeight="15px"
              letterSpacing="3px"
              fontSize="15px"
            >
              ROCKETLAB
            </Heading>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Icon fontSize="30px" mr="10px" as={FaUserCircle} />
          <Hamburger size={30} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default MobileNavigation
