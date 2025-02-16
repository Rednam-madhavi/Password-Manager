import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-200 flex justify-center items-center gap-1 bottom-0 p-2'>
            <div className="logo font-bold text-xl ">
                <span className='text-green-600'>&lt;</span>Safe
                <span className='text-green-600'>Op/&gt;</span>
            </div>
            <div >
                Created by &copy; <a href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/" target='_blankf'>RednamMadhavi</a>
            </div>
        </div>
    )
}

export default Footer
