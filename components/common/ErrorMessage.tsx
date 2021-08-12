import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export default function ErrorMessage({ message, resetMessage }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() => {
            resetMessage()
        }, 5000);
        return () => clearTimeout(timer);
    }, [message])

    if (visible) {
        return (
            <Container animate={{ y: -100, opacity: 0.5 }} transition={{ delay: 3, duration: 2 }}>
                <Message>
                    {message}
                </Message>
            </Container>
        )
    } else {
        return null
    }
}

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #E53935;
    text-align: center;
    padding: 1rem;
`

const Message = styled.h3`
    font-size: 1rem;
`