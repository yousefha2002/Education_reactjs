import React from 'react'

export default function GridSystem({items,Child}) {
    return (
        <div className='GridBoxes'>
            {
                items.map(item=><Child item={item} key={item.id}/>)
            }
        </div>
    )
}