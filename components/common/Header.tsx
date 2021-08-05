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
  background: ${({active}) => active ? `rgba( 255, 255, 255, 0.10 )` : null};
  backdrop-filter: ${({active}) => active ? 'blur( 3.0px )' : null};
  -webkit-backdrop-filter: ${({active}) => active ? `blur( 3.0px )` : null};
  box-shadow: ${({active}) => active ? `0 -15px 30px 0 rgba( 0, 0, 0, 1 )` : null};
  border-bottom: ${({active}) => active ? `1px solid rgba( 255, 255, 255, 0.1 )` : null};
  z-index: 1000;
`

const Brand = styled.a`
  font-weight: 500;
  font-size: 1.5rem;
`

const NavLink = styled.a`
  margin-left: 20px;
`