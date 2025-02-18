const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener("mousemove",(dets)=>{
    gsap.fromTo("#mincircle",{
        x:dets.x,
        y:dets.y,
        scale:1.2,
        duration:.3,
        opacity:0.8,
        ease:"back.out",
    },{
        x:dets.x,
        y:dets.y,
        duration:.3,
        scale:1,
        opacity:1,
        ease:"back.out",
    })
})

function firstPageAnimation() {
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .6,
        })
}

firstPageAnimation()

document.querySelectorAll(".elem").forEach((elem)=>{
    var rotate  = 0 ;
    var diffrot = 0;
    elem.addEventListener("mouseleave",(dets)=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:.5,
        })
    })
    elem.addEventListener("mousemove",(dets)=>{
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*.5),
        })
    })
})