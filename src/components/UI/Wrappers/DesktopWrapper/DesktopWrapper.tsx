import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface DesktopWrapperProps {
  children: ReactNode
}

const DesktopWrapper = ({ children }: DesktopWrapperProps) => {
  return (
    <Flex
      flexDirection="row"
      w="100vw"
      pb="150px"
      maxW="2000px"
      m="75px auto 0 auto"
    >
      {children}
    </Flex>
  )
}

export default DesktopWrapper
