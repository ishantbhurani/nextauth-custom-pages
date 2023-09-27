'use client'

import { Button } from '@/components/ui/button'
import { signIn, signOut } from 'next-auth/react'

export function LoginButton() {
  return <Button onClick={() => signIn()}>Sign In</Button>
}

export function LogoutButton() {
  return (
    <Button variant='destructive' onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}
