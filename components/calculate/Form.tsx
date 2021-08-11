import withRouter from 'next/dist/client/with-router'
import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../common/Button'
import EditText from '../common/EditText'

export default class Form extends Component {

    state = {
        exercise: 'Exercise',
        date: '',
        set: '',
        rep: '',
        weight: '',
        rpe: '',
        totalVolume: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Wrapper>
                <EditContainer>
                    <EditText title="Exercise" labelStyle={labelStyle} inputStyle={inputStyle} />
                </EditContainer>
                <Container>
                    <Group>
                        <Label>Date</Label>
                        <Input value={this.state.date} onChange={this.onChange} name="date" />
                    </Group>
                    <Group>
                        <Label>Set</Label>
                        <Input value={this.state.set} onChange={this.onChange} name="set" type='number' />
                    </Group>
                    <Group>
                        <Label>Rep</Label>
                        <Input value={this.state.rep} onChange={this.onChange} name="rep" type='number' />
                    </Group>
                    <Group>
                        <Label>Weight</Label>
                        <Input value={this.state.weight} onChange={this.onChange} name="weight" type='number' />
                    </Group>
                    <Group>
                        <Label>RPE</Label>
                        <Input value={this.state.rpe} onChange={this.onChange} name="rpe" type='number' />
                    </Group>
                    <Group>
                        <Label>Total Volume</Label>
                        <Input value={this.state.totalVolume} name="totalVolume" type='number' disabled />
                    </Group>

                    <ButtonGroup>
                        <Button text='Submit' style={{ marginRight: '2rem' }} />
                        Clear
                    </ButtonGroup>
                </Container>
            </Wrapper>
        )
    }
}



const inputStyle = {
    backgroundColor: 'transparent',
    outline: 'none',
    color: 'white',
    fontSize: '3rem',
    fontWeight: '300',
    width: '200px'
}

const labelStyle = {
    fontSize: '3rem',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer'
}

// Styled Components

const EditContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Wrapper = styled.form`
    flex: 1;
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 3rem;
`

const Container = styled.div`
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

const Label = styled.label`
    margin-bottom: 0.5rem;
`

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #5A5A5A;
    color: ${({ theme }) => theme.primaryTextColor};
    outline: none;
    padding: 5px;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`