// import React, { useState } from 'react'
// import logo from '../Assests/trac_.png'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     const [active, setactive] = useState('Home')
//     return (
//         <div className='flex  justify-between bg-[#5fd6f4] p-2 md:px-4 items-center'>
//             <div className='h-[45px]'>
//                 <img src={logo} alt="Trac_logo" className='h-[100%]' />
//             </div>
//             {/*  */}
//             <div>
//                 <div className='flex items-center md:ml-[6em]'>
//                     <ul className='flex  space-x-6 items-center  p-2 font-semibold'>
//                         <Link className={`cursor-pointer ${active == 'Home' && 'border-b-2 border-red-600 '}`} onClick={() => setactive('Home')} >Home</Link>
//                         <Link to={'/'} className={`cursor-pointer ${active == 'Courses' && 'border-b-2 border-red-600'}`} onClick={() => setactive('Courses')} >Courses</Link>
//                         <li className={`cursor-pointer ${active == 'About' && 'border-b-2 border-red-600'}`} onClick={() => setactive('About')} >About Us</li>
//                         <li className={`cursor-pointer ${active == 'Pricing' && 'border-b-2 border-red-600'}`} onClick={() => setactive('Pricing')} >Pricing</li>
//                         <li className={`cursor-pointer ${active == 'contact' && 'border-b-2 border-red-600'}`} onClick={() => setactive('contact')} >Contact Us</li>
//                     </ul>
//                 </div>
//             </div>
//             {/*  */}
//             <div className='mr-10'>
//                 <button className='p-1 px-4 border border-red-600 rounded-md font-semibold hover:bg-red-800 hover:text-white'>Signin</button>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useContext } from 'react'
import logo from '../Assests/trac_.png'
import { Link } from 'react-router-dom'
// import cartlogo from './pics/cart2.png'
// import { ShopContext } from './Context/Context'
import { useState } from 'react'

const Navbar = () => {

    // const { cart } = useContext(ShopContext)

    const [open, setOpen] = useState(false)
    const [active, setactive] = useState('Home')
    return (
        <>
            <div className=' relative z-1  w-[100%] z-[1]  bg-[#5fd6f4] flex  justify-between items-center p-3 text-lg'>
                <div className='h-[65px] order-1 md:order-1'>
                    <img src={logo} alt="Logo_Scrubs" className=' h-[100%]' />
                </div>
                {/*  */}
                <div className=' order-3  md:order-2 flex'>
                    <ul className={`md:flex md:space-x-8 ${open ? 'absolute flex top-20   flex-col w-[100%] right-0 space-y-6 bg-gray-900  text-white p-10 ' : 'hidden '} `} >
                        <Link to={'/'} className={`cursor-pointer ${active === 'Home' && 'text-red-600 font-bold border-b border-red-600'}`} onClick={() => { setOpen(false); setactive('Home'); }}>Home</Link>
                        <Link to={'/courses'} className={`cursor-pointer ${active === 'Men' && 'text-red-600 font-bold border-b border-red-600'}`} onClick={() => { setOpen(false); setactive('Men'); }}>Courses</Link>
                        <Link to={"/women"} className={`cursor-pointer ${active === 'Women' && 'text-red-600 font-bold border-b border-red-600'}`} onClick={() => { setOpen(false); setactive('Women'); }}>About</Link >
                        <Link to={"/women"} className={`cursor-pointer ${active === 'pricing' && 'text-red-600 font-bold border-b border-red-600'}`} onClick={() => { setOpen(false); setactive('pricing'); }}>Pricing</Link >
                        <Link to={'/contact'} className={`cursor-pointer ${active === 'Contact' && 'text-red-600 font-bold border-b border-red-600'}`} onClick={() => { setOpen(false); setactive('Contact'); }}>Contact</Link>


                    </ul>


                    <button className='p-1 px-4 border border-red-600 rounded-md font-semibold hover:bg-red-800 hover:text-white md:ml-6'>Signin</button>
                    <div className='flex w-[50%] justify-end '>
                        <div className=' flex mx-4 '>
                        </div>
                        <div className=' p-1 cursor-pointer md:hidden block h-[40px] ' onClick={() => setOpen(!open)}>
                            <div className='w-[30px] m-1 h-[3px] bg-black'></div>
                            <div className='w-[30px] m-1 h-[3px] bg-black'></div>
                            <div className='w-[30px] m-1 h-[3px] bg-black'></div>
                        </div>



                    </div>
                    {/* </dv> */}
                </div>

                {/*  */}



            </div >

        </>
    )
}

export default Navbar
