import React from 'react'
import { Link } from 'react-router'
import PrimaryLink from '../reusableUi/PrimaryLink'

export default function CourseBox({item}) {
    return (
        <Link to={`/course/${item.id}`}>
            <div className='shadow rounded-lg p-3'>
                <img src={item.image} alt='course...' className='h-[240px] w-full rounded-t-lg'/>
                <div className='flex items-center flex-wrap gap-3 justify-between my-4'>
                    <div className='w-[60%]'>
                        <h3 className='RegularFont'>{item.title}</h3>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src='/images/coin.png' alt='price...' className='w-[24px] h-[24px]'/>
                        <h3 className='RegularFont'>{item.price} دج</h3>
                    </div>
                </div>
                <h3 className='paragraphFont mb-5'>الأستاذ {item.teacher}</h3>
                <div className='flex items-center justify-between'>
                    <PrimaryLink content={"اشترك الآن"} link={"/"}/>
                    <div className='flex items-center gap-x-2'>
                        <img src='/images/like.png' alt='like ...' className='w-[25px] h-[25px]'/>
                        <img src='/images/share.png' alt='like ...' className='w-[20px] h-[20px]'/>
                    </div>
                </div>
            </div>
        </Link>
    )
}
