'use client'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react'

const HeaderComponent = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);

    const handleToggleMobileNav = () => {
        setToggleMobileNav(!toggleMobileNav)
    }

    return (
        <header className='w-full flex items-center justify-end h-[86px]'>
            <div className='w-full flex sm:hidden items-center justify-end px-2.5 relative'>
                <button type='button' onClick={handleToggleMobileNav}>
                    <RxHamburgerMenu size='30px' height='18px' />
                </button>
                {
                    toggleMobileNav && (
                        <div className='w-[360px] p-6 mx-auto absolute top-7 right-6 z-10 bg-white shadow-lg'>
                            <nav className='w-full flex flex-col items-center justify-between gap-6'>
                                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='works'>Works</Link>
                                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='blog'>Blog</Link>
                                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='contact'>Contact</Link>
                            </nav>
                        </div>
                    )
                }

            </div>
            <nav className='w-[236px] hidden sm:flex items-center justify-between '>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='works'>Blog</Link>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='blog'>Works</Link>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='contact'>Contact</Link>
            </nav>

            


        </header>
    )
}

export default HeaderComponent