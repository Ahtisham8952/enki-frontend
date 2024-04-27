// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

import "@fontsource/montserrat"
import "@fontsource/rajdhani"
import { mynewtheme } from '../src/theme'

function Enki({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Enki