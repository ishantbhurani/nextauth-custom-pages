import Link from 'next/link'
import RegisterForm from './form'

export default function RegistePage() {
  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      <div className='sm:bg-white sm:shadow-xl rounded-xl px-8 pb-8 pt-12 space-y-12'>
        <h1 className='font-semibold capitalize text-2xl'>
          Create your account
        </h1>
        <RegisterForm />
        <p className='text-center'>
          Have an account?{' '}
          <Link
            href='/login'
            className='text-primary hover:underline focus:underline outline-none'
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
