import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-50'>
            <div className='basis-1/2'>
                <h1 className='text-[11vw] font-semibold tracking-tight'>Refokus.</h1>
                <div className='flex gap-20 px-2 text-sm font-extralight text-zinc-500'>
                    {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((item,index)=> <a key={index}>{item}</a>)}
                </div>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3 flex flex-col gap-1.5'>
                    <h1 className='mb-10'>Socials</h1>
                    {["Instagram","Twitter (X?)","LinkedIn"].map((item,index)=> <a className='text-zinc-600' key={index} href='#'>{item}</a>)}
                </div>
                <div className='basis-1/3 flex flex-col gap-1.5'>
                    <h1 className='mb-10'>Sitemap</h1>
                    {["Home","Work","Careers","Contact"].map((item,index)=> <a className='font-extralight' key={index} href='#'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col justify-evenly items-end'>
                    <p className='text-justify'>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
                    <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="enterprise" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer