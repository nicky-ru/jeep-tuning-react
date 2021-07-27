import {ChakraProvider} from "@chakra-ui/react"
import theme from "../lib/theme";

function MyApp({ Component, pageProps, cookies }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
