
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Password = () => {
  const [password, setPassword] = useState('');
 const [created, setCreated] = useState('');
 const [show, setShow] = useState(false);

  const lengthOk = (val: string) => val.length >= 8;
  const hasUpper = (val: string) => [...val].some(char => char >= 'A' && char <= 'Z');
  const hasLower = (val: string) => [...val].some(char => char >= 'a' && char <= 'z');
  const hasDig = (val: string) => [...val].some(char => char >= '0' && char <= '9');
  const hasSpecial = (val: string) => [...val].some(char => 
    !(char >= 'A' && char <= 'Z') &&
    !(char >= 'a' && char <= 'z') &&
    !(char >= '0' && char <= '9') 
  );

  const rules = [
    {text: 'At Least 8 chars', check: lengthOk},
    {text: 'Has upper', check: hasUpper},
    {text: 'Haslower', check: hasLower},
    {text: 'Has digit', check: hasDig},
    {text: 'Special chars', check: hasSpecial},
  ]
  return (
    <div className='min-h-screen flex justify-center items-center'>

    <div className='border p-6'>
        <h1 className='font-bold text-lg text-center mb-2'>Create Password</h1>
        <p className='text-gray-400 text-center mb-6'>Enter a secure password</p>
        <div className='relative'>
        <input type={show ? 'text' : "password"} className='rounded px-6 w-66 border border-black font-extralight' onChange={(e) => setPassword(e.target.value)} placeholder='Write password'/>
        <button className='absolute right-20 top-0.5' onClick={() => setShow(!show)}>
            {show ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        <h2 className='mb-3'>Password Requirements</h2>
        <div>
           {rules.map((rule, index )=> (
            <div className='flex gap-3 text-gray-400' key={index}>
              <input type="checkbox" className='' checked={rule.check(password)}/>
              <span>{rule.text}</span>
            </div>
           ))} 
        </div>
    </div>
    </div>
  )
}

export default Password