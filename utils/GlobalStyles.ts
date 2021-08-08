import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 18px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
  }

  @media only screen and (max-width: 1200px){
    html {
      font-size: 16px;
    }
  }
`

export default GlobalStyle