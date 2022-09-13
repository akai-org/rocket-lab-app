import { Flex } from '@chakra-ui/react'
import { DesktopWrapperProps } from '../DesktopWrapper'
import { useColors } from 'ui/theme'
import { memo } from 'react'

export const MobileWrapper = memo(function MobileWrapper({
  children,
  ...restProps
}: DesktopWrapperProps) {
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
})
