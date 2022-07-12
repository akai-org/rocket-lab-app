import React, { useState } from 'react'
import { Box, Image, Flex, Heading, Icon } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { Squash as Hamburger } from 'hamburger-react'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import { useColors } from '../../../../theme/useColors'

const MobileNavigation = () => {
  const colors = useColors()

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      w="100vw"
      minW="300px"
      borderBottom={`1px solid ${colors.shadow}`}
      bgColor={colors.background}
      zIndex="1"
    >
      <Flex
        justifyContent="space-between"
        h="75px"
        maxW="2000px"
        w="100%"
        m="0 auto"
        p="0 20px"
        boxShadow={`0 -10px 40px 2px ${colors.shadow}`}
      >
        <Flex alignItems="center">
          <Image h="34px" src="/logo-mobile.png" alt="logo-mobile" />
          <Box>
            <Heading
              mt="2px"
              lineHeight="10px"
              fontSize="10px"
              fontWeight="400"
            >
              PUT
            </Heading>
            <Heading
              lineHeight="15px"
              letterSpacing="3px"
              fontSize="15px"
              fontWeight="600"
            >
              ROCKETLAB
            </Heading>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Icon fontSize="30px" mr="10px" as={FaUserCircle} />
          <MobileSidebar />
        </Flex>
      </Flex>
    </Box>
  )
}

export default MobileNavigation
