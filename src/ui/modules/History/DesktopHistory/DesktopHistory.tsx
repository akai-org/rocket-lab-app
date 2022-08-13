import { Flex, Text, Box } from '@chakra-ui/react'
import Filter from './Filter/Filter'
import HistoryList from './HistoryList/HistoryList'
import { useColors } from '../../../theme/useColors'
import DesktopWrapper from '../../../components/Wrappers/DesktopWrapper/DesktopWrapper'

export const DesktopHistory = () => {
  const colors = useColors()

  return (
    <DesktopWrapper>
      <Flex
        w="100%"
        flexDirection="column"
        p="40px"
        border={`1px solid ${colors.borderSecondary}`}
        borderRadius="6px"
      >
        <Box textAlign="left">
          <Text fontSize="xl" fontWeight="bold" isTruncated>
            Historia
          </Text>
        </Box>
        <Filter />
        <Flex w="100%">
          <HistoryList />
        </Flex>
      </Flex>
    </DesktopWrapper>
  )
}
