import "./index.css";
import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen relative text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} data-scroll data-scroll-speed="-2" />
        ))}
        <div className="w-full h-screen z-[5]">
          {/* Navbar */}
          <div className="navigationbar top-0 flex justify-between items-center px-5 py-2.5 border-b-2  border-gray-400/10">
            <div className="leftpart text-md">
              <a href="#">ThirtySixStudio</a>
            </div>
            <div className="rightpart items-center flex gap-30 font-light text-[1vw] font-[regular]">
              <div className="rightleft flex gap-10">
                <a href="#">What we do</a>
                <a href="#">Who we are</a>
                <a href="#">How we give back</a>
                <a href="#">Talk to us</a>
              </div>
              <div className="rightright icon flex gap-5 items-center text-sm font-[regular]">
                <svg
                  class="off"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.1"
                    cx="15"
                    cy="15"
                    r="14.5"
                    stroke="white"
                  ></circle>
                  <path
                    d="M11.9091 14V15M9 14V15M15 14V15M18.0909 14.0002V15M21 14V15"
                    stroke="white"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <div className="textcontainer w-full px-[20%] py-20 font-[medium] ">
            <div className="text w-[50%]">
              <h3 className="text-3xl font-light leading-[1.3]">
                At thirty six studio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="py-6 text-sm ont-light font-[regular] tracking-wide">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p>Scroll</p>
            </div>
          </div>
          <div className="pt-20 w-full px-5">
            <h1 className="text-[16.5vw] tracking-tight leading-none font-[regular] font-[100] absolute bottom-8 left-8">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen text-white my-30 px-10">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        <h1 className="text-8xl font-bold">About the Studio</h1>
        <p className="w-[80%] text-xl font-light py-5 font-[regular] leading-[1.3] tracking-tight text-justify mb-2">
          We are a boutique production studio focused on design, animation, and
          technology, constantly rethinking what digital craft can do for
          present-day ads and campaigns. We are a team of 100+ creatives,
          designers, and technologists who are passionate about creating
          immersive digital experiences for brands with a purpose.
        </p>
        <img className='w-[80%] object-cover' src="https://cdn.cuberto.com/cb/upload/b73b0d2feb001c8bd719c808c40ce28b.png" alt="" />
      </div>
    </>
  );
};

export default App;
