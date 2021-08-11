import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import Button from '../common/Button'
import EditText from './EditText'

interface IProps {
}

interface IState {
    exercise: string,
    date: object,
    set: number,
    rep: number,
    weight: number,
    rpe: number,
    totalVolume: number,
}

export default class Form extends Component<IProps, IState> {
    state = {
        exercise: 'Exercise',
        date: new Date(),
        set: 0,
        rep: 0,
        weight: 0,
        rpe: 0,
        totalVolume: 0
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState<any>({
            [e.target.name]: e.target.value
        }, this.calculateVolume)
    }

    onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const state = this.state[e.target.name]

        if (state <= 0) {
            this.setState<any>({
                [e.target.name]: 0
            })
        } else {
            this.setState<any>({
                [e.target.name]: state.replace(/^0+/, '')
            })
        }
    }

    calculateVolume = () => {
        const { set, rep, weight } = this.state

        this.setState({
            totalVolume: set * rep * weight
        })
    }

    onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        axios.post('api/records')
    }

    onChangeDate = (date: Date) => {
        this.setState({ date })
    }

    onClear = (e) => {
        e.preventDefault()

        this.setState({
            exercise: 'Exercise',
            date: new Date(),
            set: 0,
            rep: 0,
            weight: 0,
            rpe: 0,
            totalVolume: 0
        })
    }

    resetExercise = () => {
        this.setState({
            exercise: 'Exercise'
        })
    }

    render() {

        return (
            <Wrapper>
                <EditContainer>
                    <EditText exercise={this.state.exercise} onChange={this.onChange} resetExercise={this.resetExercise} />
                </EditContainer>
                <Container>
                    <Group>
                        <Label>Date</Label>
                        <DateInput selected={this.state.date} onChange={this.onChangeDate} />
                    </Group>
                    <Group>
                        <Label>Set</Label>
                        <Input value={this.state.set} onChange={this.onChange} name="set" type='number' min="0" onBlur={this.onBlur} />
                    </Group>
                    <Group>
                        <Label>Rep</Label>
                        <Input value={this.state.rep} onChange={this.onChange} name="rep" type='number' min="0" onBlur={this.onBlur} />
                    </Group>
                    <Group>
                        <Label>Weight</Label>
                        <Input value={this.state.weight} onChange={this.onChange} name="weight" type='number' min="0" onBlur={this.onBlur} />
                    </Group>
                    <Group>
                        <Label>RPE</Label>
                        <Input value={this.state.rpe} onChange={this.onChange} name="rpe" type='number' min="0" max="10" onBlur={this.onBlur} />
                    </Group>
                    <Group>
                        <Label>Total Volume</Label>
                        <Input value={this.state.totalVolume} name="totalVolume" type='number' disabled min="0" />
                    </Group>

                    <ButtonGroup>
                        <Button text='Submit' style={{ marginRight: '2rem' }} onClick={this.onSubmit} />
                        <Clear onClick={this.onClear}>Clear</Clear>
                    </ButtonGroup>
                </Container>
            </Wrapper>
        )
    }
}

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

const DateInput = styled(DatePicker)`
    background-color: transparent;
    border: 1px solid #5A5A5A;
    color: ${({ theme }) => theme.primaryTextColor};
    outline: none;
    padding: 5px;
    width: 100%;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Clear = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.primaryTextColor};
    cursor: pointer;
    border: none;
    font-size: 1rem;
`