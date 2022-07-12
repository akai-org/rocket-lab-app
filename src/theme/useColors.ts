import { useColorMode } from '@chakra-ui/react'

export const useColors = () => {
  const { colorMode } = useColorMode()
  const mode = colorMode === 'light'

  //First value for light mode
  //Second value for dark mode
  const primary = mode ? 'black' : 'white'
  const secondary = mode ? '#3F3F3F' : '#C0C0C0'
  const neutral = mode ? '#2D3748' : '#D5D7CA'
  const shadow = mode ? '#D5D5D5' : 'black'
  const background = mode ? 'white' : '#1A202C'

  const borderPrimary = '#C4C4C4'
  const borderSecondary = '#D4D4D4'

  return {
    primary,
    secondary,
    neutral,
    shadow,
    background,
    borderPrimary,
    borderSecondary,
  }
}
