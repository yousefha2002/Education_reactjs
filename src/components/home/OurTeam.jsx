import React from 'react'
import teamMembers from '../../data/teamMembers'
import TeamMember from './TeamMember'

export default function OurTeam() {
    return (
        <div className='py-12 Container'>
            <h3 className='TitleFont mb-8 text-center'>فريقنا الرائع</h3>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-10 gap-y-8'>
                {
                    teamMembers.map(item=><TeamMember item={item} key={item.id}/>)
                }
            </div>
        </div>
    )
}
