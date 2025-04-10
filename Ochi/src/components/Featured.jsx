import { h1, span } from "motion/react-client";
import React from "react";
import Card from "./Card";
import Button from "./Button";

const Featured = () => {
  var data = [{
    text:"Salience Labs",
    img:'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png',
    tags:["Brand Identity","Pitch Deck"],
  },
  {
    text:"Cardboard spaceship",
    img:'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png',
    tags:["Branded Template","Sales Deck","Social Media Templates"],
  },
  {
    text:"Fyde",
    img:'https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png',
    tags:["Audit","Sales Deck","Slides design","Copywriting"],
  },
  {
    text:"Vise",
    img:'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png',
    tags:["Agency","Pitch Deck"],
  },
  {
    text:"Soft Start",
    img:"https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
    tags:["Branded Template","Sales deck"]
  }
];
  return (
    <div className="w-full py-15 select-none">
      <div className="w-full px-15 border-b-[1.5px] border-[#b2b2b2] pb-8">
        <h1 className="text-5xl font-medium tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="card-container px-15  mt-5 gap-9 grid grid-cols-2 justify-between">
        {data.map((item,index)=> <Card key={index} index={index} data={data[index]}/>)}
      </div>
      <div className="px-15 flex justify-center mt-10">
        <Button text={'View all case studies'}/>
      </div>
    </div>
  );
};

export default Featured;
