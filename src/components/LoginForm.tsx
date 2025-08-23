
import { useState } from "react"

const LoginForm = () => {
  const [show, setShow] = useState(false)
   const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password.length < 6) return
    console.log({email, password})
  }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col space-y-4 w-80'>
          <label htmlFor="email">Email</label>
            <input 
          id="email"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          className="text-center border border-gray-300 rounded"
          required
        />
           <label htmlFor="password">Password</label>
        <input 
          id="password"
          type={show ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
          className="text-center border border-gray-300 rounded"
          required
        />
        {password.length > 0 && password.length < 6 && (
          <p className="text-red-500 text-sm">Password must be at least 6 characters</p>
        )}
            <button className="p-1.5 border rounded bg-amber-500" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'} password</button>
            
        </div>
    </form>
  )
}

export default LoginForm