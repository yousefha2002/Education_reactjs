import React from 'react'
import GroupBox from '../../components/groups/GroupBox'
import CategoryServiceItems from '../../components/ServiceLayout/CategoryServiceItems'
import groups from '../../data/groups'

export default function CategoryGroups() {
    return (
        <CategoryServiceItems
            title={"المجموعات"}
            categoryPath="groups"
            ChildBox={GroupBox}
            items={groups}
        />
    )
}