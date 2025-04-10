import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div className="w-full bg-[#004d43] py-10 text-white rounded-t-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:9,repeat:Infinity}} className="text-[22vw] uppercase leading-none font-[ochi2] -tracking-tighter -mt-15 -mb-7 pr-10">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:9,repeat:Infinity}} className="text-[22vw] uppercase leading-none font-[ochi2] -tracking-tighter -mt-15 -mb-7 pr-10">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",duration:9,repeat:Infinity}} className="text-[22vw] uppercase leading-none font-[ochi2] -tracking-tighter -mt-15 -mb-7 pr-10">
          We are Ochi
        </motion.h1>  
      </div>
    </div>
  );
};

export default Marquee;
