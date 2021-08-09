import React from 'react'
import styled from 'styled-components'

import Button from '../common/Button'

export default function Newsletter() {
    return (
        <Wrapper>
            <H3>Newsletter Sign Up</H3>
            <P>Sign up with your email address to receive news and updates.</P>
            <Form>
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="Email" />
                <Button text="Sign Up" style={{ marginTop: '10px' }} />
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 30px;
    text-align: center;
    background-color: #0B0B0B;
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