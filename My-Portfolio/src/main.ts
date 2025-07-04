import gsap from "gsap";

const bar = document.querySelector(".loading-bar-inner") as HTMLElement;
const counter = document.querySelector(
  ".loading-counter-number"
) as HTMLElement;
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  counter.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(barInterval);
    gsap.to(".loading-bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });

    gsap.to(".loading-text , .loading-counter", {
      duration: .5,
      opacity:0,
    });

    gsap.to(".loading-box",{
        duration:2,
        height:'500px',
        borderRadius:'50%',
    })

    gsap.to('.loading-svg',{
        duration:10,
        opacity:1,
        rotate:"360deg"
    })

    gsap.to(".loading-box",{
        delay:2,
        border:"none",
    })

    gsap.to(".loading",{
        delay:2,
        duration:2,
        // zIndex:1,
        background:"transparent",
        opacity:0.5,
    })
  }
}, 50);

