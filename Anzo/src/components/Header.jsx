import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-16  flex items-center justify-end'>
        <button className='bg-black text-white px-4 py-2 rounded-full font-[anzo1] border-2 border-[#bcbcbc]'>Hire Me</button>
        <i className='ri-more-2-fill text-gray-400 ml-1 text-2xl'></i>
    </div>
  )
}

export default Header