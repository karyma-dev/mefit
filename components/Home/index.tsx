import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

import Main from './Main'
import Services from './Services'
import About from './About'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
      <Footer />
    </>
  )
}
