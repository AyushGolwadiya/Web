import React from 'react'
import Card from './Card'

const Cards = () => {
    var data = [{
        width:'basis-1/3',
        start:false,
        para:true,
        bg:'bg-card-3',
        one:'portfolio',
        second:'Projects & Case studies',
        p:'Web Design,Webflow Development and Creative Development'
    },
    {
        width:'basis-2/3',
        start:true,
        para:false,
        bg:'bg-card-2',
        one:'get in touch',
        second:"Let's get to it. Together."
    }
]
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-1.5'>
            {data.map((item,index) => <Card key={index} data={item} />)}
        </div>
    </div>
  )
}

export default Cards