import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import '../styles/globals.css'
import { theme } from '../ui/theme/theme'
import { RouteGuard } from '../ui/routeGuard'
import Layout from '../ui/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)

  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Layout>
              <RouteGuard>
                <Component {...pageProps} />
              </RouteGuard>
            </Layout>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </UserProvider>
  )
}

export default MyApp
