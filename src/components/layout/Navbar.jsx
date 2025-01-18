import React, { useState } from 'react'
import PrimaryButton from '../reusableUi/PrimaryLink'
import SecondaryButton from '../reusableUi/SecondaryLink'
import MenuItems from './MenuItems'
import menuItems from '../../data/menuItems'
import { Link } from 'react-router'
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='Container py-4'>
            <div className='flex justify-between items-center'>
                 {/** logo section */}
                <Link to={'/'}>
                    <h2 className='text-xl font-bold'>أكاديميتنا</h2>
                </Link>
                {/** menu for desktop */}
                <MenuItems items={menuItems} className="hidden md:flex items-center gap-x-8"/>
                {/** buttons */}
                <div className='hidden md:flex gap-x-2'>
                    <PrimaryButton content={"إنشاء حساب"} link={'/register'}/>
                    <SecondaryButton content={"تسجيل دخول"} link={'/login'}/>
                </div>
                {/** Hamburger menu */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen?<MdOutlineFilterList className='text-[24px]'/>:<IoMdClose className='text-[24px]'/>}
                    </button>
                </div>
            </div>
                {/** mobile menu */}
                {
                    isOpen&&
                    <div className='md-hidden mt-6'>
                        <MenuItems items={menuItems} className="flex flex-col gap-y-4" />
                        <div className="flex flex-col gap-y-2 mt-4">
                            <PrimaryButton content={"إنشاء حساب"} link={'/register'}/>
                            <SecondaryButton content={"تسجيل دخول"} link={'/login'}/>
                        </div>
                    </div>
                }
        </nav>
    )
}