import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Head>
      <Video autoPlay muted loop>
        <source src="/hero.mp4" />
      </Video>
      <NavContainer>
        <Nav>
          <H1>meFit</H1>
          <a href="/api/auth/login">Login</a>
        </Nav>
      </NavContainer>

      <HeaderTextContainer>
        <HeaderText>
          <h2>Tired of logging your exercises on paper?</h2>
          <p>Sign up free now to calculate and track your workout</p>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </HeaderText>
      </HeaderTextContainer>
      <div>IOS and Android App coming soon!</div>
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
  background-color: rgba(0, 0, 0, 0.95);
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
  font-weight: 800;
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
