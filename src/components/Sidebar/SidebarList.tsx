import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import SidebarListItem from './SidebarListItem'

const SidebarList: React.FC<{ header: string }> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Flex
      flexDirection="column"
      w="95%"
      m="10px auto"
      p="10px"
      border={isVisible ? '1px solid black' : ''}
      borderRadius="5px"
    >
      <Flex justifyContent="space around" w="100%" lineHeight="20px">
        <Flex
          w="95%"
          lineHeight="20px"
          onClick={() => {
            setIsVisible(!isVisible)
          }}
        >
          <Icon h="16px" as={AiOutlineThunderbolt} />
          <Text ml="10px" fontSize="16px">
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
          <SidebarListItem id="śrubka" quantity="2137" />
          <SidebarListItem id="młotek" quantity="69" />
          <SidebarListItem id="piwka" quantity="infinity" />
          <SidebarListItem id="zimne piwka" quantity="2137" />
        </>
      )}
    </Flex>
  )
}

export default SidebarList
