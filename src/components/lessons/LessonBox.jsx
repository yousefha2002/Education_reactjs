import React from 'react'
import { Link } from 'react-router'
import RoundedButton from '../reusableUi/RoundedButton'

export default function LessonBox({item}) {
    return (
        <Link to={`/lesson/${item.id}`}>
            <div className='shadow rounded-lg p-3'>
                <img src={item.image} alt='course...' className='h-[240px] w-full rounded-t-lg'/>
                <div className='flex items-center flex-wrap gap-3 justify-between my-4 h-[60px]'>
                    <div className='w-[60%]'>
                        <h3 className='RegularFont'>{item.title}</h3>
                    </div>
                    <div className='bg-[#387482BF] text-white px-3 py-1 rounded-2xl'>
                        <h3 className='RegularFont'>{item.duration} د</h3>
                    </div>
                </div>
                <h3 className='paragraphFont mb-5'>الأستاذ {item.teacher}</h3>
                <RoundedButton title={"مشاهدة الآن"}/>
            </div>
        </Link>
    )
}
