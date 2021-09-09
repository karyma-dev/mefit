import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import StackedBarGraph from './StackedBarGraph'

export default function Main() {
  const [records, setRecords] = useState([])
  const [exercise, setExercise] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await axios.get('api/records')
      const { data } = result

      setRecords(data)
      setExercise(data[0].exercise)
    }

    fetchData()
  }, [])

  const uniqueExerciseNames = [
    ...new Set(records.map((item: { exercise: string }) => item.exercise)),
  ]
  const filteredRecords = records.filter(
    (record: any) => record.exercise === exercise
  )

  return (
    <Wrapper>
      Dropdown | <StackedBarGraph records={filteredRecords} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
