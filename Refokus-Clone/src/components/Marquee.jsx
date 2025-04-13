import { motion } from 'motion/react'
import React from 'react'

const Marquee = ({urls,direction}) => {

  return (
    <div className="relative flex overflow-hidden">
      <motion.div 
        initial={{x: direction === 'left' ? 0 : '-100%'}}
        animate={{x: direction === 'left' ? '-100%' : '0%'}}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0 // Ensures no delay between repeats
        }}
        className='flex items-center gap-20 whitespace-nowrap py-8'
      >
        {urls.map((item,index) => (
          <img key={index} className='w-32' src={item} alt=''/>
        ))}
        {urls.map((item,index) => (
          <img key={`clone-${index}`} className='w-32' src={item} alt=''/> // Unique keys for cloned elements
        ))}
      </motion.div>
      <div className='absolute top-5 left-0 w-full h-12 flex justify-between'></div>
    </div>
  )
}

export default Marquee