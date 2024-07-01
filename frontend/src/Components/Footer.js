import React from 'react'
import logo from '../Assests/trac_.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    return (
        <div className='bg-black p-2 flex justify-between  items-center '>
            <div> <img src={logo} alt="" className='sm:h-[50px] h-[25px]' /></div>
            <div className='text-white text-xs'>
                &copy; CopyRights.All Rights Reserved
            </div>
            <div >
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </div>
        </div>
    )
}

export default Footer
