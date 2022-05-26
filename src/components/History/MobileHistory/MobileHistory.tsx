import { Flex, Box, Text, Stack, Select } from '@chakra-ui/react'
import { IoMdFunnel } from 'react-icons/io'
import HistoryList from './HistoryList/HistoryList'

const MobileHistory = () => {
  return (
    <Flex mt="30px" color="black" flexDirection="column">
      <Box textAlign="left">
        <Text fontSize="20px" fontWeight="600" ml="15px">
          Historia
        </Text>
      </Box>
      <Flex
        flexDirection="row"
        border="1px solid #D4D4D4"
        borderRadius="5px"
        m="5px auto 10px"
        w="95%"
        p="15px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row">
          <Text color="gray">sortuj:</Text>
          <Select size="md" variant="unstyled" placeholder="wybierz">
            <option value="najnowsze">najnowsze</option>
            <option value="najstarsze">najstarsze</option>
          </Select>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Text>Filtry</Text>
          <IoMdFunnel color="black" />
        </Stack>
      </Flex>
      <HistoryList />
    </Flex>
  )
}

export default MobileHistory
