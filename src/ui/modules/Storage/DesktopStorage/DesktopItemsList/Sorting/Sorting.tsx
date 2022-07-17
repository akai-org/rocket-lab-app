import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SortingGeneral } from '../../../../../components/SortingGeneral/SortingGeneral'

const Sorting = () => {

  return (
    <Box w="100%" mr="10px" color="#D5D5D5">
      <SortingGeneral />
    </Box>
  )
}

export default Sorting
