import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider, useUser } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import { RouteGuard } from '../components/routeGuard'

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)

  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <RouteGuard>
              <Component {...pageProps} />
            </RouteGuard>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </UserProvider>
  )
}

export default MyApp
