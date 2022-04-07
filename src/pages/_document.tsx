import { ColorModeScript } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from './_app'

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
