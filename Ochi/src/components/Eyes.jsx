import { useEffect, useState } from 'react'

const Eyes = () => {

  const [rotate ,setRotate] = useState(0);
  const [offsetX , setOffsetX] = useState(0);
  const [offsetY , setOffsetY] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX ; 
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2 ;
      let deltaY = mouseY - window.innerHeight/2 ;
      setOffsetX(deltaX / 30);
      setOffsetY(deltaY / 30);

      var angle = Math.atan2(deltaY , deltaX) * 180/Math.PI ;
      setRotate(angle-180);
    })
  });


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.8' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='flex gap-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
          <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
            <div style={{transform:`translate(${offsetX}px,${offsetY}px)`}} className='flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div style={{transform:`rotate(${rotate}deg)`}} className='line w-full h-10'>
                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
            <div style={{transform:`translate(${offsetX}px,${offsetY}px)`}} className='flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
            <div style={{transform:`rotate(${rotate}deg)`}} className='line w-full h-10'>
                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes