import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { useColors } from '../../../../theme/useColors'

export interface ProductButtonProps extends ButtonProps {
  onClick?: () => void
  fontSize?: string
  h?: string
  w?: string
}

const ProductButton = ({
  fontSize = '30px',
  w = '32px',
  h = '32px',
  children,
  ...restProps
}: ProductButtonProps) => {
  const colors = useColors()

  return (
    <Button
      w={w}
      h={h}
      borderRadius="6px"
      fontWeight="light"
      fontSize={fontSize}
      color="white"
      bgColor={colors.orangePrimary}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default ProductButton
