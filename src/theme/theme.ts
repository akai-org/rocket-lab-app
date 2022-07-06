import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const theme = extendTheme({
  config,
  breakpoints: {
    sm: '900px',
    md: '1024px',
    lg: '1200px',
    xl: '1400px',
    '2xl': '1536px',
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
})
