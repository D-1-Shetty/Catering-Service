import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const login = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-orange-400 via-orange-200 to-orange-400 flex justify-center items-center'>
            <div className='h-[600px] w-[450px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.5)] rounded-lg '>
                <div className='flex justify-center items-center mt-4'>
                    <h1 className='font-bold font-serif text-3xl text-orange-600 mt-10 '>Welcome To Web Kitchen</h1>
                </div>
                
                    <div className='mt-14 h-10 w-95  ml-8.5 flex justify-center items-center shadow'>
                        <label className='ml-0.5'>Name:</label>
                        <input type='text' placeholder='Enter your name' className=' ml-2 w-3xs text-[14px] opacity-50' />
                    </div>
                    <div className='mt-10 h-10 w-95 ml-8.5 flex justify-center items-center shadow'>
                        <label>Email:</label>
                        <input type="email" placeholder='Enter your e-mail' className=' ml-2 w-3xs text-[14px] opacity-50' />
                    </div>
                    <div className='mt-10 h-10 w-95 ml-8.5 flex justify-center items-center shadow'>
                        <label className='ml-6'>Password:</label>
                        <input type="password" placeholder='Enter password' className='ml-2 w-3xs text-[14px] opacity-50' />
                    </div>
                    <div className='mt-10 flex justify-evenly'>
                        <div className='flex text-orange-600 ml-4'>
                        <input type="checkbox" />
                        <h1 className='ml-1.5 font-bold'>Remember me</h1>
                        </div>
                    <a href='#' className='ml-16 text-orange-600 font-bold'>Forgot Password?</a>
                    </div>
                <div className='flex justify-center items-center'>
                    <button className='font-extrabold bg-orange-400 text-white h-10 w-30 rounded-md flex justify-center items-center gap-0.5 mt-12'>Login
                        <FaArrowRight size={20} color='white' />
                    </button>
                </div>
                <div className='flex mt-7 ml-14'>
                    <h1 className='opacity-50'>Don't have an account?</h1>
                    <a href='#' className='font-bold text-orange-600'>Create</a>
                </div>

            </div>

        </div>
    )
}

export default login
