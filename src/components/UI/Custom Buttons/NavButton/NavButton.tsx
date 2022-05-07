import { Button, ButtonProps } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

export interface NavButtonProps extends ButtonProps {
  isItemActive: boolean
  fontSize?: string
  h?: string
  w?: string
}

const NavButton = ({
  isItemActive,
  name,
  children,
  w = '80px',
  h = '40px',
  fontSize = '16px',
  ...restProps
}: NavButtonProps) => {
  return (
    <Button
      variant="outline"
      h={h}
      w={w}
      mb="20px"
      fontSize={fontSize}
      border={isItemActive ? 'none' : '1px solid black'}
      borderRadius="0"
      colorScheme="black"
      color="black"
      fontWeight="normal"
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default NavButton
