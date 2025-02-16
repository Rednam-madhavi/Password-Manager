import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {

    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("passwords")
        if (password) {
            setPasswordArray(JSON.parse(password))
        }
    }, [])

    const showPassword = () => {
        // Toggle password visibility
        const currentType = passwordRef.current.type;
        passwordRef.current.type = currentType === "text" ? "password" : "text";

        // Toggle eye icon
        const currentIcon = ref.current.src;
        ref.current.src = currentIcon.includes("/eyecross.png") ? "/eye.png" : "/eyecross.png";
    };


    const saveCredentials = () => {
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        setForm({ site: "", username: "", password: "" })
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast('Copied to clipboard', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        })
    }

    const deleteCredentials = (id) => {
        setPasswordArray(passwordArray.filter((item) => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))
        console.log("delete with id", id);
        confirm("Are you wanted to delete this Credentials?")
        toast('Credentials Delete', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const editCredentials = (id) => {
        console.log("Editing with id", id);
        setForm(passwordArray.filter((item) => item.id === id)[0])
        setPasswordArray(passwordArray.filter((item) => item.id !== id))
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="container mx-auto px-4 md:px-[10%] lg:px-[15%] py-8">

                <h1 className="text-center text-3xl font-bold mb-4">
                    <span className="text-green-600">&lt;</span>Safe
                    <span className="text-green-600">Op/&gt;</span>
                </h1>
                <p className="text-center text-lg font-semibold mb-6">Manage Your Passwords</p>

                <div className="flex flex-col md:flex-row p-4 bg-gray-50 rounded-lg shadow-lg space-y-4 md:space-y-0">

                    <input
                        className="rounded-lg border-2 border-green-700 bg-slate-100 p-3 w-full"
                        type="text"
                        placeholder="Enter Website URL"
                        name="site"
                        value={form.site}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col md:flex-row p-4 bg-gray-50 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <div className='relative w-full md:w-1/2'>
                        <input
                            className="rounded-lg border-2 border-green-700 bg-slate-100 p-3 w-full"
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative w-full md:w-1/2">
                        <input
                            className="rounded-lg border-2 border-green-700 bg-slate-100 p-3 w-full"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            ref={passwordRef}
                        />
                        <span className="flex gap-2 absolute right-3 top-1/2 transform -translate-y-1/2">
                            <img
                                className="w-6 cursor-pointer"
                                onClick={showPassword}
                                src="/eye.png"
                                alt="show"
                            />
                        </span>
                    </div>
                </div>

                <button
                    onClick={saveCredentials}
                    className="bg-green-700 text-white py-2 px-6 rounded-full mt-6 mx-auto block hover:bg-green-800"
                >
                    <i className="fa-solid fa-plus"></i> ADD
                </button>

                <div className="passwords mt-10">

                    <h2 className="text-2xl font-semibold mb-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full">
                        <thead className='bg-green-700 text-white'>
                            <tr>
                                <th className='p-3'>Site</th>
                                <th className='p-3'>Username</th>
                                <th className='p-3'>Password</th>
                                <th className='p-3 px-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-slate-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={item.id}>
                                    <td className='text-center w-32 p-3'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <a href={item.site} target='_blank'>
                                                <span>{item.site}</span>
                                            </a>
                                            <i onClick={() => { copyText(item.site) }} className="cursor-pointer fa-regular fa-copy text-gray-500 hover:text-gray-700"></i>

                                        </div>
                                    </td>
                                    <td className='text-center w-32 p-3'>
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{item.username}</span>
                                            <i onClick={() => { copyText(item.username) }} className="cursor-pointer fa-regular fa-copy text-gray-500 hover:text-gray-700"></i>
                                        </div>
                                    </td>
                                    <td className='text-center w-32 p-3'>
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{item.password}</span>
                                            <i onClick={() => { copyText(item.password) }} className="cursor-pointer fa-regular fa-copy text-gray-500 hover:text-gray-700"></i>
                                        </div>
                                    </td>
                                    <td className='text-center w-32 p-3'>
                                        <div className="flex items-center justify-around">
                                            <i className="fa-regular fa-pen-to-square cursor-pointer text-green-600 hover:text-green-900" onClick={() => { editCredentials(item.id) }}></i>
                                            <i className="fa-solid fa-trash cursor-pointer text-green-600 hover:text-red-800" onClick={() => { deleteCredentials(item.id) }}></i>
                                        </div>
                                    </td>
                                </tr>

                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </>

    )
}

export default Manager
