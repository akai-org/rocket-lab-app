import React, { memo } from 'react'
import { useColors } from 'ui/theme'
import { Flex } from '@chakra-ui/react'
import { ThreeDots } from 'react-loader-spinner'

export const Loader = memo(function () {
  const colors = useColors()

  return (
    <Flex justifyContent="center">
      <ThreeDots color={colors.orangePrimary} />
    </Flex>
  )
})
