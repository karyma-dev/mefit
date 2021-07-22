import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Header>
        <Video autoPlay muted loop>
          <source src="/hero.mp4" />
        </Video>
        <NavContainer>
          <Nav>
            <H1>meFit</H1>
            <a href="/api/auth/login">Login</a>
          </Nav>
        </NavContainer>

        <Container>
          <h2>Tired of logging your exercises on paper?</h2>
          <p>Sign up free now to calculate and track your workout</p>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </Container>
        <Opacity />
      </Header>
      <div>IOS and Android App coming soon!</div>
      <main>
        <div>
          <h3>Simple and Easy</h3>
          <p></p>
        </div>
        <div>
          <h3>Access From Anywhere</h3>
          <p></p>
        </div>
        <div>
          <h3>Latest Research</h3>
          <p></p>
        </div>
        <footer>Copyright</footer>
      </main>
    </>
  )
}

const Video = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Header = styled.header`
  height: 100vh;
`

const Opacity = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
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

const Container = styled.div`
  width: 80%;
  z-index: 1;
`
