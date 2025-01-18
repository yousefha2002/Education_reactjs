import React from 'react'
import { Link } from 'react-router'

export default function GroupBox({item}) {
    return (
        <Link to={`/group/${item.id}`}>
            <div className='shadow rounded-lg'>
                <img src={item.image} alt='group...' className='h-[180px] w-full rounded-t-lg'/>
                <div className='p-3'>
                    <div className='flex items-center flex-wrap gap-3 justify-between'>
                        <div className='w-[60%]'>
                            <h3 className='RegularFont'>{item.title}</h3>
                            <p className='paragraphFont'>{item.content}</p>
                        </div>
                        <div className='bg-[#387482BF] text-white px-3 py-1 rounded-2xl'>
                            العدد {item.number_student_registerion}/{item.max_number_students}
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 mt-6'>
                        <img src={'/images/teacher.png'} alt={item.teacher} className='w-[40px] h-[40px]'/>
                        <h3 className='RegularFont'>الأستاذ {item.teacher}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}
