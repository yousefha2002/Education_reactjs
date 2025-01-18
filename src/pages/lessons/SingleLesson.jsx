import React from 'react'
import SingleService from '../../components/ServiceLayout/SingleService'
import lessons from '../../data/lessons'
import LessonBody from '../../components/lessons/LessonBody'

export default function SingleLesson() {
    return (
        <SingleService
        items={lessons}
        Child={LessonBody}
        />
    )
}
