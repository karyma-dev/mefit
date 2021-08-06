import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <Wrapper>
            <Container>
                <ImageContainer>
                    <Image src='./about.png' alt="about us" />
                </ImageContainer>
                <TextContainer>
                    <H3>About</H3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                </TextContainer>
            </Container>
            <Stripe />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position: relative;
    min-height: 100vh;
`

const Stripe = styled.div`
    position: absolute;
    background-color: #0F0F0F;
    width: 70vw;
    height: 100vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

const Container = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    height: 100vh;
`

const ImageContainer = styled.div`
    flex: 1;
`

const TextContainer = styled.div`
    flex: 1;
    padding: 60px;
    background-color:  white;
    margin-left: -20vw;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

const H3 = styled.h3`
    margin-bottom: 10px;
`