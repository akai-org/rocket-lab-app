import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)
  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </UserProvider>
  )
}

export default MyApp
