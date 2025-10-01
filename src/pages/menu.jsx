import React from 'react'
import Starters from '../assets/starters.png'
import Navbar from '../component/Navbar/navbar'
import MenuTabs from '../component/MenuTabs/menuTabs'

const home = () => {
  const menu=[
    {
      label:'Starters & Snacks',
      content:{
        title:'Starters & Snacks',
        description:'welcome to starters and snacks page'

      }
    },
      {
        
        label:'Main Course',
        content:{
          title:'Main Course',
          description:'welcome to main course page'
        }
      },
      {
        label:'Rice & Breads',
        content:{
          title:'Rice & Breads',
          description:'welcome to rice and breads page'
        }
      },
      {
        label:'Beverages',
        content:{
          title:'Beverages',
          description:'welcome to beverages page'
        }
      },
      {
        label:'Desserts',
        content:{
          title:'Desserts',
          description:'welcome to desserts page'
        }
      },
      {
        label:'Special Combos / Packages',
        content:{
          title:'Special Combos / Packages',
          description:'Welcome to Our combos page '
        
      }
    }
  ]
  return (
    <div>
      <Navbar/>

      <div className='h-20 w-full shadow-md flex justify-center items-center bg-white'>
      <h1 className='font-bold text-4xl font-serif'>Our Menu</h1>
      </div>
      <div>
        <MenuTabs menu={menu}/>
       
      </div>
      
        
      </div>
    
  )
}

export default home
