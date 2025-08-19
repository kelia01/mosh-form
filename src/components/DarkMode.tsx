import React from 'react'
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkMode = () => {
    
    

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });
  useEffect(() => {
      localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode])
  const toggleTheme = () => {
      setDarkMode(prev => !prev);
  }
  
  return (
      <>
      <div className = {`relative flex justify-center items-center h-screen w-screen ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <button onClick={toggleTheme} className="absolute top-3.5 right-7 bg-blue-300 rounded-4xl p-2.5">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <p className={`text-4xl text-center ${darkMode ? 'text-white' : 'text-black'}`}>{darkMode ? 'Kelia' : 'Ruth'}</p>
      </div>
    </>
  )
}
  export default DarkMode

