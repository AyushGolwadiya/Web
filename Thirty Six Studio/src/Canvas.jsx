import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import canvasImages from "./canvasImages";
import gsap from "gsap";

const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasref = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasref.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      className="absolute"
      style={{
        width: `${size * 1.2}px`,
        height: `${size * 1.2}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      ref={canvasref}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
