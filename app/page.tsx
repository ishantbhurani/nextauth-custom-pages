import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className='p-4 space-x-2 space-y-2'>
      <LoginButton />
      <LogoutButton />
      <div>Hello, {session?.user?.name}</div>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
