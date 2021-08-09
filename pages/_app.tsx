import React from 'react'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import GlobalStyle from '../utils/GlobalStyles'
import ThemeProvider from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
