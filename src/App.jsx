import { useState } from 'react'
import './App.css'
import Form from './components/Form';

function App() {

  return (
    <div className='flex w-full h-screen'>

      {/* The form here */}
        <div className='w-full flex items-center justify-center lg:w-1/2'>
          <Form />
        </div>

        {/* Ride side animation  */}
        <div className='bg-gray-200 hidden lg:flex h-full items-center justify-center w-1/2 relative'>
          <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce' />  {/* For the circle */}
          <div className='w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0' />                      {/* Blur effect */}
        </div>

    </div>
  )
}

export default App;