import React from 'react'
import CourseGoal from './CourseGoal'
import CourseUnit from './CourseUnit'
import RoundedButton from '../reusableUi/RoundedButton'

export default function CourseBody({title,content,goals,units}) {
    return (
        <div>
            <h3 className='TitleFont mb-6'>{title}</h3>
            <p className='paragraphFont text-justify'>{content}</p>
            <div className='py-4 px-6 border-2 border-BORDER my-14'>
                <h4 className='RegularFont mb-8'>أهداف الدورة</h4>
                <div className='grid md:grid-cols-2 gap-x-2 gap-y-8'>
                    {
                        goals.map((item,index)=><CourseGoal title={item} key={index}/>)
                    }
                </div>
            </div>
            <div className='my-14'>
                <h4 className='RegularFont mb-8'>منهاج الدراسة</h4>
                <div className='flex flex-col gap-y-6'>
                    {
                        units.map(item=><CourseUnit unit={item} key={item.id}/>)
                    }
                </div>
            </div>
            <RoundedButton title="إنضم الآن"/>
        </div>
    )
}
