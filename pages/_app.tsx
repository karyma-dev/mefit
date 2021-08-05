import React from 'react'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import GlobalStyle from '../utils/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
