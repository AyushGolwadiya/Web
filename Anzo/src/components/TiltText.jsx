import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.ref} className="mt-35">
    <h1 className="text-6xl pl-5 pt-5 uppercase font-[anzo3] font-extrabold leading-15 -tracking-tight">
      I am <span className="text-black font-extrabold">Darkmode</span>
      <sup>tm</sup>
      <br />
      <span className="text-8xl font-light">Designer</span>
      <br /> to hire
    </h1>
  </div>
  );
};

export default TiltText;
