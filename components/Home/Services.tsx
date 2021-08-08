import React from 'react'
import styled from 'styled-components'
import Theme from '../../utils'

import Button from '../common/Button'

export default function Services() {
    return (
        <Wrapper>
            <H3>Our Services</H3>
            <Container>
                <LeftCard>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                </LeftCard>
                <Card>
                    <h4>Title</h4>
                    <p style={{ marginBottom: '30px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                    <Button text="Calculate" />
                </Card>
                <RightCard>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                </RightCard>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${({ theme }) => theme.primaryTextColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#060606;
`

const H3 = styled.h3`
    `

const Card = styled.div`
    `

const Container = styled.div`
    display: flex;
`

const LeftCard = styled(Card)`
    `
const RightCard = styled(Card)`
    `

