import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col gap-4 p-4'>
            <input type="email" placeholder='Enter ur email'/>
            <input type="password" placeholder='Enter password'/>
        </div>
    </div>
  )
}

export default LoginForm