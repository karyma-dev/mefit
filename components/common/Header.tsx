import React from 'react'
import AuthButton from './AuthButton'

export default function Header() {
  return (
    <div>
      <span>meFit</span>
      <AuthButton link="/api/auth/logout" primary>
        Logout
      </AuthButton>
    </div>
  )
}
