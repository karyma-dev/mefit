import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import { RecordsProvider } from '../context/Records/RecordsContext'

import GlobalStyle from '../utils/GlobalStyles'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <RecordsProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecordsProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
