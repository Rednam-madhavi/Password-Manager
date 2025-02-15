import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="container mx-auto px-[20%]">

                <h1 className='text-center font-bold text-3xl mt-4'>
                    <span className='text-green-600'>&lt;</span>Safe
                    <span className='text-green-600'>Op/&gt;</span>
                </h1>
                <p className='font-semibold text-lg text-center'>Managa your Passwords</p>

                <div className='flex flex-col p-4 text-black'>

                    <input className='rounded-lg border border-green-800 bg-slate-200 p-2 m-4' type="text" placeholder='Link' />

                    <div className='flex w-full justify-between'>
                        <input className='rounded-lg border border-green-900 bg-slate-200  p-2 m-3 w-full' type="text" placeholder='Username' />
                        <input className='rounded-lg border border-green-900 bg-slate-200 p-2 m-3 w-full' type="text" placeholder='Password' />
                        <button className='bg-green-700 rounded-full w-20 px-4 m-3'>ADD</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Manager
