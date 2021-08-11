import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from "next/link"

import Button from './Button'

interface IProp {
  position?: string
}

export default function Header({ position = 'fixed' }: IProp) {
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
    <Wrapper position={position} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, type: 'tween' }} active={active} role='navigation'>
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
        <a href="api/auth/login" >
          <Button text="Login" />
        </a>
      </nav>
    </Wrapper >
  )
}

const Wrapper = styled(motion.header)`
  position: ${({ position }) => position};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.primaryTextColor};
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ active }) => active ? `rgba( 255, 255, 255, 0.10 )` : null};
  backdrop-filter: ${({ active }) => active ? 'blur( 3.0px )' : null};
  -webkit-backdrop-filter: ${({ active }) => active ? `blur( 3.0px )` : null};
  box-shadow: ${({ active }) => active ? `0 -15px 30px 0 rgba( 0, 0, 0, 1 )` : null};
  border-bottom: ${({ active }) => active ? `1px solid rgba( 255, 255, 255, 0.1 )` : null};
  z-index: 1000;
  mix-blend-mode: exclusion;

  @media (max-height: 600px){
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