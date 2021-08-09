import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  primaryTextColor: 'white',
  secondaryTextColor: 'black',
  tertiaryTextColor: 'red'
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme