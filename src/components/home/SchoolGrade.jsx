import React from 'react'

export default function SchoolGrade({item}) {
    return (
        <div className='flex flex-col items-center md:w-full w-[50%] mx-auto'>
            <img src={item.image} alt={item.title}/>
            <h3 className='RegularFont mt-3'>{item.title}</h3>
        </div>
    )
}