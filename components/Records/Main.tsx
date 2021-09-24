import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import _ from 'lodash'

import Dropdown from './Dropdown'
import Graph from './Graph'
import { useRecordsContext } from '../../context/Records/RecordsContext'
import { useErrorContext } from '../../context/Records/ErrorContext'

export default function Main() {
  const [exercise, setExercise] = useState('')
  const { error, setError } = useErrorContext()
  const { records, setRecords } = useRecordsContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('api/records')
        const { data } = result

        setRecords(data)
        setExercise(data[0].exercise)
      } catch (err) {
        if (err.response.data) setError(err.response.data.errorMessage)
        else setError('Error has occured')
      }
    }
    fetchData()
  }, [])

  const uniqueExerciseNames = [
    ...new Set(records.map((item: { exercise: string }) => item.exercise)),
  ]

  const filteredRecords = records.filter(
    (record) => record.exercise === exercise
  )

  return (
    <div>
      <h1>{exercise}</h1>
      <Dropdown
        setExercise={setExercise}
        uniqueExerciseNames={uniqueExerciseNames}
      />
      <Graph data={filteredRecords} />
    </div>
  )
}
