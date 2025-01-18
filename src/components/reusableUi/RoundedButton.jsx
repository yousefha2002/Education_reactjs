import React from 'react'

export default function RoundedButton({title}) {
    return (
        <button className='bg-PRIMARY text-[white] py-1 rounded-full px-12'>
            {title}
        </button>
    )
}
