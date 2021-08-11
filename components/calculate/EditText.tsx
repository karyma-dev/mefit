import React, { useState } from 'react'
import styled from 'styled-components'

export default function EditText({ exercise, onChange, resetExercise }) {
    const [edit, setEdit] = useState(false)

    const onBlur = (e) => {
        if (exercise.length <= 0) resetExercise()

        setEdit(false)
    }

    const component = edit ? <Input value={exercise} onChange={onChange} name="exercise" onBlur={onBlur} autoFocus /> : <Label onClick={() => setEdit(true)}>{exercise}</Label >

    return component
}

interface IProp {
}

const Input = styled.input`
    background-color: transparent;
    outline: none;
    color: white;
    font-size: 3rem;
    font-weight: 300;
    width: 200px;
`


const Label = styled.label`
    font-size: 3rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
`