import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Courses_items from '../Components/Courses_items';

const Courses = () => (
    <>
        <div className='flex justify-between mt-10'>
            <div className='text-2xl font-semibold ml-[3em]'> All   <span className='text-red-600'>Courses</span>   </div>
            <div className='mr-[2em] border-2 p-1 px-6 bg-slate-300 text-xs border-black flex justify-center items-center rounded-3xl'>
                <input type="text" name="" id="" placeholder='Search Courses.' className='border-none outline-none bg-transparent font-semibold ' />
                <SearchIcon />
            </div>
        </div>
        {/*  */}

        <div className='flex'>
            <div className='ml-[2em] mt-[2em] bg-gray-200 w-[240px] p-1 rounded-3xl'>
                <label for="" className='font-semibold'>Category:</label>
                <select name="" id="cars" className='bg-transparent border-none outline-none'>
                    <option value="all">All</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="cyber">Cyber Security</option>
                </select>
            </div>
            <div className='ml-[2em] mt-[2em] bg-gray-200 w-[240px] p-1 rounded-3xl'>
                <label for="" className='font-semibold'>Author:</label>
                <select name="" id="cars" className='bg-transparent border-none outline-none'>
                    <option value="all">All</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="cyber">Cyber Security</option>
                </select>
            </div>
        </div>
        <Courses_items />
    </>
)

export default Courses
