import React from 'react'

const Rating = () => {
  return (
    <div className='w-full h-screen grid grid-cols-2 px-15 gap-5 items-center'>
        <div className='bg-[#004d43] relative h-[52vh] rounded-xl flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi logo" />
            <h5 className='text-[#cdea68] absolute left-5 bottom-10 border-1 px-2 py-0.5 rounded-full text-[0.9vw]'>&copy; 2019-2022</h5>
        </div>
        <div className='w-full h-[52vh] grid grid-cols-2 gap-5'>
            <div className='bg-[#212121] relative rounded-xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch logo"/>
                <h5 className='text-white absolute uppercase left-5 bottom-10 border-1 px-2 py-0.5 rounded-full text-[0.9vw]'>Rating 5.0 on Clutch</h5>
            </div>
            <div className='bg-[#212121] relative rounded-xl flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="business bootcamp logo"/>
            <h5 className='text-white absolute uppercase left-5 bottom-10 border-1 px-2 py-0.5 rounded-full text-[0.9vw]'>Business bootcamp alumni</h5>
            </div>
        </div>
    </div>
  )
}

export default Rating