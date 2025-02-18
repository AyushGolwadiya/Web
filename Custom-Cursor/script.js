var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main");
var container = document.querySelector("#container");

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:.8,
        ease:"back.out"
    })
    // This can also work but we want to do it with the help of the gsap
    // cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

})

container.addEventListener("mouseenter", (dets) => {
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffff5c",
    })
})

container.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1, 
        backgroundColor:"#ffffff",  
    });
})

