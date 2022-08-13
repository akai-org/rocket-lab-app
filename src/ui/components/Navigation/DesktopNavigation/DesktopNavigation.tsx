import React, { memo } from 'react'
import { Box, Image, Flex, Heading, Icon, Button } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { DesktopSidebar } from './DesktopSidebar/DesktopSidebar'
import { useColors } from '../../../theme/useColors'

export const DesktopNavigation = memo(() => {
  const colors = useColors()

  return (
    <>
      <Box
        position="fixed"
        left="0"
        top="0"
        w="100vw"
        color={colors.fontPrimary}
        borderBottom={`1px solid ${colors.shadowPrimary}`}
        boxShadow={`0 -15px 40px 2px ${colors.shadowPrimary}`}
        bgColor={colors.backgroundPrimary}
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
                fontSize="xxs"
                fontWeight="light"
                letterSpacing="1px"
              >
                PUT
              </Heading>
              <Heading
                mt="2px"
                lineHeight="22px"
                letterSpacing="4px"
                fontSize="xl"
                fontWeight="bold"
              >
                ROCKETLAB
              </Heading>
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Icon
              as={FaUserCircle}
              mr="10px"
              color={colors.fontPrimary}
              fontSize="40px"
            />
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
})
