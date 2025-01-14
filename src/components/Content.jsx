import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#CFFF00] py-8 md:px-12 h-full w-full flex flex-col md:justify-between justify-end'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div className='px-12 md:px-0'>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-evenly md:justify-between items-end px-4'>
            <div className=''>
                <h1 className='text-[14vw] leading-[0.8] mt-10 font-poppins font-medium'>atharv
                    malve.
                </h1>
            </div>
            <div>
                <p className=''>Copyright © AtharvMalve 2024</p>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2 font-poppins'>
                <h3 className='mb-2 uppercase text-black font-semibold font-poppins'>Social</h3>
                <a href='https://linkedin.com/in/atharvmalve' className='hover:underline'>Linkedin</a>
                <a href='https://github.com/atharvmalve'>Github</a>
                <a href='https://x.com/AtharvMalvee'>Twitter/X</a>
            </div>
            <div className='flex flex-col gap-2 font-poppins'>
                <h3 className='mb-2 uppercase text-black font-semibold font-poppins'>Get in Touch</h3>
                <a href='mailto: atharvmalve.dev@gmail.com'>Email</a>
                <a href='tel:+91 8828821585'>WhatsApp</a>
            </div>
        </div>
    )
}