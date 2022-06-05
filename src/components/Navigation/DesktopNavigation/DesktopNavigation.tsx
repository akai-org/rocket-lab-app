import React, { useState } from 'react'
import { Box, Image, Flex, Heading, Icon, Button } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import DesktopSidebar from './DesktopSidebar/DesktopSidebar'

const DesktopNavigation = () => {
  return (
    <>
      <Box
        position="fixed"
        left="0"
        top="0"
        w="100vw"
        bgColor="red.500"
        borderBottom="1px solid #D5D5D5"
        boxShadow="0 -15px 40px 2px #D5D5D5"
        zIndex="2"
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
            <Icon as={FaUserCircle} mr="10px" fontSize="40px" />
          </Flex>
        </Flex>
      </Box>
      <Box position="fixed" left="0" top="0" w="100vw">
        <Flex position="relative" w="100%" maxW="2000px" m="0 auto">
          <DesktopSidebar />
        </Flex>
      </Box>
    </>
  )
}

export default DesktopNavigation
