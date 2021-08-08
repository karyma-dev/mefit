import React from 'react'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import GlobalStyle from '../utils/GlobalStyles'
import UtilProvider from '../utils'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UtilProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UtilProvider>
    </UserProvider>
  )
}

export default MyApp
