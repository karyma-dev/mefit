import React from 'react'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import GlobalStyle from '../utils/GlobalStyles'
import Theme from '../utils/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </UserProvider>
  )
}

export default MyApp
