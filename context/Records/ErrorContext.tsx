import { useState, createContext, useContext } from 'react'

const ErrorContext = createContext()

export const useErrorContext = () => useContext(ErrorContext)

export function ErrorProvider({ children }: IProp) {
  const [error, setError] = useState('')

  const value = {
    error,
    setError,
  }

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}

interface IProp {
  children: any
}
