import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Chart from './Chart'
import Form from './Form'

export default function Main() {
  return (
    <Wrapper
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Calculator>
        <Chart />
        <Form />
      </Calculator>
    </Wrapper>
  )
}

const Wrapper = styled(motion.main)`
  background-color: #060606;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Calculator = styled.div`
  background-color: #151515;
  display: flex;
  border-radius: 20px;
`
