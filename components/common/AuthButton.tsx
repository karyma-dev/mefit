import React from 'react'
import styled from 'styled-components'

export default function AuthButton({ link, primary, margin, children }: Props) {
  return (
    <Button href={link} primary={primary} margin={margin}>
      {children}
    </Button>
  )
}

interface Props {
  link: string
  primary?: boolean
  margin?: string
  children: string
}

const Button = styled.a`
  display: inline-block;
  background-color: ${(props) => (props.primary ? '#AB1139' : null)};
  color: white;
  text-decoration: none;
  border: ${(props) =>
    props.primary ? '1px solid #AB1139' : '1px solid white'};
  padding: 5px 30px;
  font-weight: 400;
  border-radius: 5px;
  margin: ${(props) => (props.margin ? props.margin : null)};

  :hover {
    background-color: ${(props) => (props.primary ? null : '#AB1139')};
    border: ${(props) => (props.primary ? null : '1px solid #AB1139')};
  }
`
