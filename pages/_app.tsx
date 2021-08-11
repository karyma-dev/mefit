import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import GlobalStyle from '../utils/GlobalStyles'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
