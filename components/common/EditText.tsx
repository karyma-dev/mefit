import React, { useState } from 'react'

export default function EditText({ inputStyle, labelStyle, title }: Prop) {
    const [text, setText] = useState(title)
    const [edit, setEdit] = useState(false)

    const onBlur = (e) => {
        if (text.length <= 0) {
            setText(title)
        } else {
            setText(e.target.value)
        }

        setEdit(false)
    }

    if (edit) {
        return <input value={text} onChange={(e) => setText(e.target.value)} onBlur={onBlur} autoFocus style={inputStyle} />
    } else {
        return <label onClick={() => setEdit(true)} style={labelStyle}>{text}</label >
    }
}

interface Prop {
    title: string,
    inputStyle?: object,
    labelStyle?: object
}