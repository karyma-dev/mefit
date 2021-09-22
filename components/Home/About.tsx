import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Wrapper ref={ref}>
      <Container>
        <ImageContainer
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -1000, opacity: 0 },
          }}
        >
          <Image src="./about.png" alt="about us" />
        </ImageContainer>
        <TextContainer
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 1000, opacity: 0 },
          }}
        >
          <H3>About</H3>
          <p>
            MeFit was created by Kary Ma as a capstone project at Brainstation
            coding bootcamp to provide for people like himself, an organized way
            to keep track of their workouts. It has been constantly updated
            throughout the years. Fitness has been one of his greatest passion
            ever since he was diagnosed with thyroid cancer. After given a
            second chance he vowed to always challenge himself to greater
            heights whether that is physically or mentally.
          </p>
        </TextContainer>
      </Container>
      <Stripe />
    </Wrapper>
  )
}

const Wrapper = styled(motion.section)`
  position: relative;
  padding: 10vh 0;
  background-color: #0b0b0b;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0;
  }
`

const Stripe = styled.div`
  position: absolute;
  background-color: #0f0f0f;
  width: 70vw;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const Container = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    display: block;
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1;

  @media (max-width: 1000px) {
  }
`

const TextContainer = styled(motion.div)`
  flex: 1;
  padding: 3rem;
  background-color: #f5f5f5;
  margin-left: -40vw;

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 700px) {
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const H3 = styled.h3`
  margin-bottom: 10px;
`
