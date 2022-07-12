import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useColorMode } from '@chakra-ui/react'
import { IconBaseProps } from 'react-icons'

const ColorModeSwitch = (props: IconBaseProps) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const mergedProps = {
    fontSize: '20px',
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
}

export default ColorModeSwitch
