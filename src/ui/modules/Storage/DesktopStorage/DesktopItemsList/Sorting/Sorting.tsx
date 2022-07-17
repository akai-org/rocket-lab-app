import React from 'react'
import { Box } from '@chakra-ui/react'
import { SortingGeneral } from '../../../../../components/SortingGeneral/SortingGeneral'
import { useColors } from '../../../../../../theme/useColors'

const Sorting = () => {
  const colors = useColors()

  return (
    <Box w="100%" mr="10px" color={colors.fontNeutral}>
      <SortingGeneral />
    </Box>
  )
}

export default Sorting
