import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Inter, sans-serif',
  },
  breakpoints: {
    sm: '900px',
    md: '1024px',
    lg: '1200px',
    xl: '1400px',
    '2xl': '1536px',
  },
  fontSizes: {
    xxs: '11px',
    xs: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
})
