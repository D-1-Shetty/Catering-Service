import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='w-full h-80 bg-orange-50 shadow'>
      <img src={banner} alt="" className='w-fit h-80 ml-[500px] ' />

    </div>
  )
}

export default Banner
