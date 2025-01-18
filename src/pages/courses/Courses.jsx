import React from 'react'
import CourseBox from '../../components/courses/CourseBox'
import courses from '../../data/courses'
import ServiceItems from '../../components/ServiceLayout/ServiceItems'

export default function Courses() {
    return (
        <ServiceItems
            title="الدورات"
            categoryPath="courses"
            items={courses}
            childBox={CourseBox}/>
    )
}