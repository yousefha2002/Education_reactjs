import React from 'react'
import Categories from './Categories'

export default function ServiceLayout({children,title,items ,categoryPath}) {
    return (
        <div className='Container py-10 lg:flex-row flex-col flex justify-between'>
            <div className='lg:w-[10%]'>
                <Categories categoryPath={categoryPath} items={items}/>
            </div>
            <div className='lg:w-[80%]'>
                <h3 className='TitleFont mb-6'>{title}</h3>
                {children}
            </div>
        </div>
    )
}