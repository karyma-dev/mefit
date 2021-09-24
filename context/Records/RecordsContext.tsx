import { useState, createContext, useContext } from 'react'

const RecordsContext = createContext()

export const useRecordsContext = () => useContext(RecordsContext)

export function RecordsProvider({ children }: IProp) {
  const [records, setRecords] = useState([])

  const value = {
    records,
    setRecords,
  }

  return (
    <RecordsContext.Provider value={value}>{children}</RecordsContext.Provider>
  )
}

interface IProp {
  children: any
}
