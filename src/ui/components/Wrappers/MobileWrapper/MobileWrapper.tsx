import { Flex } from '@chakra-ui/react'
import { DesktopWrapperProps } from '../DesktopWrapper/DesktopWrapper'
import { useColors } from '../../../../theme/useColors'

const MobileWrapper = ({ children, ...restProps }: DesktopWrapperProps) => {
  const colors = useColors()

  return (
    <Flex
      mt="85px"
      minH="calc(100vh - 125px)"
      color={colors.fontSecondary}
      flexDirection="column"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export default MobileWrapper
