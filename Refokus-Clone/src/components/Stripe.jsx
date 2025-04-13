import React from 'react'

const Stripe = (props) => {
  return (
    <div className='w-[16.67%] px-4 py-3 border-t-1 border-b-1 border-r-1 border-zinc-700 flex justify-between items-center'>
        <img src={props.item.url} alt="" />
        <span className='font-semibold'>{props.item.number}</span>
    </div>
  )
}

export default Stripe