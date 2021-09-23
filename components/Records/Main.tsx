import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import _ from 'lodash'

import Dropdown from './Dropdown'
import Graph from './Graph'

export default function Main() {
  const [errorMessage, setErrorMessage] = useState('')
  const [records, setRecords] = useState([])
  const [exercise, setExercise] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('api/records')
        const { data } = result

        setRecords(data)
        setExercise(data[0].exercise)
      } catch (err) {
        setErrorMessage(err.response.data.errorMessage)
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

  const content =
    errorMessage || !records ? (
      <h1>{errorMessage}</h1>
    ) : (
      <div>
        <h1>{exercise}</h1>
        <Dropdown
          setExercise={setExercise}
          uniqueExerciseNames={uniqueExerciseNames}
        />
        <Graph width={500} height={500} data={filteredRecords} />
      </div>
    )

  return <Wrapper>{content}</Wrapper>
}

const Wrapper = styled.div``
