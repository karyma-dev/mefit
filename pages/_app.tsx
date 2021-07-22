import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { UserProvider } from "@auth0/nextjs-auth0";

const GlobalStyle = createGlobalStyle`
  
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
