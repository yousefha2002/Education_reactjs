import React from 'react'
import { useParams } from 'react-router'
import NotFound from '../reusableUi/NotFound'

export default function SingleService({items,Child}) {
    const {id} = useParams()
    const selectedItem = items.filter(item=>item.id===parseInt(id))[0]
    return (
        <div className='Container py-10'>
            {
                selectedItem?
                <div className='lg:w-[70%]'>
                    <Child {...selectedItem}/>
                </div>
                :
                <NotFound/>
            }
        </div>
    )
}