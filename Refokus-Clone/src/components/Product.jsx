import React from "react";
import Button from "./Button";

const Product = ({item,mover,index,bg}) => {
  return (
    <div 
      className={`w-full h-[30vh] py-15 text-white border-zinc-50 transition-colors duration-300 hover:bg-[var(--hover-bg)]`}
      style={{ '--hover-bg': bg }}
      onMouseEnter={() => mover(index)}
    >
      <div className={`max-w-screen-xl mx-auto flex items-center justify-between`}>
        <h1 className="text-6xl capitalize font-semibold">{item.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-8">
            {item.description}
          </p>
          <div className="flex gap-3 items-center">
          {item.live && <Button title="Live Website"/>}
          {item.case && <Button title="Case Study"/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
