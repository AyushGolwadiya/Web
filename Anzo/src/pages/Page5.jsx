import React from 'react'

const Page5 = () => {
    return(
    <div className='h-screen p-5 bg-white relative'>
        <div className='h-full w-full bg-black rounded-4xl overflow-hidden'>
            <video className='h-full w-full object-cover' src="/src/assets/videos/moon.mp4" autoPlay muted loop ></video>
            <h1 className='text-white text-[25vw] font-[anzo2] uppercase font-bold absolute -bottom-10 left-10'>About</h1>
        </div>
    </div>
  )
}

export default Page5