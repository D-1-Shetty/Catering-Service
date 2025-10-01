import React from 'react'
import Starters from '../assets/starters.png'
import Navbar from '../component/Navbar/navbar'
import MenuTabs from '../component/MenuTabs/menuTabs'
import Main_Course from '../assets/main_course.png'
import Rice from '../assets/rice.png'
import Beverage from '../assets/beverage.png'
const Menu = () => {
  const menu = [
    {
      label: 'Starters & Snacks',
      content: {
        title: 'Starters & Snacks',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Starters} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)


      }
    },
    {

      label: 'Main Course',
      content: {
        title: 'Main Course',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Main_Course} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)
      }
    },
    {
      label: 'Rice & Breads',
      content: {
        title: 'Rice & Breads',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Rice} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)
      }
    },
    {
      label: 'Beverages',
      content: {
        title: 'Beverages',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Beverage} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)
      }
    },
    {
      label: 'Desserts',
      content: {
        title: 'Desserts',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Starters} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)
      }
    },
    {
      label: 'Special Combos / Packages',
      content: {
        title: 'Special Combos / Packages',
        description: (<div className='w-70 h-95 shadow-[0_8px_8px_rgba(0,0,0,0.3)]'>
          <h1 className='text-[20px] font-semibold text-[var(--primary-color)] mt-10 flex justify-center'>Starter Name</h1>
          <img src={Starters} alt="" className='h-58 w-54 flex ml-8 mt-1.5' />
          <div className='text-[14px] ml-7.5 mt-3 font-semibold text-[var(--primary-colo)] '>
            <p>Quantity:</p>
            <p className='mt-1.5'>Prize Per Plate:</p>
          </div>
          <div className='flex justify-center ml-[-30px] mt-2'>
            <button className='bg-[var(--secondary-color)] cursor-pointer hover:bg-amber-500 hover:text-[var(--primary-color)] hover:font-extrabold text-white font-semibold ml-7.5 text-[12px] h-10 w-20 rounded-md flex items-center justify-center'>Add to Cart</button>
        </div>
        </div>)

      }
    }
  ]
  return (
    <div>
      <Navbar />

      <div className='h-20 w-full shadow-md flex justify-center items-center bg-white'>
        <h1 className='font-bold text-4xl font-serif text-[var(--primary-color)]'>Our Menu</h1>
      </div>
      <div>
        <MenuTabs menu={menu} />

      </div>


    </div>

  )
}

export default Menu
