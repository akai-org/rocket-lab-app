import { Flex, Box, Text, Stack, Select, useDisclosure } from '@chakra-ui/react'
import { IoMdFunnel } from 'react-icons/io'
import HistoryList from './HistoryList/HistoryList'
import { useRef } from 'react'
import FilterDrawer from './FilterDrawer/FilterDrawer'

const MobileHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const filterRef = useRef<HTMLDivElement>(null)

  return (
    <Flex mt="6rem" color="black" flexDirection="column">
      <Box textAlign="left">
        <Text fontSize="25px" fontWeight="600" ml="15px" isTruncated>
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
          {
            // TODO: History sorting
          }
          <Select size="md" variant="unstyled" placeholder="wybierz">
            <option value="najnowsze">najnowsze</option>
            <option value="najstarsze">najstarsze</option>
          </Select>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          onClick={onOpen}
          ref={filterRef}
        >
          <FilterDrawer isOpen={isOpen} onClose={onClose} />
          <Text>Filtry</Text>
          <IoMdFunnel color="black" />
        </Stack>
      </Flex>
      <HistoryList />
    </Flex>
  )
}

export default MobileHistory
