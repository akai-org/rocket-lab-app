import { useColorMode } from '@chakra-ui/react'

export const useColors = () => {
  const { colorMode } = useColorMode()
  const mode = colorMode === 'light'

  const primary = mode ? 'black' : 'white'
  const secondary = mode ? '#3F3F3F' : '#C0C0C0'
  const disabled = mode ? '#C4C4C4' : 'red'
  const shadow = mode ? '' : ''

  const menu = '#878585'
  const borderPrimary = '#C4C4C4'
  const borderSecondary = '#D4D4D4'

  const colors = {
    primary,
    secondary,
    borderPrimary,
    borderSecondary,
    disabled,
    shadow,
  }

  return colors
}
