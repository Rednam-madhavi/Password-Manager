import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-200 flex justify-around py-3 top-0">
            <div className="logo font-bold text-xl ">
                <span className='text-green-600'>&lt;</span>Safe
                <span className='text-green-600'>Op/&gt;</span>
            </div>

            <div className="logo">
                <a href="https://github.com/Rednam-madhavi" target='_blank'>
                    <img className='w-7 cursor-pointer' src="/github.svg" alt="" href="" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
