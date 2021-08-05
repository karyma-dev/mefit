import React from 'react'
import styled from 'styled-components'

export default function Main() {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <source src='/hero.mp4' type="video/mp4"/>
      </Video>
      <Filter />

      <Container>
        <H1>The body believes what the mind believes.</H1>
        <H2>Sign up to keep track of your progression</H2>
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
  background-color: rgba(0, 0, 0, 0.85);
`

const Container = styled.div`
  position: absolute;
  bottom: 30%;
  left: 10%;
  color: ${({theme}) => theme.primaryTextColor};
`

const H1 = styled.h1`
  font-size: 2rem;
`

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 300;
`