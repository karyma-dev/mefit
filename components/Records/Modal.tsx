import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useRecordsContext } from '../../context/Records/RecordsContext'
import { useErrorContext } from '../../context/Records/ErrorContext'

const Modal = ({ record, setIsOpen }) => {
  const { error, setError } = useErrorContext()
  const { records, setRecords } = useRecordsContext()
  const { date, exercise, rpe, rep, set, weight, totalVolume, _id } = record
  const el = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (e) => {
    if (el && !el.current.contains(e.target)) {
      setIsOpen()
    }
  }

  const onClick = (id) => {
    axios
      .delete('/api/records', { data: id })
      .then((res) => {
        const index = records.findIndex(
          (record) => record._id === res.data.record._id
        )

        const newRecords = [...records]
        newRecords.splice(index, 1)
        if (newRecords.length <= 0) setError('Please add atleast one record')
        setRecords(newRecords)
        setIsOpen()
      })
      .catch(() => console.log('error'))
  }

  return (
    <ul ref={el}>
      <li>{exercise}</li>
      <li>{date}</li>
      <li>RPE: {rpe}</li>
      <li>Reps: {rep}</li>
      <li>Sets: {set}</li>
      <li>Weight: {weight}</li>
      <li>Total Volume: {totalVolume}</li>
      <button onClick={() => onClick(_id)}>Delete</button>
    </ul>
  )
}

export default Modal
