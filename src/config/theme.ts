import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  //   styles: {
  //     global: {
  //       body: {
  //         bg: "gray.800",
  //         color: "white",
  //       },
  //     },
  //   },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
});
