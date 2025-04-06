"use client"

import React from 'react'
import SignUpForm from './signup'
import LoginForm from './login'

export default function AuthPage({ authMode }: { authMode: any }) {
    return (
        <>
            {authMode === "login" ? <LoginForm /> : <SignUpForm />}
        </>
    )
}
