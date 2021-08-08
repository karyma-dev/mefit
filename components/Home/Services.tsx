import React from 'react'
import styled from 'styled-components'
import Theme from '../../utils'

import Button from '../common/Button'

export default function Services() {
    return (
        <Wrapper>
            <H3>Our Services</H3>
            <Container>
                <Card color='white'>
                    <CardTitle tertiary>Up to date research</CardTitle>
                    <CardText>MeFit offers software solution for your workout needs with the latest research. Tracks RPE(Rate of Perceived Exertion) and total volume.
                    </CardText>
                </Card>
                <Card>
                    <CardTitle>Track your progress</CardTitle>
                    <CardText style={{ marginBottom: '30px' }}>
                        MeFit offers an easy way for you to track and calculate your progress. Gives you a way to see your progression with clean and visually appealing graphs.
                    </CardText>
                    <Button text="Calculate" />
                </Card>
                <Card color='white'>
                    <CardTitle tertiary>Access Anywhere</CardTitle>
                    <CardText>
                        Calculate and see your progress anywhere. Coming to apple and android soon.
                    </CardText>
                </Card>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 30vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#060606;
`

const H3 = styled.h3`
    margin-bottom: 5rem;
`
const Container = styled.div`
    display: flex;
    align-items: flex-start;
`

const Card = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color:${({ color }) => color ? color : null};
    color: ${({ color, theme }) => color ? 'black' : theme.color};
    text-align: justify;
    flex: 1;
`

const CardTitle = styled.h4`
    margin-bottom: 1rem;
    color: ${props => props.tertiary ? props.theme.tertiaryTextColor : null};
`

const CardText = styled.p`
    flex-grow: 0;
`


