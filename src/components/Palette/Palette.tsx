import { HStack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import DesktopWrapper from '../UI/Wrappers/DesktopWrapper/DesktopWrapper'
import MobileWrapper from '../UI/Wrappers/MobileWrapper/MobileWrapper'
import { useColors } from '../../theme/useColors'
import ColorModeSwitch from '../UI/ColorModeSwitch/ColorModeSwitch'

const Palette = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper
  const colors = useColors()
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Wrapper fontSize="40px">
      <HStack>
        <Text color={colors.primary}>Motyw</Text>
        <ColorModeSwitch fontSize="35px" />
      </HStack>
      <Text color={colors.primary}>Primary</Text>
      <Text color={colors.secondary}>Secondary</Text>
      <Text color={colors.borderPrimary}>BorderPrimary</Text>
      <Text color={colors.borderSecondary}>BorderSecondary</Text>
    </Wrapper>
  )
}

export default Palette
