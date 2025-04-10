import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className="flex items-center gap-10 pl-10 pr-8 py-4 bg-zinc-900 mt-5 rounded-full text-white uppercase">
            {props.text}
            <div className="bg-white w-2 h-2 rounded-full"></div>
        </button>
    </div>
  )
}

export default Button