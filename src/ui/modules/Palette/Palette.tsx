import {
  BoxProps,
  HStack,
  Text,
  useColorMode,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import DesktopWrapper from '../../components/Wrappers/DesktopWrapper/DesktopWrapper'
import MobileWrapper from '../../components/Wrappers/MobileWrapper/MobileWrapper'
import { useColors } from '../../../theme/useColors'
import ColorModeSwitch from '../../components/ColorModeSwitch/ColorModeSwitch'

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

  return (
    <Wrapper fontSize="25px">
      <HStack>
        <Text color={colors.fontPrimary}>Motyw</Text>
        <ColorModeSwitch fontSize="25px" />
      </HStack>
      <Text as="u">COLORS</Text>
      <Text color={colors.fontPrimary}>FontPrimary</Text>
      <Text bgColor={colors.fontPrimary} color={colors.fontPrimaryOpposite}>FontPrimaryOpposite</Text>
      <Text color={colors.fontSecondary}>FontSecondary</Text>
      <Text color={colors.fontNeutral}>FontNeutral</Text>
      <Rect bgColor={colors.backgroundPrimary}>BackgroundPrimary</Rect>
      <Rect bgColor={colors.borderPrimary}>BorderPrimary</Rect>
      <Rect bgColor={colors.borderSecondary}>BorderSecondary</Rect>
      <Rect bgColor={colors.shadowPrimary}>ShadowPrimary</Rect>
      <Rect bgColor={colors.orangePrimary}>OrangePrimary</Rect>
      <Rect bgColor={colors.errorPrimary}>OrangePrimary</Rect>
      <Text mt="20px" as="u">
        FONT SIZES
      </Text>
      <Text fontSize="xxs">AaBbCc xxs</Text>
      <Text fontSize="xs">AaBbCc xs</Text>
      <Text fontSize="md">AaBbCc md</Text>
      <Text fontSize="lg">AaBbCc lg</Text>
      <Text fontSize="xl">AaBbCc xl</Text>
      <Text fontSize="xxl">AaBbCc xxl</Text>
    </Wrapper>
  )
}

export default Palette
