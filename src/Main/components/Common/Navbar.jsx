import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from '../../assets/GDSC.svg'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-center border-b gap-96 p-7'>
            <div className='flex items-center justify-center gap-2'>
                <img src={logo} alt="GDSC" width={40} height={40} />
                <p>Google Developer Student Clubs</p>
            </div>
            <ul className='flex items-center justify-center gap-5'>
                <li className='flex items-center justify-center gap-1'>About GDSC <IoMdArrowDropdown /></li>
                <li>Chapters</li>
                <li>Upcoming events</li>
                <li><IoIosSearch className='text-xl text-dodgerblue' /></li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar