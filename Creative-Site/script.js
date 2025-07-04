Shery.mouseFollower();

Shery.makeMagnet('.navlink')
// locomotive scroll - smooth scrolling
const scroll =  new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true,
})
gsap.registerPlugin(ScrollTrigger);
// gsap to animate
gsap.from('.navlink',{
    y:10,
    duration:1,
    stagger:0.2,
    ease:Power3,
    opacity:0,
})

gsap.from('.anim2',{
    x:100,
    opacity:0,
    duration:3,
    ease:Power2,
    stagger:.5,
})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style:1,
    y: 10,
    delay: 0.1,
    duration: 2,
    stagger:1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.makeMagnet('.magnet');


let vid = document.querySelector('#future video');
console.log(vid)

let divv = document.querySelector('#ftext');
let button = document.querySelector('#ftext button')

button.addEventListener('mouseenter',()=>{
    gsap.to(vid,{
        opacity:1,
    })
    gsap.to(divv,{
        opacity:0,
    })
})

button.addEventListener('mouseleave',() =>{
    gsap.to(vid,{
        opacity:0,
    })
    gsap.to(divv,{
        opacity:1,
    })
})
