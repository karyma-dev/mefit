import React from 'react'
import styled from 'styled-components'

export default function Form() {
    return (
        <Wrapper>
            <Title>Exercise</Title>
            <Container>
                <Group>
                    <Label>Date</Label>
                    <Input />
                </Group>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    flex: 1;
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 3rem;
`

const Title = styled.h1`
    text-align: center;
`

const Container = styled.div`

`

const Group = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 1rem;
`

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #5A5A5A;
    color: ${({ theme }) => theme.primaryTextColor};
    outline: none;
    padding: 5px;
`