import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface DesktopWrapperProps extends FlexProps {
  children: ReactNode
}

const DesktopWrapper = ({ children, ...restProps }: DesktopWrapperProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100vw"
      p="40px 40px 150px 263px"
      maxW="2000px"
      m="75px auto 0 auto"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export default DesktopWrapper
