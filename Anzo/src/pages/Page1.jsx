import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Page1 = () => {

  const textRef = useRef(null);
  const [Xval, setXval] = useState(0);
  const [Yval, setYval] = useState(0);

  const mouseMoving = (e) => {
  
    setXval((e.clientX - textRef.current.getBoundingClientRect().x - textRef.current.getBoundingClientRect().width/2)/50)
    setYval(-(e.clientY - textRef.current.getBoundingClientRect().y - textRef.current.getBoundingClientRect().height/2)/20)

  };

  useGSAP(()=>{
    gsap.fromTo(textRef.current,{
      transform:`rotateX(${Yval}deg) rotateY(${Xval}deg)`,
      duration:2,
    },{
      transform:'rotateX(0deg) rotateY(0deg)',
      duration:2,
      ease:"elastic.out(1,.5)"
     
    }
  )
  },[Xval,Yval])

  return (
    <div id="page1"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen bg-white text-white p-5"
    >
      <div id="page1-in" className='py-6 px-15 shadow-gray-950 shadow-xl w-full h-full bg-right-bottom bg-cover bg-[url("https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1540,h_950,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg")] rounded-4xl'>
        <svg
          className="h-20 w-20"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0 0 1608 1279"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1608 1279"
          height="1279"
          width="1608"
          data-type="color"
          role="img"
          aria-label="Anzo.Studio Brand Identity and Logo Design"
        >
          <defs>
            <style>{`#comp-kbgakxea_r_comp-lm4t32rf svg [data-color="1"] {fill: #FAFAFA;}`}</style>
          </defs>
          <g>
            <path
              fill="#FAFAFA"
              d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z"
              data-color="1"
            ></path>
            <path
              fill="#FAFAFA"
              d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z"
              data-color="1"
            ></path>
          </g>
        </svg>
        <TiltText ref={textRef}/>
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
