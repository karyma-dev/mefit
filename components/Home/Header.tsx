import React from 'react'
import styled from 'styled-components'

import AuthButton from '../common/AuthButton'

export default function Header() {
  return (
    <Head>
      <Video autoPlay muted loop>
        <source src="/hero.mp4" />
      </Video>
      <NavContainer>
        <Nav>
          <H1>meFit</H1>
          <AuthButton link="/api/auth/login" primary>
            Login
          </AuthButton>
        </Nav>
      </NavContainer>

      <HeaderTextContainer>
        <HeaderText>
          <H2>Tired of logging your exercises on paper?</H2>
          <P>Sign up free now to calculate and track your workout</P>
          <div>
            <AuthButton link="/api/auth/login" margin="0 20px 0 0">
              Login
            </AuthButton>
            <AuthButton link="/api/auth/login" primary>
              Sign Up
            </AuthButton>
          </div>
        </HeaderText>
      </HeaderTextContainer>
      <Banner>Coming soon to Android and IOS!</Banner>
      <Opacity />
    </Head>
  )
}

const Video = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
`

const Head = styled.header`
  height: 100vh;
`

const Opacity = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.65);
`

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const H1 = styled.h1`
  font-weight: 900;
`

const HeaderTextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`

const HeaderText = styled.div`
  width: 80%;
  margin: 0 auto;
`

const H2 = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  color: #ab1139;
`

const P = styled.p`
  font-weight: 100;
  font-size: 1.5rem;
`

const Banner = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #ab1139;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: white;
  font-weight: 700;
`
