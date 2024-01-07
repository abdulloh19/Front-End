import "../styles/globals.css";
import "@fontsource/roboto";
import {  ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "src/config/theme";
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
