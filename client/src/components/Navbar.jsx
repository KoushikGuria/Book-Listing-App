import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'>
        <div className='flex items-center gap-2'>
            <img className='w-15 sm:w-18' src={assets.books_icon} alt="" />
            <span className='text-xl font-semibold dark:text-black'>Books.io</span>
        </div>
        
        </Link>
        <button className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>
            Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar;