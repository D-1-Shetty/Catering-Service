import React, { useState } from 'react'

const MenuTabs = ({ menu }) => {
    const [activeMenu, setActiveMenu] = useState(0)
    const renderContent=(content)=>{
        return(
            <div className='p-6 bg-white shadow-lg mt-2 border border-gray-200 rounded-lg '>
                <h1 className='text-2xl font-semibold mb-3 text-orange-500'>{content.title}</h1>
                <p className='text-gray-500 '>{content.description}</p>
            </div>
        )
    }
    return (
        <div className='max-w-[990px] mx-auto '>
            <div className='flex   border-b border-orange-300 '>
                {menu.map((mnu, index) => (

                    <button key={index} className={`py-3 px-6 duration-300 cursor-pointer ${activeMenu===index?"border-b-2 border-orange-500 text-orange-500 bg-gray-700/20 font-extrabold":"font-medium text-gray-500 hover:text-orange-400 hover:bg-gray-700/10"}`} onClick={() => setActiveMenu(index)} >{mnu.label}</button>
                ))
                }
            </div>
                <div className='mt-3 text-2xl'>{renderContent(menu[activeMenu].content )}</div>
        </div>


    )
}

export default MenuTabs
