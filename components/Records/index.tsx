import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'

import Header from '../common/Header'
import Main from './Main'

export default function Records() {
  const [errorMessage, setErrorMessage] = useState('')
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      setErrorMessage('Please login to view your records')
    } else if (user.email_verified === false) {
      setErrorMessage('Please verify your email to view your records')
    } else {
      setErrorMessage('')
    }
  }, [user])

  let content = errorMessage ? <h1>{errorMessage}</h1> : <Main />

  return (
    <>
      <Header />
      <Container>{content}</Container>
    </>
  )
}

const Container = styled.div`
  background-color: #151515;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryTextColor};
`

const Message = styled.h1``
