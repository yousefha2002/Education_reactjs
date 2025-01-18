import React from 'react'
import { Link } from 'react-router'

export default function ServiceBox({item}) {
    return (
        <div className='lg:w-[90%]'>
            <p className='text-end text-[14px] mb-2 text-PRIMARY'>
                <Link to={item.link}>عرض المزيد</Link>
            </p>
            <div className='flex items-center gap-x-2 mb-2'>
                <img src={item.image} alt={item.title} className='w-[54px] h-[54px]'/>
                <h3 className='TitleFont'>{item.title}</h3>
            </div>
            <p className='paragraphFont pr-8 text-justify'>{item.content}</p>
        </div>
    )
}