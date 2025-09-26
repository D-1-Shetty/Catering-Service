import React from 'react'
import logo from '../../assets/logo.png'
import { FaSearch, FaShoppingCart,FaArrowRight } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='h-[100px] w-full bg-white flex items-center drop-shadow-sm justify-around'>
      <div className='inline'>
        <img src={logo} alt="" className='h-24 w-24 ml-24' />
      </div>
      <div className='flex w-[800px]  rounded-md overflow-hidden shadow '>
        <div className='h-10  w-11  flex justify-center items-center bg-[#ff914c] text-white '>
          <FaSearch className='search-icon' />
        </div>
        <input type="text" placeholder='Search for the food' className='flex-1 focus:outline-none px-3' />

      </div>
      <div className='border h-10 w-28 flex bg-[#ff914c] text-white justify-center items-center font-bold rounded-md shadow'>
        <FaShoppingCart size={24} />
        <h2 className='ml-0.5'>Cart</h2>
      </div>
      <div className='flex font-bold h-10 w-28 bg-[#ff914c] justify-center items-center text-white rounded-md shadow'>
        <h2 className='mr-1'>logout</h2>
        <FaArrowRight/>
      </div>



    </div>
  )
}

export default Navbar
