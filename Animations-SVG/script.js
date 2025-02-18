var intialPath = `M 10 150 Q 760 150 1500 150` ;

var finalPath = `M 10 150 Q 760 150 1500 150`;

var str = document.querySelector("#string")

str.addEventListener( "mousemove", (dets)=>{
    intialPath = `M 10 150 Q ${dets.x} ${dets.y} 1500 150`
    gsap.to("svg path",{
        ease:"power3.out",
        attr:{
            d:intialPath,
        }
    })
});

str.addEventListener( "mouseleave", ()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
});