import "../styles/globals.css";
import "@fontsource/roboto";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "src/config/theme";
import "react-multi-carousel/lib/styles.css";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n/Index";
import { HydrationProvider, Client } from "react-hydration-provider";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { Router } from "next/router";

nProgress.configure({ showSpinner: false });


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <Client>
            <Component {...pageProps} />
          </Client>
        </ChakraProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}

export default MyApp;
