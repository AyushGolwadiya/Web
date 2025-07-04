import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');


const frames = 
{
    currentIndex:0,
    maxIndex:1345,
}

let imgsloaded = 0;
const images = [];
const preloadImages = () => {
    for ( var i= 1 ; i <= frames.maxIndex ; i++){
        const imgUrl = `/src/assets/huui/frame_${i.toString().padStart(4,'0')}.jpeg`;
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            imgsloaded++;
            if ( imgsloaded === frames.maxIndex){
                console.log('all loaded');
                
                loadImage(frames.currentIndex);
                handleScroll();
            }
        }
        images.push(img);
    }
    console.log(images);
    
}

const loadImage = ( index ) => {
    if ( index >= 0 && index <= frames.maxIndex){
        const img = images[index];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width ;
        const scaleY = canvas.height / img.height ;
        const scale = Math.max(scaleX,scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth ) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0,0,canvas.width,canvas.height);
        context.imageSmoothingQuality = 'high';
        context.imageSmoothingEnabled = true;
        context.drawImage(img,offsetX,offsetY,newWidth,newHeight);

        frames.currentIndex = index;
    }
}

const handleScroll = () => {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.parent',
            start:'top top',
            end:'bottom',
            scrub:2,
        }
    })

    const updateFrame = (index) =>{
        return {
        currentIndex:index,
        ease:'none',
        onUpdate:() =>{
            loadImage(Math.floor(frames.currentIndex))
        }
        }
    }

    tl
        .to(frames,updateFrame(50),"first")
        .to(".animate1",{opacity:0,ease:'none'},"first")

        .to(frames,updateFrame(80),"second")
        .to(".animate2",{opacity:1,ease:'none'},"second")

        .to(frames,updateFrame(110),"third")
        .to(".animate2",{opacity:1,ease:"none"},"third")

        .to(frames,updateFrame(140),"fourth")
        .to(".animate2",{opacity:0,ease:"none"},"fourth")

        .to(frames,updateFrame(170),"fifth")
        .to(".animate3",{opacity:1,ease:"none"},"fifth")

        .to(frames,updateFrame(200),"sixth")
        .to(".animate3",{opacity:1,ease:"none"},"sixth")

        .to(frames,updateFrame(230),"seventh")
        .to(".animate3",{opacity:0,ease:"none"},"seventh")

        .to(frames,updateFrame(260),"eighth")
        .to(".panel",{x:"20%",ease:'expo'},"eighth")

        .to(frames,updateFrame(290),"ninth")
        .to(".panel",{x:"20%",ease:'expo'},"ninth")

        .to(frames,updateFrame(320),"tenth")
        .to(".panel",{opacity:0,ease:'none'},"tenth")

        .to(frames,updateFrame(350),"eleventh")
        .to(".panel",{opacity:0,ease:'none'},"eleventh")

        .to(frames,updateFrame(380),"twelfth")
        .to("canvas",{scale:0.5,ease:'none'},"twelfth")
}

window.addEventListener('resize',() =>{
    loadImage(Math.floor(frames.currentIndex));
})


preloadImages();