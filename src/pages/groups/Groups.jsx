import React from 'react'
import groups from '../../data/groups'
import GroupBox from '../../components/groups/GroupBox'
import ServiceItems from '../../components/ServiceLayout/ServiceItems'

export default function Groups() {
    return (
        <ServiceItems
            title="المجموعات"
            categoryPath="groups"
            items={groups}
            childBox={GroupBox}/>
    )
}