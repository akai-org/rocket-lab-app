import { Flex, Text, Box } from '@chakra-ui/react'
import { Filter } from './Filter'
import { HistoryList } from './HistoryList'
import { useColors } from 'ui/theme'
import { DesktopWrapper } from 'ui/components'
import React, { memo } from 'react'

export const DesktopHistory = memo(() => {
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
})
