import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'
import { useErrorContext } from '../../context/Records/ErrorContext'

import Header from '../common/Header'
import Main from './Main'

export default function Records() {
  const { error, setError } = useErrorContext()
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      setError('Please login to view your records')
    } else if (user.email_verified === false) {
      setError('Please verify your email to view your records')
    } else {
      setError('')
    }
  }, [user])

  let content = error ? <h1>{error}</h1> : <Main />

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
