import React from 'react'
import RoundedButton from '../reusableUi/RoundedButton'

export default function GroupBody({title,describtion,content,image}) {
    return (
        <div>
            <h3 className='TitleFont mb-6'>{title}</h3>
            <img src={image} alt={title} className='rounded-md w-full lg:w-[50%]'/>
            <div className='flex items-center gap-x-3 mt-8'>
                <img src={'/images/calender.png'} alt='date...' className='w-[45px] h-[45px]'/>
                <h3 className='paragraphFont'>{content}</h3>
            </div>
            <div className='mb-12 mt-16'>
                <h3 className='RegularFont mb-3'>وصف</h3>
                <p className='paragraphFont text-justify'>
                    {describtion}
                </p>
            </div>
            <div className='mb-8'>
                <h3 className='RegularFont mb-3'>الهدف من المجموعة</h3>
                <p className='paragraphFont text-justify'>
                    {describtion}
                </p>
            </div>
            <RoundedButton title="إنضم الآن"/>
        </div>
    )
}