import React from 'react'
import Loading from './Loading';

const ImagePreview = (props) => {
  console.log("Enhanced Image in Preview:", props.enhancedImage);

  return (
    <div className='mt-8 flex justify-between items-center gap-6 w-full max-w-4xl'>
        {/* Original Image */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden w-[40vw] h-[30vw]'>
            <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
            {props.uploaded ? 
            <img src={props.uploaded} alt="Original" className='object-contain' />
            : <div className='flex items-center justify-center h-full bg-gray-200'>No Image selected</div> }
        </div>

        {/* Enhanced Image */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden w-[40vw] h-[30vw]'>
            <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Enhanced Image</h2>

            {props.loading ? <Loading/> : 
            props.enhancedImage ? 
            <img src={props.enhancedImage} alt="Enhanced" className='object-contain' />
            : <div className='flex items-center justify-center h-full bg-gray-200'>No Enhanced Image</div>}
        </div>
    </div>
  )
}

export default ImagePreview;
