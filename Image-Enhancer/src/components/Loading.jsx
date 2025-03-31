import React from 'react'
import {motion} from 'motion/react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <motion.div animate={{rotate:360}} transition={{duration:2,repeat:Infinity,ease:'linear'}} className='border-4 rounded-full w-10 h-10 border-gray-300 border-t-4 border-t-gray-600'></motion.div>
    </div>
  )
}

export default Loading