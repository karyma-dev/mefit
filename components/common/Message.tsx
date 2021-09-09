import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface IProp {
  type: string
  message: string
  resetMessage: () => void
}

export default function ErrorMessage({ type, message, resetMessage }: IProp) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) {
      setVisible(false)
      return
    }

    setVisible(true)
    const timer = setTimeout(() => {
      resetMessage()
    }, 5000)
    return () => clearTimeout(timer)
  }, [message])

  if (visible) {
    return (
      <Container
        animate={{ y: -100, opacity: 0.5 }}
        transition={{ delay: 3, duration: 2 }}
        type={type}
      >
        <Message>{message}</Message>
      </Container>
    )
  } else {
    return null
  }
}

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props: { type: string }) =>
    props.type === 'error' ? '#E53935' : 'green'};
  text-align: center;
  padding: 1rem;
  z-index: 1000;
`

const Message = styled.h3`
  font-size: 1rem;
`
