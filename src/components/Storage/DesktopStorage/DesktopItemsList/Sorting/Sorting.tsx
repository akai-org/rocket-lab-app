import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react'

const Sorting = () => {
  return (
    <Box w="100%" mr="10px" color="#D5D5D5">
      <Flex flexDirection="row">
        <Text>sortuj po:</Text>
        <Select variant="unstyled" w="140px" ml="10px" color="black">
          <option value="newest">najnowsze</option>
          <option value="oldest">najstarsze</option>
          <option value="alphabetically">alfabetycznie</option>
        </Select>
      </Flex>
    </Box>
  )
}

export default Sorting
