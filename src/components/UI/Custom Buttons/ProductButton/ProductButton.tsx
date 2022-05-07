import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export type Device = 'desktop' | 'mobile'

export type Operation = '+' | '-'

export interface ProductButtonProps extends ButtonProps {
  device: Device
  onClick: () => void
  fontSize?: string
  h?: string
  w?: string
}

const ProductButton = ({
  device,
  fontSize = '30px',
  w = '32px',
  h = '32px',
  children,
  ...restProps
}: ProductButtonProps) => {
  return (
    <Button
      w={w}
      h={h}
      borderRadius="6px"
      fontWeight="400"
      fontSize={fontSize}
      color="white"
      bgColor="#FF7700"
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default ProductButton
