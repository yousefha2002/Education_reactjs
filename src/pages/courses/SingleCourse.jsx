import React from 'react'
import SingleService from '../../components/ServiceLayout/SingleService'
import courses from '../../data/courses'
import CourseBody from '../../components/courses/CourseBody'

export default function SingleCourse() {
    return (
        <SingleService 
            items={courses} 
            Child={CourseBody}/>
    )
}
