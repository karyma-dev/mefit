import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from "next/link"

export default function Header() {
  const [active, setActive] = useState(false)

  if (typeof window !== "undefined") {
      const showBackground = () => {
        if (window.scrollY >= 60) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    window.addEventListener('scroll', showBackground)
  }

  return (
    <Wrapper active={active} role='navigation'>
      <Link href="/">
        <Brand>MeFit</Brand>
      </Link>

      <nav>
        <Link href="/calculate">
          <NavLink>Calculate</NavLink>
        </Link>
        <Link href="/records">
          <NavLink>Records</NavLink>
        </Link>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.primaryTextColor};
  width: 100%;
  padding: 20px 50px;
  /* background: ${props => props.active ? `rgba( 255, 255, 255, 0.10 )` : null}; */
  background: rgba( 255, 255, 255, 0.10 );
  backdrop-filter: blur( 3.0px );
  -webkit-backdrop-filter: blur( 3.0px );
  box-shadow: 0 -15px 30px 0 rgba( 0, 0, 0, 1 );
  border-bottom: 1px solid rgba( 255, 255, 255, 0.1 );
`

const Brand = styled.a`
  font-weight: 500;
  font-size: 1.5rem;
`

const NavLink = styled.a`
  margin-left: 20px;
`