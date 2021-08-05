import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 18px;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle