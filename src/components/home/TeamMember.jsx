import React from 'react'

export default function TeamMember({item}) {
    return (
        <div className='flex flex-col items-center'>
            <img src={item.image} alt={item.name} className='rounded-[6px] mb-4'/>
            <h3 className='RegularFont mb-1'>الأستاذ {item.name}</h3>
            <p className='paragraphFont'>{item.role}</p>
        </div>
    )
}
