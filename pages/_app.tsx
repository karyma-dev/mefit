import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`

export default MyApp
