import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pb-24 pt-10 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 fond-semibold '>
        Join our community of learners and start your journey today!
      </h1>
      <p className='text-gray-500 sm:text-sm '>
        Sign up now to access a wide range of courses and resources designed to help you achieve your academic and professional goals.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
        <button className='flex items-center gap-2'>
          Learn more 
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
