import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { CiLock } from "react-icons/ci";

export default function CourseLesson({lesson,index}) {
    return (
        <div 
            className='flex items-center justify-between px-4 py-2'
            style={{background:index%2===0?"#D7E7F2":""}}>
            <div className='flex items-center gap-x-2'>
                {lesson.isVideo?<IoIosVideocam/>:<FaRegFilePdf/>}
                <h3 className='paragraphFont'>{lesson.title}</h3>
            </div>
            <CiLock/>
        </div>
    )
}
