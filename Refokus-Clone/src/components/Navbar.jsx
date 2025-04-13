import React from "react";
import Button from './Button'
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div 
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }}
      className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-1 border-zinc-700"
    >
      <motion.div 
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className="nleft flex items-center"
      >
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="refokus-logo"/>
          <div className="links flex gap-14 ml-20">
          {["Home","Work","Culture","","News"].map((elem,index) =>(
            elem.length === 0 ? <span key={index} className="w-[0.5px] rounded-2xl h-5 bg-zinc-300"></span> : (
              <motion.a 
                key={index}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}} 
                transition={{duration: 0.3, delay: 0.1 * index}}
                className="font-medium text-sm flex items-center gap-1" 
                href="#"
              >
                {index === 1 && <span style={{boxShadow:"0 0 0.25em #00ff19"}} className="inline-block w-1 h-1 bg-green-400 rounded-full"></span> }
                {elem}
              </motion.a>
            )
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.5}}
      >
        <Button text={'Get Started'}/>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
