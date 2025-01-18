import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center my-20'>
            <img src={`/images/notfound-group.png`} alt='not found'/>
            <div className='flex gap-x-1 mt-2 paragraphFont'>
                <h3>عذرا لا يوجد نتائج حاليا . حاول لاحقاً </h3>
            </div>
        </div>
    )
}