import React from 'react'

export default function CourseGoal({title}) {
    return (
        <div className='flex gap-x-2 items-center'>
            <img src='/images/correct.png' alt='goal...' className='w-[30px] h-[30px]'/>
            <p className='paragraphFont'>{title}</p>
        </div>
    )
}
