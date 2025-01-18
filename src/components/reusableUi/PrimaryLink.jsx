import React from 'react'
import { Link } from 'react-router'

export default function PrimaryLink({content,link}) {
    return (
        <Link to={link} className='bg-PRIMARY text-[white] Btn'>
            {content}
        </Link>
    )
}