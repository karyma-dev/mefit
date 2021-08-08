import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default function Main() {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <source src='/hero.mp4' type="video/mp4" />
      </Video>
      <Filter />

      <Container>
        <H1 initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={variants}
        >
          Take your training to the next level.
        </H1>
        <H2 initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={variants}
        >
          <Link href="/api/auth/login">Sign up</Link> to keep track of your progression
        </H2>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100vh;
`

const Video = styled.video`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`

const Filter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.75);
`

const Container = styled.div`
  position: absolute;
  bottom: 30%;
  left: 10%;
  color: ${({ theme }) => theme.primaryTextColor};
`

const H1 = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const H2 = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 300;
`

const Link = styled.a`
  color: ${({ theme }) => theme.tertiaryTextColor};
  text-decoration: underline;
  padding-bottom: 1rem;
`