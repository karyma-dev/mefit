import React from 'react'
import styled from 'styled-components'

export default function Services() {
    return (
        <Wrapper>
            <H3>Our Services</H3>
            <Container>
                <Card color='white'>
                    <Img src='1.jpg' />
                    <CardTextContainer>
                        <h4>Up to date research</h4>
                        <CardUnderline />
                        <p>
                            MeFit offers software solution for your workout needs with the latest research. Tracks RPE(Rate of Perceived Exertion) and total volume. MeFit offers software solution for your workout needs with the latest research. Tracks RPE(Rate of Perceived Exertion) and total volume.
                        </p>
                    </CardTextContainer>
                </Card>
                <Card>
                    <Img src='2.jpg' />
                    <CardTextContainer>
                        <h4>Track your progress</h4>
                        <CardUnderline />
                        <p>
                            MeFit offers an easy way for you to track and calculate your progress. Gives you a way to see your progression with clean and visually appealing graphs. MeFit offers an easy way for you to track and calculate your progress. Gives you a way to see your progression with clean and visually appealing graphs.
                        </p>
                    </CardTextContainer>
                </Card>
                <Card color='white'>
                    <Img src='3.jpg' />
                    <CardTextContainer>
                        <h4>Access Anywhere</h4>
                        <CardUnderline />
                        <p>
                            Calculate and see your progress anywhere. Coming to apple and android soon. Calculate and see your progress anywhere. Coming to apple and android soon.
                        </p>
                    </CardTextContainer>
                </Card>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
            color: ${({ theme }) => theme.primaryTextColor};
            padding: 20vh 0.5rem;
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
            width: 100%;

            @media (max-width: 1000px) {
                flex-direction: column;
                width: 50%;
            }

            @media (max-width: 700px) {
                width: 70%;
            }

            @media (max-width: 500px) {
                width: 90%;
            }
            `

const Card = styled.div`
            display: inline-flex;
            flex-direction: column;
            background-color: white;
            color: black;
            text-align: justify;
            padding-bottom: 1rem;
            overflow: hidden;
            flex: 1;
            margin: 0.5rem;
            `

const Img = styled.div`
            background: ${({ src }) => `url('/cards/${src}') no-repeat center center`};
            background-size: cover;
            height: 300px;
            width: 100%;
            `

const CardTextContainer = styled.div`
            padding: 1.5rem;
            `

const CardUnderline = styled.hr`
            width: 20%;
            height: 10px;
            background-color: ${({ theme }) => theme.tertiaryTextColor};
            border: none;
            margin: 1rem 0;
            `

