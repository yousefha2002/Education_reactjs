import React from 'react'
import footerItems from '../../data/footerItems'

export default function Footer() {
    return (
        <div className='bg-[#387482BF]'>
            <div className='Container py-10'>
                <h3 className='text-white RegularFont mb-8'>أكاديميتنا</h3>
                <div className='grid grid-cols-2 md:w-[60%] gap-y-10 justify-between'>
                    {
                        footerItems.map(item=><p key={item.id} className='text-white paragraphFont'>{item.title}</p>)
                    }
                </div>
            </div>
        </div>
    )
}
