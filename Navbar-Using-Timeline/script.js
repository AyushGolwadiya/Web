
var menu = document.querySelector('#menu');
var close = document.querySelector('#close');
var tl = gsap.timeline()

tl.to('#full',{
    right:0,
    duration:2,

})

tl.from('#full h4',{
    x:80,
    opacity:0,
    duration:1,
    stagger:.2,
})

tl.from('#full i',{
    x:80,
    opacity:0,
    duration:1,
}) 
tl.pause();

menu.addEventListener('click',()=>{
    tl.play();
})

close.addEventListener('click',()=>{
    tl.reverse();
})

