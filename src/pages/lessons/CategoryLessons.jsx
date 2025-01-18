import React from 'react'
import CategoryServiceItems from '../../components/ServiceLayout/CategoryServiceItems'
import LessonBox from '../../components/lessons/LessonBox'
import lessons from '../../data/lessons'

export default function CategoryLessons() {
    return (
        <CategoryServiceItems
            title="الدروس"
            categoryPath="lessons"
            items={lessons}
            ChildBox={LessonBox}
        />
    )
}
