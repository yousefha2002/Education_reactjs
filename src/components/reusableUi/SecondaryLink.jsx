import React from 'react'
import { Link } from 'react-router'

export default function SecondaryLink({content,link}) {
    return (
        <Link to={link} className='text-PRIMARY border-PRIMARY border-[1px] Btn'>
            {content}
        </Link>
    )
}