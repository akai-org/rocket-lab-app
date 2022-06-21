import { Flex, Text, Box, Stack, Select, Input } from '@chakra-ui/react'
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

        <Flex
          flexDirection="row"
          // border="1px solid #D4D4D4"
          // borderRadius="6px"
          m="5px 0 10px 0"
          w="100%"
          p="15px"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Select h="40px" borderColor="#D5D5D5" maxW="160px" mr="15px">
            <option value="wszystkie">wszystkie</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
          </Select>

          <Stack direction="row" alignItems="center" w="170px" mr="15px">
            <Text>od:</Text>
            <Input type="data" placeholder="DD.MM.RRRR"></Input>
          </Stack>

          <Stack direction="row" alignItems="center" w="170px" mr="15px">
            <Text>do:</Text>
            <Input type="data" placeholder="DD.MM.RRRR"></Input>
          </Stack>

          <Stack direction="row">
            <Text color="gray">sortuj:</Text>
            {
              // TODO: History sorting
            }
            <Select size="md" variant="unstyled" placeholder="wybierz">
              <option value="najnowsze">najnowsze</option>
              <option value="najstarsze">najstarsze</option>
            </Select>
          </Stack>
        </Flex>
        <Flex w="100%">
          <HistoryList />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DesktopHistory
