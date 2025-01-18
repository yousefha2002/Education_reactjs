import React from 'react'
import CategoryServiceItems from '../../components/ServiceLayout/CategoryServiceItems'
import courses from '../../data/courses'
import CourseBox from '../../components/courses/CourseBox'

export default function CategoryCourses() {
    return (
        <CategoryServiceItems
            title={"الدورات"}
            categoryPath="courses"
            ChildBox={CourseBox}
            items={courses}
        />
    )
}