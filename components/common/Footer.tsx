import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <div>
          <H4>MeFit</H4>
          <Address>Created by <A href="https://www.karyma.ca" target="_blank">Kary Ma</A></Address>
        </div>
        <Nav>
          {/* <NavLink>About</NavLink>
          <NavLink>Calculate</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Records</NavLink>
          <NavLink>Suggestions</NavLink> */}
        </Nav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: white;
  padding: 50px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.nav`
`

const H4 = styled.h4`

`

const A = styled.a`
  text-decoration: underline;
`

const Address = styled.address`
  font-style: normal;
`

const NavLink = styled.a`
  margin: 0 10px;
`