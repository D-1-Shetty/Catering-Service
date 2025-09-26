import React from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'


const Navbar = () => {
  return (
    <div className='h-[100px] w-full bg-white flex items-center drop-shadow-lg justify-around'>
      <div className='inline'>
      <img src={logo} alt="" className='h-24 w-24 ml-24'/>
      </div>
      <div>
      
      <input type="text" placeholder='Search for the food' className='border-1 w-[800px] h-10 rounded-md'/>
      <i className="fa-solid fa-magnifying-glass text-2xl text-orange-500"></i>

      </div>
        
        
        
     </div>
  )
}

export default Navbar
