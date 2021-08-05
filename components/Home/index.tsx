import React from 'react'
import Header from '../common/Header'
import Main from './Main'
import Footer from '../common/Footer'

import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Div>
        Hello world
      </Div>
      <Footer />
    </>
  )
}

const Div = styled.div`
  height: 100vh;
`
