var locoScroll = () =>{ 
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

var page1 = () => {
    var tl = gsap.timeline();

    tl.from('#container',{
        x:50,
        y:50,
        scale:0.2,
        duration:1.5,
    })

    tl.from("#container h1,h2",{
        y:-30,
        duration:1,
        opacity:0,
    })

    tl.from('nav',{
        y:-10,
        opacity:0,
        duration:1,
        ease:"power4.inout",
    })
}

var textSplitting = () =>{
    var allH1 = document.querySelectorAll('#page2 h1')

    allH1.forEach((elem) => {
        var clutter = ""
        var h1Text = elem.textContent ;
        var splittedText = h1Text.split('');
        splittedText.forEach((e) =>{
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter
    })
}

var gsapAnimation = () =>{ 
    gsap.to("#page2 h1 span",{
        color:"#e3e3c4",
        duration:3,
        stagger:.3,
        scrollTrigger:{
            trigger:"#page2 h1",
            scroller:"#main ",
            markers:false,
            start:"top 50%",
            end:"top -10%",
            scrub:2,
        }  
    })
}

locoScroll();
page1()
textSplitting()
gsapAnimation()




