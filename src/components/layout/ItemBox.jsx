import React from 'react'
import { NavLink } from 'react-router'

export default function ItemBox({item}) {
    return (
        <NavLink 
            to={item.link}
            style={({ isActive }) => {
                return isActive ? { color: "#18A0FB" } : {};
            }}
            >
            <li className='hover:text-PRIMARY duration-300'>{item.title}</li>
        </NavLink>
    )
}
