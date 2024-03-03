import React from 'react'
import GDSC from '../../assets/GDSC.svg'
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='flex items-center justify-between px-5 py-5 lg:px-24 my-7'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img src={GDSC} alt="GDSC" height={80} width={80} />
                <p className='text-sm'>
                    Google Developer Student Club <br />
                    <span>UIET, Panjab University, Chandigarh</span>
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <p>Social</p>
                <div className='flex items-center justify-center gap-2'>
                    <FaInstagram className='text-2xl text-darkgray' />
                    <FaFacebook className='text-2xl text-darkgray' />
                    <FaLinkedin className='text-2xl text-darkgray' />
                    <FaYoutube className='text-2xl text-darkgray' />
                </div>
            </div>
        </footer>
    )
}

export default Footer