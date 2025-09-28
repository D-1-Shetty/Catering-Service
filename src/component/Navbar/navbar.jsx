import React from 'react'
import logo from '../../assets/logo.png'
import { FaSearch, FaShoppingCart,FaArrowRight } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <div className='h-[100px] w-full bg-[#223040] flex items-center drop-shadow-sm justify-evenly font-serif'>
      <div className='inline'>
        <img src={logo} alt="" className='h-24 w-24 ml-2.5' />
      </div>
      <div className='h-18 w-64 border flex flex-col justify-center items-start p-2 rounded-md shadow text-[var(--primary-color)] bg-[var(--secondary-color)]'>
        <p className='ml-2'>Delivering to Mangalore 574142</p>
        <div className='flex gap-0.5'>
        <FaLocationDot className="text-[var(--primary-color)] text-lg" />
        <h1 className='font-bold'>Update Location</h1>
        </div>
      </div>
      <div className='flex w-[800px]  rounded-md overflow-hidden shadow bg-white'>
        <div className='h-10  w-11  flex justify-center items-center bg-[var(--secondary-color)] text-[#223040] '>
          <FaSearch className='search-icon' />
        </div>
        <input type="text" placeholder='Search for the food' className='flex-1 focus:outline-none px-3 ' />

      </div>
      <div className='border h-10 w-28 flex bg-[var(--secondary-color)] text-[var(--primary-color)] justify-center items-center font-bold rounded-md shadow'>
        <FaShoppingCart size={24} />
        <h2 className='ml-0.5'>Cart</h2>
      </div>
      <div className='flex font-bold h-10 w-28 bg-[var(--secondary-color)] justify-center items-center text-[var(--primary-color)] rounded-md shadow'>
        <h2 className='mr-1'>logout</h2>
        <FaArrowRight/>
      </div>



    </div>
  )
}

export default Navbar
