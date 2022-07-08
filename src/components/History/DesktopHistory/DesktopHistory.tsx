import { Flex, Text, Box } from '@chakra-ui/react'
import Filter from './Filter/Filter'
import HistoryList from './HistoryList/HistoryList'

const DesktopHistory = () => {
  return (
    <Flex
      flexDirection="row"
      w="100vw"
      maxW="2000px"
      m="75px auto 0 auto"
      minW="900px"
      color="#2D3748"
    >
      <Flex
        w="100%"
        flexDirection="column"
        m="30px 40px 20px 250px"
        p="40px"
        border="1px solid #D4D4D4"
        borderRadius="6px"
      >
        <Box textAlign="left">
          <Text fontSize="25px" fontWeight="600" isTruncated>
            Historia
          </Text>
        </Box>
        <Filter />
        <Flex w="100%">
          <HistoryList />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DesktopHistory
