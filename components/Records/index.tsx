import React, { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'

import Header from '../common/Header'
import Main from './Main'

export default function Records() {
  const { user, error, isLoading } = useUser()

  let content

  if (!user) {
    content = <h1>Please login to view your records</h1>
  } else if (user.email_verified === false) {
    content = <h1>Please verify your email to view your records</h1>
  } else {
    content = <Main />
  }

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
