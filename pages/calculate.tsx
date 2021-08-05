import React from 'react'
import Calculate from '../components/Calculate'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0'

export default function CalculatePage() {
  return (
    <>
      <Calculate />
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
