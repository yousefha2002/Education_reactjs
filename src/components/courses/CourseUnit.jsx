import React, { useState } from 'react'
import CourseLesson from './CourseLesson'

export default function CourseUnit({unit}) {
    const [showLessons,setShowLessons] = useState(false)
    return (
        <div className='lg:w-[85%] xl:w-[60%]'>
            <button 
                onClick={()=>setShowLessons(prev=>!prev)}
                className='paragraphFont w-full flex justify-between px-4 py-2 text-PRIMARY border-[1px] border-BORDER'>
                <h3 className='paragraphFont'>{unit.title}</h3>
                <h3 className='text-[20px]'>{showLessons?"-":"+"}</h3>
            </button>
            {
                showLessons&&
                <div className='flex flex-col my-4 lg:w-[70%] px-4'>
                    {
                        unit.lesson.map((item,index)=><CourseLesson index={index} lesson={item} key={item.id}/>)
                    }
                </div>
            }
        </div>
    )
}
