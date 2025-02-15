import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-200 flex justify-around py-3">
            <div className="logo font-bold text-xl ">
                <span className='text-green-600'>&lt;</span>Safe
                <span className='text-green-600'>Op/&gt;</span></div>
            <ul>
                <li className='flex gap-7'>
                    <a className='font-semibold hover:text-green-700' href="/">Home</a>
                    <a className='font-semibold hover:text-green-700' href="/">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
