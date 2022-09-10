import React, { memo } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useColorMode } from '@chakra-ui/react'
import { IconBaseProps } from 'react-icons'

export const ColorModeSwitch = memo(function ColorModeSwitch(
  props: IconBaseProps
) {
  const { toggleColorMode, colorMode } = useColorMode()
  const mergedProps = {
    fontSize: 'lg',
    cursor: 'pointer',
    onClick: toggleColorMode,
    ...props,
  }

  const Icon = () =>
    colorMode === 'light' ? (
      <BsSunFill {...mergedProps} />
    ) : (
      <BsMoonFill {...mergedProps} />
    )

  return <Icon />
})
