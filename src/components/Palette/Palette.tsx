import {
  BoxProps,
  HStack,
  Text,
  useColorMode,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import DesktopWrapper from '../UI/Wrappers/DesktopWrapper/DesktopWrapper'
import MobileWrapper from '../UI/Wrappers/MobileWrapper/MobileWrapper'
import { useColors } from '../../theme/useColors'
import ColorModeSwitch from '../UI/ColorModeSwitch/ColorModeSwitch'

const Rect = (rectProps: BoxProps) => (
  <Box
    w="100%"
    h="4rem"
    fontSize="20px"
    border="2px solid black"
    mt="5px"
    borderRadius="10px"
    {...rectProps}
  >
    {rectProps.children}
  </Box>
)

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
      <Text color={colors.neutral}>Neutral</Text>
      <Rect bgColor={colors.background}>Background</Rect>
      <Rect bgColor={colors.borderPrimary}>BorderPrimary</Rect>
      <Rect bgColor={colors.borderSecondary}>BorderSecondary</Rect>
      <Rect bgColor={colors.shadow}>Shadow</Rect>
    </Wrapper>
  )
}

export default Palette
