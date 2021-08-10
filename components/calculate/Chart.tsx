import React from 'react'
import styled from 'styled-components'

export default function Chart() {
    return (
        <Wrapper>
            <Title>RPE Chart</Title>
            <Description>The RPE (Rate of Perceived Exertion) scale is used to measure the intensity of your exercise</Description>
            <Container>
                <Rpe>
                    <Number>10</Number>
                    <Group>
                        <Label>Maximum Effort</Label>
                        <Text>Feels almost impossible to keep going</Text>
                        <Text>Completely out of breath, unable to talk</Text>
                    </Group>
                </Rpe>
                <Rpe>
                    <Number>9</Number>
                    <Group>
                        <Label>Very Hard Activity</Label>
                        <Text>Very difficult to maintain exercise intensity</Text>
                        <Text>Can barely breath, speak single words</Text>
                    </Group>
                </Rpe>
                <Rpe>
                    <Number>7 - 8</Number>
                    <Group>
                        <Label>Vigorous activity</Label>
                        <Text>On the verge of becoming uncomfortable</Text>
                        <Text>Short of breath, can speak a sentence</Text>
                    </Group>
                </Rpe>
                <Rpe>
                    <Number>4 - 6</Number>
                    <Group>
                        <Label>Moderate activity</Label>
                        <Text>Feels like you can exercise for hours</Text>
                        <Text>Breathing heavily, can hold short conversation</Text>
                    </Group>
                </Rpe>
                <Rpe>
                    <Number>2 - 3</Number>
                    <Group>
                        <Label>Light activity</Label>
                        <Text>Feels like you can maintain for hours</Text>
                        <Text>Easy to breath and easy to carry on conversation</Text>
                    </Group>
                </Rpe>
                <Rpe>
                    <Number>1</Number>
                    <Group>
                        <Label>Very Light activity</Label>
                        <Text>Anything other than sleeping</Text>
                        <Text>Watching TV, riding in car, etc</Text>
                    </Group>
                </Rpe>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #949494;
    padding: 3rem;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        right: 0;
        border-right: 2px solid #252525;
        top: 10%;
        bottom: 10%;
    }
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 1rem;
`

const Description = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    margin: 1rem 0;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Rpe = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0.2rem 0;
`

const Number = styled.span`
    padding: 20px;
    flex: 1;
    text-align: center;
    font-weight: 500;
`

const Group = styled.div`
    text-align: center;
    flex: 8;
`

const Label = styled.h3`
    font-size: 0.9rem;
`

const Text = styled.p`
    font-weight: 100;
    font-size: 0.8rem;
`