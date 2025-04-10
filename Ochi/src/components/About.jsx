import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="w-full bg-[#CDEA68] py-20 px-15">
        <h1 className="font-[ochi4] text-[3vw] w-[70%] leading-11">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>
      </div>
      <div className="flex justify-between w-full border-t-[2px] px-15 py-5 pb-20 border-[#879c38] bg-[#cdea68]">
        <div className="w-1/2">
          <h5>What you can expect:</h5>
        </div>
        <div className="w-1/2 flex justify-between">
          <h5 className="w-1/3">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants. We believe the mix of strategy and design (with a bit
            of coffee) is what makes your message clear, convincing, and
            captivating.
          </h5>
          <div className="py-5 pr-50 flex flex-col justify-end">
            <h5 className="mb-5">S:</h5>
            <h5>Instagram</h5>
            <h5>Dribble</h5>
            <h5>Behance</h5>
            <h5>Facebook</h5>
          </div>

        </div>
      </div>
      <div className="flex w-full justify-between border-t-[2px] px-15 py-5 border-[#879c38] bg-[#cdea68]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach :</h1>
          <Button text={'Read more'}/>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="design image"
          />
        </div>
      </div>
    </>
  );
};

export default About;
