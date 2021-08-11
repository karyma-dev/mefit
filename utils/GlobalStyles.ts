import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 18px;
    font-weight: 300;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 2rem;
    }
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