import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import SidebarListItem from './StorageSidebarListItem'

const StorageSidebarList: React.FC<{ header: string }> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Flex
      flexDirection="column"
      w="92%"
      p="10px"
      m="0 auto 15px auto"
      border={isVisible ? '1px solid #E5E5E5' : ''}
      borderRadius="6px"
      color={isVisible ? '#3F3F3F' : '#878585'}
    >
      <Flex justifyContent="space around" w="100%" lineHeight="24px">
        <Flex
          w="95%"
          onClick={() => {
            setIsVisible(!isVisible)
          }}
        >
          <Icon w={6} h={6} as={AiOutlineThunderbolt} />
          <Text ml="10px" fontSize="18px">
            {props.header}
          </Text>
        </Flex>
        <Box>
          {isVisible ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => {
                setIsVisible(false)
              }}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => {
                setIsVisible(true)
              }}
            />
          )}
        </Box>
      </Flex>

      {isVisible && (
        <>
          <SidebarListItem id="Pozycja 1" />
          <SidebarListItem id="Pozycja 2" />
          <SidebarListItem id="Pozycja 3" />
          <SidebarListItem id="Pozycja 4" />
        </>
      )}
    </Flex>
  )
}

export default StorageSidebarList
