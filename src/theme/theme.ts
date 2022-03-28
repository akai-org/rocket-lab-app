import { extendTheme, type ThemeConfig, Theme } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const theme = extendTheme({ config }) as Theme
