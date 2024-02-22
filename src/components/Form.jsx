import React from 'react'

function Form() {
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>

        {/* Heading  */}
        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
        <p className='text-lg font-medium text-gray-500 mt-4'>Welcome Back! Please enter your details.</p>

        {/* input  */}

        <div className='mt-8'>
            <div>
                <label className="text-lg font-medium" htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email' className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'/>
            </div>
            <div>
                <label className="text-lg font-medium" htmlFor="">Password</label>
                <input type="password" placeholder='Enter your password' className='w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'/>
            </div>
            <div className='mt-8 flex flex-row justify-between items-center'>
                <div>
                    <input type="checkbox" id='remember'/>
                    <label htmlFor="remember" className='ml-2 font-medium text-base'>Remember me</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forget password?</button>
            </div>
            <div className='mt-8 flex justify-center'> 
                <button className='bg-violet-500 text-white rounded-lg w-full text-lg font-bold py-3 active:scale-[.98] hover:scale-[1.02] ease-in-out transition-all duration-300 cursor-pointer'>Sign in</button>
            </div>
        </div>
    </div>
    )
}

export default Form;