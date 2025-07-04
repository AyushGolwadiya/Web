import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const loadingAnimation = () => {
  var tl = gsap.timeline();
  tl.from('.line h1', {
      y: 150,
      stagger: 0.25,
      // opacity:0, 
      duration: 0.6,
      delay: 0.5
  })

  tl.from("#line1-part1", {
      opacity: 0,
      onStart: () => {
          var h5 = document.querySelector('#line1-part1 h5')
          var grow = 0;
          setInterval(() => {
              if (grow < 100) {
                  h5.innerHTML = grow++;
              }
              else {
                  h5.innerHTML = grow;
              }
          }, 35)
      }
  })

  tl.to(".line h2", {
      animationName: "anime",
      opacity: 1,
  })

  tl.to('#loader', {
      opacity: 0,
      duration: 0.5,
      delay: 4,
  })

  tl.from('#page1', {
      delay: 0.2,
      y: 1600,
      opacity: 0,
      duration: .5,
      ease: "Power4",
  })

  tl.to("#loader", {
      display: "none",
  })
}

const magneticElement = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((item) => {
      let timeout;
  
      item.addEventListener("mousemove", (e) => {
        clearTimeout(timeout);
  
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
  
        // GSAP animation
        gsap.to(item, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power3.out",
        });
  
        // Reset after delay
        timeout = setTimeout(() => {
          gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }, 300); // 300ms of inactivity
      });
  
      item.addEventListener("mouseleave", () => {
        // Immediately reset when mouse leaves
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    });
};
  

magneticElement('#magnet');

loadingAnimation();

document.addEventListener('mousemove',(e)=>{
    gsap.to('#crsr',{
        x:e.x,
        y:e.y,
        duration:1,
        ease:'expo'
    })
})






