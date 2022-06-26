import { ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

interface MobileWrapperProps extends FlexProps {
  children: ReactNode
}

const MobileWrapper = ({ children, ...restProps }: MobileWrapperProps) => {
  return (
    <Flex mt="85px" color="#3F3F3F" flexDirection="column" {...restProps}>
      {children}
    </Flex>
  )
}

export default MobileWrapper
