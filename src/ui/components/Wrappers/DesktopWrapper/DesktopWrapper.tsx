import { Flex, FlexProps } from '@chakra-ui/react'
import { memo, ReactNode } from 'react'
import { useColors } from 'ui/theme'

export interface DesktopWrapperProps extends FlexProps {
  children: ReactNode
}

export const DesktopWrapper = memo(
  ({ children, ...restProps }: DesktopWrapperProps) => {
    const colors = useColors()

    return (
      <Flex
        flexDirection="column"
        color={colors.fontSecondary}
        w="100vw"
        p="40px 40px 150px 263px"
        overflow="visible"
        maxW="2000px"
        minH="calc(100vh - 120px)"
        m="80px auto 0 auto"
        {...restProps}
      >
        {children}
      </Flex>
    )
  }
)
