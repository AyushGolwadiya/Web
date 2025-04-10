import { motion } from "motion/react";
import React from "react";
import "remixicon/fonts/remixicon.css";

const Landing = () => {
  
  return (
    <div className="w-full h-screen">
      <div className="textstructure pt-45 px-15">
        {["We create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker font-[ochi1] font-semibold">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.5}} className="w-[8vw] h-[5.65vw] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] relative top-[0.5vw] mr-2 rounded-xl"></motion.div>
                )}
                <h1 className="uppercase text-[9vw] tracking-wide leading-[6.5vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-1 border-[#b2b2b2] mt-25  flex justify-between items-center px-14 py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1vw] font-light tracking-normal">{item}</p>
        ))}
        <div className="flex gap-1 items-center">
          <button className="border-1 border-[#b2b2b2] text-[.9vw] px-3 py-2 rounded-3xl uppercase">
            Start the project
          </button>
          <div className="border-1 border-[#b2b2b2] text-[1.2vw] p-[0] w-9 h-9 flex items-center justify-center rounded-[50%]">
            <i class="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
