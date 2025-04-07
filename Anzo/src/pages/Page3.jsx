import React from "react";
import video from '../assets/videos/file.mp4'

const Page3 = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
        <img className="z-20 absolute h-[72vh] w-[68vw]" src="/src/assets/videos/try.png" alt="" />
        <video autoPlay muted loop className="z-10 h-[59vh] w-[51vw] object-cover" src="/src/assets/videos/file.mp4"></video>
        <div className="h-0.5 w-3/5 z-0 bg-gray-600 absolute top-[45%]"></div>
        <div className="h-0.5 w-4/5 z-0 bg-gray-600 absolute top-[60%]"></div>
        <div className="w-8/6 z-0 h-0.5 left-3 bg-gray-600 absolute top-[75%]"></div>
    </div>
  );
};

export default Page3;
