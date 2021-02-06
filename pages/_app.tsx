import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global.style";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Imgur clone</title>
        <meta name="description" content="Imgur clone web app using NextJs." />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
