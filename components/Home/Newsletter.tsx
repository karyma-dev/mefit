import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Button from '../common/Button'
import Message from '../common/Message'

export default function Newsletter() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState({ text: '', type: '' })

    function onSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()

        const data = { firstName, lastName, email }

        axios.post('/api/subscribe', data)
            .then(({ data }) => setMessage({ text: data.message, type: data.type }))
            .catch(({ response }) => setMessage({ text: response.data.message, type: response.data.type }))
    }

    return (
        <Wrapper>
            <Message type={message.type} message={message.text} resetMessage={() => setMessage({ text: '', type: '' })} />
            <H3>Newsletter Sign Up</H3>
            <P>Sign up with your email address to receive news and updates.</P>
            <Form>
                <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button text="Sign Up" style={{ marginTop: '10px' }} onClick={(e) => onSubmit(e)} />
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 30px;
    text-align: center;
    background-color: #181818;
`

const H3 = styled.h3`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.tertiaryTextColor};
`

const P = styled.p`
    margin: 15px;
`

const Form = styled.form`
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    color: ${({ theme }) => theme.secondaryTextColor};

    @media (max-width: 700px) {
        margin: 10px 0;
    }
`