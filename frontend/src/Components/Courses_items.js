import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Courses_items = () => {
    const dummydata = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 7,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 11,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 12,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 13,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 14,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },
        {
            id: 15,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s',
            title: 'Web Development',
            author: 'Person XYZ'
        },

    ]
    return (
        <div className='flex justify-center flex-wrap'>
            {
                dummydata.map((e) =>
                    <div className='border-2 border-black  h-[320px] w-[280px] flex flex-col m-4'>
                        <div className=' h-[70%] w-[100%]'><img src={e.image} className='h-[100%] w-[100%]' alt="" /> </div>
                        <span className='font-semibold text-lg text-center m-1'>{e.title}</span>
                        <span className='font-semibold text-lg text-center'>By : {e.author}</span>
                        <div className='flex justify-end'>
                            <span className='text-xs cursor-pointer'>Learn more<ArrowRightIcon></ArrowRightIcon></span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Courses_items
