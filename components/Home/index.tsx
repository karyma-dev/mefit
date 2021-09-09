import React from 'react'
import { motion } from 'framer-motion'
import Header from '../common/Header'
import Footer from '../common/Footer'

import Main from './Main'
import Services from './Services'
import About from './About'
import Newsletter from './Newsletter'

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: 'tween' }}
      >
        <Header />
      </motion.div>
      <Main />
      <Services />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}
