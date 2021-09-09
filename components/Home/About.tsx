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
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src="./about.png" alt="about us" />
        </ImageContainer>
        <TextContainer>
          <H3>About</H3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum
            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum!
          </p>
        </TextContainer>
      </Container>
      <Stripe />
    </Wrapper>
  )
}

const Wrapper = styled.section`
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

const ImageContainer = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
  }
`

const TextContainer = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: white;
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
