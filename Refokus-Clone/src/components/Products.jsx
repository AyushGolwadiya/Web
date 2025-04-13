import React, { useState } from 'react'
import Product from './Product'
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bg: 'var(--color-project-1)',
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      bg: 'var(--color-project-2)',
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      bg: 'var(--color-project-3)',
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      bg: 'var(--color-project-4)',
    },
  ];

  
  const [pos,setPos] = useState(0);
  const mover = (val) => {
    setPos(val*30)
  }

  return (
    <div className='mt-32 relative'>
        {products.map((item,index) =>( 
          <Product 
            index={index} 
            key={index} 
            item={item} 
            mover={mover}
            bg={item.bg}
          />
        ))}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div initial={{y:pos}} animate={{y:pos+`vh`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='window absolute w-[27vw] h-[30vh] left-[45%] -translate-x-1/2 overflow-hidden'>
            <motion.div animate={{y:-pos+`vh`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='w-full h-full overflow-hidden'>
              <video src='arqitel-169.webm' className='w-full h-full bg-cover' autoPlay muted loop/>
            </motion.div>
            <motion.div animate={{y:-pos+`vh`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='w-full h-full  overflow-hidden'>
            <video src='ttr-169.webm' className='w-full h-full bg-cover' autoPlay muted loop/>
            </motion.div>
            <motion.div animate={{y:-pos+`vh`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='w-full h-full  overflow-hidden'>
            <video src='yir2021-169.webm' className='w-full h-full bg-cover' autoPlay muted loop/>
            </motion.div>
            <motion.div animate={{y:-pos+`vh`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='w-full h-full  overflow-hidden'>
            <video src='yahoo-169.webm' className='w-full h-full bg-cover' autoPlay muted loop/>
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products