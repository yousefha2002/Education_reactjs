import React from 'react'
import ServiceItems from '../../components/ServiceLayout/ServiceItems'
import LessonBox from '../../components/lessons/LessonBox'
import lessons from '../../data/lessons'

export default function Lessons() {
    return (
        <ServiceItems
            title="الدروس"
            categoryPath="lessons"
            items={lessons}
            childBox={LessonBox}
        />
    )
}
