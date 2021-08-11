import React from 'react'
import styled from 'styled-components'

import Chart from './Chart'
import Form from './Form'

export default function Main() {
    return (
        <Wrapper>
            <Calculator>
                <Chart />
                <Form />
            </Calculator>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    background-color: #060606;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const Calculator = styled.div`
    background-color: #151515;
    display: flex;
    border-radius: 20px;
`