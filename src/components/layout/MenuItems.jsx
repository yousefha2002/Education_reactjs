import React from 'react'
import ItemBox from './ItemBox'

export default function MenuItems({items,className}) {
    return (
        <ul className={className}>
            {
                items.map((item,index)=>
                {
                    return <ItemBox key={index} item={item}/>
                })
            }
        </ul>
    )
}
