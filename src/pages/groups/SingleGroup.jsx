import React from 'react'
import groups from '../../data/groups'
import GroupBody from '../../components/groups/GroupBody'
import SingleService from '../../components/ServiceLayout/SingleService'

export default function SingleGroup() {
    return (
        <SingleService 
            items={groups} 
            Child={GroupBody}/>
    )
}