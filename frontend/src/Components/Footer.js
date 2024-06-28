import React from 'react'
import logo from '../Assests/trac_.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    return (
        <div className='bg-black p-2 flex justify-between  items-center mt-10'>
            <div> <img src={logo} alt="" className='h-[50px]' /></div>
            <div className='text-white'>
                &copy; CopyRights.All Rights Reserved
            </div>
            <div >
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </div>
        </div>
    )
}

export default Footer
