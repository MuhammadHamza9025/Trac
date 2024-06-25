import React, { useState } from 'react'
import logo from '../Assests/trac_.png'

const Navbar = () => {
    const [active, setactive] = useState('Home')
    return (
        <div className='flex  justify-between bg-[#5fd6f4] p-2 md:px-4 items-center'>
            <div className='h-[45px]'>
                <img src={logo} alt="Trac_logo" className='h-[100%]' />
            </div>
            {/*  */}
            <div>
                <div className='flex items-center md:ml-[6em]'>
                    <ul className='flex  space-x-6 items-center  p-2 font-semibold'>
                        <li className={`cursor-pointer ${active == 'Home' && 'border-b-2 border-red-600 '}`} onClick={() => setactive('Home')} >Home</li>
                        <li className={`cursor-pointer ${active == 'Courses' && 'border-b-2 border-red-600'}`} onClick={() => setactive('Courses')} >Courses</li>
                        <li className={`cursor-pointer ${active == 'About' && 'border-b-2 border-red-600'}`} onClick={() => setactive('About')} >About Us</li>
                        <li className={`cursor-pointer ${active == 'Pricing' && 'border-b-2 border-red-600'}`} onClick={() => setactive('Pricing')} >Pricing</li>
                        <li className={`cursor-pointer ${active == 'contact' && 'border-b-2 border-red-600'}`} onClick={() => setactive('contact')} >Contact Us</li>
                    </ul>
                </div>
            </div>
            {/*  */}
            <div className='mr-10'>
                <button className='p-1 px-4 border border-red-600 rounded-md font-semibold hover:bg-red-800 hover:text-white'>Signin</button>
            </div>
        </div>
    )
}

export default Navbar
