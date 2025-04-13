import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className={`w-fit px-4 py-2 bg-zinc-200 rounded-full text-black gap-5 flex items-center justify-between`}>
      <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
};

export default Button;
