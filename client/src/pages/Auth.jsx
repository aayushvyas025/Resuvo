import  { Suspense } from 'react'
import AuthForm from '../components/Auth/AuthForm'

function Auth() {
  return (
    <Suspense>
      <main className='w-screen h-screen flex items-center justify-center bg-slate-100'>

      <AuthForm />
      </main>
    </Suspense>
  )
}

export default Auth