import React from 'react'
import styled from 'styled-components'
import { getServerSideProps } from '../../pages/calculate'

export default function Button(props) {
    return (
        <Wrapper>{props.text}</Wrapper>
    )
}

const Wrapper = styled.a`
    position: relative;
    display: inline-block;
    background: linear-gradient(90deg, rgba(52,52,52,1) 0%, rgba(106,106,106,1) 100%);
    padding: 5px 20px;
    border-radius: 7px;
    font-weight: 400;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;

    &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(40,40,40,1) 0%, rgba(90,90,90,1) 100%);
        z-index: -1;
        border-radius: 7px;
        transition: 0.1s;
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`