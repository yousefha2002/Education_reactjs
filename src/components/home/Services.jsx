import React from 'react'
import services from '../../data/services'
import ServiceBox from './ServiceBox'

export default function Services() {
    return (
        <div className='Container py-10'>
            <h3 className='HeadingFont mb-8'>
                اهم خدماتنا ....
                <br/>
                وما نقدمه في الأكاديمية ...
            </h3>
            <div className='grid lg:grid-cols-2 gap-y-8'>
                {
                    services.map(item=><ServiceBox item={item} key={item.id}/>)
                }
            </div>
        </div>
    )
}
