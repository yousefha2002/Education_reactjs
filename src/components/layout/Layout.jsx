import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <div>
                <Navbar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
