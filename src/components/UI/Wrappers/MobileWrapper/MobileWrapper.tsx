import { Flex } from '@chakra-ui/react'
import { DesktopWrapperProps } from '../DesktopWrapper/DesktopWrapper'

const MobileWrapper = ({ children, ...restProps }: DesktopWrapperProps) => {
  return (
    <Flex mt="85px" color="#3F3F3F" flexDirection="column" {...restProps}>
      {children}
    </Flex>
  )
}

export default MobileWrapper
