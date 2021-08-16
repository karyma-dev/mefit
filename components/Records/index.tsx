import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Header from '../common/Header'

export default function Records() {
    const { user, error, isLoading } = useUser()

    console.log(user)
    return (
        <>
            <Header position="static" />
        </>
    )
}