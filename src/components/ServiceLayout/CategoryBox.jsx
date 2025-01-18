import React from 'react'
import { NavLink } from 'react-router'

export default function CategoryBox({item,categoryPath}) {
    return (
        <NavLink
            className='paragraphFont px-3 lg:px-1 py-2 rounded-[4px] hover:text-PRIMARY duration-300' 
            to={`/${categoryPath}/${item.id}`}
            style={({ isActive }) => {
                return isActive ? { color: "#18A0FB" } : {};
            }}
        >
            {item.title}
        </NavLink>
    )
}