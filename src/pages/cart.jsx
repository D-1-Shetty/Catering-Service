import React from 'react'
import Navbar from '../component/Navbar/navbar.jsx'
const cart = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-20 w-full shadow-md flex justify-between items-center bg-white'>
            <div></div>
        <h1 className='font-bold text-4xl font-serif text-[var(--primary-color)]'>Your Menu</h1>
        <button className='mr-4'>Place order</button>
        </div>
        <div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)] bg-white ml-10'>
                  <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Dish Name</h1>
                  <img src='' alt="img" className='h-58 w-54 flex ml-8 mt-1.5' />
                  <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
                    <p>Quantity:</p>
                    <p className='mt-1.5'>Prize Per Plate:</p>
                  </div>
                  <div className='flex justify-center ml-[-30px] mt-2'>
                    <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[14px] h-10 w-20 rounded-md flex items-center justify-center'>Remove</button>
                </div>
                </div>

      
    </div>
  )
}

export default cart
