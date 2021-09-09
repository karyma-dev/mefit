import React, { useState, memo } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import styled from 'styled-components'
import Link from 'next/link'

import Button from './Button'

interface IProp {
  position?: string
}

export default function Header({ position = 'fixed' }: IProp) {
  const { user, error, isLoading } = useUser()
  const [active, setActive] = useState(false)

  if (typeof window !== 'undefined') {
    const showBackground = () => {
      if (window.scrollY >= 60) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', showBackground)
  }

  const route = user ? 'logout' : 'login'

  return (
    <Wrapper position={position} active={active} role="navigation">
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
        <a href={`api/auth/${route}`}>
          <Button text={route} />
        </a>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: ${({ position }) => position};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.primaryTextColor};
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ active }) =>
    active ? `rgba( 255, 255, 255, 0.10 )` : null};
  backdrop-filter: ${({ active }) => (active ? 'blur( 5.0px )' : null)};
  -webkit-backdrop-filter: ${({ active }) => (active ? `blur( 5.0px )` : null)};
  box-shadow: ${({ active }) =>
    active ? `0 -15px 30px 0 rgba( 0, 0, 0, 1 )` : null};
  border-bottom: ${({ active }) =>
    active ? `1px solid rgba( 255, 255, 255, 0.1 )` : null};
  z-index: 1000;
  /* mix-blend-mode: exclusion; */

  @media (max-height: 600px) {
    position: absolute;
  }
`

const Brand = styled.a`
  font-weight: 500;
  font-size: 1.5rem;
`

const NavLink = styled.a`
  margin-right: 30px;
`
