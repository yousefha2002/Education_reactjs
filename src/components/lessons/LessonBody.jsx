import React from 'react'
import RoundedButton from '../reusableUi/RoundedButton'

export default function LessonBody({title,content}) {
    return (
        <div>
            <h3 className='TitleFont mb-6'>{title}</h3>
            <p className='paragraphFont text-justify mb-8'>
                {content}
            </p>
            <RoundedButton title={"مشاهدة الآن"}/>
        </div>
    )
}
