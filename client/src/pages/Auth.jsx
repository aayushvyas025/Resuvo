import  { Suspense } from 'react'
import AuthForm from '../components/Auth/AuthForm'

function Auth() {
  return (
    <Suspense>
      <div className='w-screen h-screen flex items-center justify-center bg-slate-100'>

      <AuthForm />
      </div>
    </Suspense>
  )
}

export default Auth