import React from "react"
import { ThemeProvider as UtilProvider } from "styled-components"

const theme = {
  primaryTextColor: 'white',
  secondaryTextColor: 'black',
  tertiaryTextColor: 'red'
}

const devices = {
  mobileS: '300px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1080px',
  desktopL: '2560px'
}

const Theme = ({ children }) => (
  <UtilProvider theme={theme} screens={devices}>
    {children}
  </UtilProvider>
)

export default Theme