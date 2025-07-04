import './style.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
});

lenis.on('scroll',(e)=>{
    console.log(e)
})

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf); 
}

raf();


var text = document.querySelector('.para');
var clutter = ''
text.innerHTML.split('').forEach((e) => {
    clutter+= `<span>${e}</span>`
})
text.innerHTML = clutter;

document.querySelectorAll('.elem').forEach((elem)=>{
    let image = elem.querySelector('img');
    let tl = gsap.timeline();
    let xTransform = gsap.utils.random(-100,100);

    tl.
    set(image,{
        transformOrigin:`${xTransform < 0 ? 0 : '100%'}`
    },"start")
    .to(image,{
        scale:0,
        duration:1,
        ease:'none',
        scrollTrigger:{
            trigger:image,
            start:"top top",
            end:"bottom top",
            scrub:true,
        }
    },"start")
    .to(elem,{
        xPercent:-Math.abs(xTransform),
        ease:"power4.inOut",
        scrollTrigger:{
            trigger:image,
            start:"top 30%",
            end:"bottom top",
            scrub:true,
        }
    },"start")
})
