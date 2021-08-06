import React from 'react'
import styled from 'styled-components'
import Theme from '../../utils/Theme'

export default function Services() {
    return (
        <Wrapper>
            <Stripe>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum!
                        </p>
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
            </Stripe>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    color: ${({ theme }) => theme.primaryTextColor};
    min-height: 100vh;
`

const Stripe = styled.div`
    position: relative;
    width: 70%;
    background-color: #0F0F0F;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H3 = styled.h3`
    margin-bottom: 70px;
`

const Card = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    text-align: center;
`

const Container = styled.div`
    position: relative;
    display: flex;
`

const LeftCard = styled(Card)`
    position: absolute;
    left: -35vw;
    color: ${({ theme }) => theme.secondaryTextColor};
    background-color: #EEEEEE;
`
const RightCard = styled(Card)`
    position: absolute;
    right: -35vw;
    color: ${({ theme }) => theme.secondaryTextColor};
    background-color: #EEEEEE;
`

