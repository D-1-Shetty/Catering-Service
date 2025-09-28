import React from 'react'
import Starters from '../assets/starters.png'
import Navbar from '../component/Navbar/navbar'

const home = () => {
  return (
    <div>
      <Navbar/>

      <div className='h-20 w-full shadow-md flex justify-center items-center bg-white'>
      <h1 className='font-bold text-4xl font-serif'>Our Menu</h1>
      </div>
      <div className='w-full h-10 shadow text-black font-bold'>
        <ul className='flex items-center justify-evenly pt-1.5 '>
          <li><a href='#'>Starters & Snacks</a></li>
          <li><a href='#'>Main Course</a> </li>
          <li><a href='#'>Rice & Breads </a> </li>
          <li><a href='#'>Beverages</a> </li>
          <li><a href='#'>Desserts</a> </li>
          <li><a href='#'>Special Combos / Packages</a> </li>
        </ul>
      </div>
      <h1 className='text-xl font-bold ml-15 mt-7'>Popular Dishes</h1>

      <div className='h-83 w-64 shadow-md ml-15 mt-6 bg-white flex justify-center items-center flex-col rounded-lg'>
        <h1 className='mb-3 text-2xl font-bold font-serif'>Dish name</h1>
        
      </div>
    </div>
  )
}

export default home
