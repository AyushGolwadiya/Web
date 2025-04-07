import { useGSAP } from '@gsap/react';
import React from 'react'; 
import gsap from 'gsap';

const Page1Bottom = () => {

  useGSAP(() => {
    gsap.to('#img', {
      rotate: "+360",
      duration: 5, // Set a duration to control speed
      repeat: -1, // Infinite loop
      ease: 'none' // Use 'linear' to keep a constant speed
    });
  });
  


  return (
    <div className='absolute p-22 flex justify-between items-end left-0 bottom-0 w-full'>
        <div>
            <h2 className='text-2xl font-light uppercase leading-6'>Brand design | Website Design</h2>
            <h3 className='font-light uppercase text-gray-400'>Bespoke Freelance</h3>
        </div>
        <div>
            <img id='img' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom