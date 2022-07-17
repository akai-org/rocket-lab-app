import { useColorMode } from '@chakra-ui/react'

export const useColors = () => {
  const { colorMode } = useColorMode()
  const mode = colorMode === 'light'

  //First value for light mode
  //Second value for dark mode

  //font colors
  const fontPrimary = mode ? 'black' : 'white'
  const fontSecondary = mode ? '#2D3748' : '#D5D7CA'
  const fontNeutral = mode ? '#3F3F3F' : '#C0C0C0'

  //border colors
  const borderPrimary = mode ? '#C4C4C4' : 'black'
  const borderSecondary = '#D4D4D4'

  //shadow colors
  const shadowPrimary = mode ? '#D5D5D5' : 'black'

  //background colors
  const backgroundPrimary = mode ? 'white' : '#1A202C'

  return {
    fontPrimary,
    fontSecondary,
    fontNeutral,
    borderPrimary,
    borderSecondary,
    shadowPrimary,
    backgroundPrimary,
  }
}
