import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

export default function Services() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Wrapper>
      <H3>Our Services</H3>
      <Container ref={ref}>
        <Card
          color="white"
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Img src="1.png" />
          <CardTextContainer>
            <h4>Up to date research</h4>
            <CardUnderline />
            <p>
              At MeFit we strive to keep up with the latest research and adapt
              to the most cutting edge technologies out there.
            </p>
          </CardTextContainer>
        </Card>
        <Card
          color="white"
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.75 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Img src="2.png" />
          <CardTextContainer>
            <h4>Track your progress</h4>
            <CardUnderline />
            <p>
              MeFit offers a solution for fitness enthusiasts track of their
              workouts through their RPE (Rate of Perceived Exertion) and total
              volume.
            </p>
          </CardTextContainer>
        </Card>
        <Card
          color="white"
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Img src="3.png" />
          <CardTextContainer>
            <h4>Access Anywhere</h4>
            <CardUnderline />
            <p>
              You have access to the application anywhere and anytime whether
              that is on your phone at the gym or at home on your computer.
              Native application coming soon to Android and IOS!
            </p>
          </CardTextContainer>
        </Card>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: ${({ theme }) => theme.primaryTextColor};
  padding: 20vh 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #060606;
`

const H3 = styled(motion.h3)`
  margin-bottom: 5rem;
  border-bottom: 5px solid red;
`
const Container = styled(motion.div)`
  display: flex;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`

const Card = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  background-color: #f5f5f5;
  color: black;
  padding-bottom: 1rem;
  overflow: hidden;
  flex: 1;
  margin: 0.5rem;
`

const Img = styled.div`
  background: ${({ src }) => `url('/cards/${src}') no-repeat center center`};
  background-size: cover;
  height: 300px;
  width: 100%;
`

const CardTextContainer = styled.div`
  padding: 1.5rem;
`

const CardUnderline = styled.hr`
  width: 20%;
  height: 10px;
  background-color: ${({ theme }) => theme.tertiaryTextColor};
  border: none;
  margin: 1rem 0;
`
