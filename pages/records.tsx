import React from 'react'
import Records from '../components/Records'
import { ErrorProvider } from '../context/Records/ErrorContext'

export default function RecordsPage() {
  return (
    <>
      <ErrorProvider>
        <Records />
      </ErrorProvider>
    </>
  )
}
