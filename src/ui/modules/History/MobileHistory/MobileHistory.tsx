import { Flex, Box, Text, Stack, Select, useDisclosure } from '@chakra-ui/react'
import { IoMdFunnel } from 'react-icons/io'
import { HistoryList } from './HistoryList'
import { useRef, memo } from 'react'
import { FilterDrawer } from './FilterDrawer'
import { MobileWrapper } from 'ui/components'
import { useColors } from 'ui/theme'

export const MobileHistory = memo(function MobileHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const filterRef = useRef<HTMLDivElement>(null)
  const colors = useColors()

  return (
    <MobileWrapper color={colors.fontPrimary}>
      <Box textAlign="left">
        <Text fontSize="xl" fontWeight="bold" ml="15px" isTruncated>
          Historia
        </Text>
      </Box>
      <Flex
        flexDirection="row"
        border={`1px solid ${colors.borderSecondary}`}
        borderRadius="5px"
        m="5px auto 10px"
        w="95%"
        p="15px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row">
          <Text color={colors.fontSecondary}>sortuj:</Text>
          {
            // TODO: History sorting
          }
          <Select
            color={colors.fontPrimary}
            size="md"
            variant="unstyled"
            placeholder="wybierz"
          >
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
          <Text color={colors.fontPrimary}>Filtry</Text>
          <IoMdFunnel color={colors.fontPrimary} />
        </Stack>
      </Flex>
      <HistoryList />
    </MobileWrapper>
  )
})
