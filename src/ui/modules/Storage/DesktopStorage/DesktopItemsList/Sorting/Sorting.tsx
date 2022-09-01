import { memo } from 'react'
import { Box } from '@chakra-ui/react'
import { SortingGeneral } from 'ui/components'
import { useColors } from 'ui/theme'

export const Sorting = memo(() => {
  const colors = useColors()

  return (
    <Box w="100%" mr="10px" color={colors.fontNeutral}>
      <SortingGeneral />
    </Box>
  )
})
