import React from 'react'

function Navbar() {
    return (
        <div className=" flex justify-between container bg-white shadow-md px-8 py-1">
            <div className="flex items-center">
                <img  className="object-cover w-14 h-auto" src="https://cdn.pixabay.com/photo/2018/05/08/21/28/steam-3384003_960_720.png" />
                <a className="text-gray-500 tracking-widest">Equipment Store</a>
            </div>
            <ul className="flex text-gray-500 pr-2 items-center ">
                <li className=" mx-2 inline-block"> Login </li>
                <li className=" mx-2 inline-block "> Register </li>
            </ul>
        </div>
    )
}

export default Navbar
