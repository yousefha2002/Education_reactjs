import React from 'react'
import CategoryBox from './CategoryBox'

export default function Categories({items,categoryPath}) {
    return (
        <div>
            <h3 className='RegularFont border-b-2 border-[#C4C4C4] pb-2'>الفئات</h3>
            <div className='flex flex-wrap lg:flex-col my-4'>
                {
                    items.map(item=><CategoryBox categoryPath={categoryPath} item={item} key={item.id}/>)
                }
            </div>
        </div>
    )
}