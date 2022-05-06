import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import '../styles/globals.css'
import { theme } from '../theme/theme'
import { RouteGuard } from '../components/routeGuard'
import Layout from '../components/UI/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)

  return (
    <UserProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ChakraProvider theme={theme}>
          <Layout />
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </ChakraProvider>
        {/* </PersistGate> */}
      </Provider>
    </UserProvider>
  )
}

export default MyApp
