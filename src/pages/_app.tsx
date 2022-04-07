import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import MobileNavigation from '../components/Navigation/MobileNavigation'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '../styles/globals.css'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

export const theme = extendTheme({
  config,
  breakpoints: createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  }),
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Inter, sans-serif',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)
  return (
    <UserProvider>
      <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor}>*/}
        <ChakraProvider theme={theme}>
          <MobileNavigation />
          <Component {...pageProps} />
        </ChakraProvider>
        {/*</PersistGate>*/}
      </Provider>
    </UserProvider>
  )
}

export default MyApp
