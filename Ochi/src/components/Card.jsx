import { motion } from "motion/react";
import { useState } from "react";
import Power4 from 'gsap';

const Card = ({ data, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative">
      <h1 className="uppercase">
        <span className="inline-block w-2 h-2 bg-black rounded-2xl mx-2"></span>
        {data.text}
      </h1>
      <h1
        className={`absolute overflow-hidden z-50 text-[#cdea68] font-semibold text-8xl leading-none uppercase whitespace-nowrap tracking-tight 
        ${
          index % 2 == 0 &&
          "left-full top-1/2 -translate-x-1/2 -translate-y-1/2"
        } 
        ${
          index % 2 == 1 &&
          "right-full top-1/2 translate-x-1/2 -translate-y-1/2"
        } `}
      >
        {data.text.split("").map((item, index) => (
          <motion.span className="inline-block" initial={{ y: "100%" }} transition={{ease:[0.22,1,.36,1],delay:index*.02}} animate={ hover ? ({y:'0%'}) :({y:"100%"})}>
            {item}
          </motion.span>
        ))}
      </h1>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-[45vw] my-2"
      >
        <img
          className="rounded-xl transition-transform duration-1000 ease-in-out hover:scale-95"
          src={data.img}
          alt="img"
        />
      </div>
      {data.tags?.map((item, index) => (
        <h4
          key={index}
          className="uppercase text-[0.9vw] px-4 py-1 border-1 rounded-full inline-block mx-0.5"
        >
          {item}
        </h4>
      ))}
    </div>
  );
};

export default Card;
