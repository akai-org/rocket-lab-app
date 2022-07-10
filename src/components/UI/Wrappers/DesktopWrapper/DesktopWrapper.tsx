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
      pb="150px"
      overflow="visible"
      maxW="2000px"
      minH="calc(100vh - 125px)"
      m="75px auto 0 auto"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export default DesktopWrapper
