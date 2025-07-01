import Link from 'next/link'
import React from 'react'

const HeaderComponent = () => {
    return (
        <header className='w-full flex items-center justify-end h-[86px]'>
            <nav className='w-[236px] flex items-center justify-between'>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='works'>Works</Link>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='blog'>Blog</Link>
                <Link className='text-[#000000] text-xl font-medium cursor-pointer' href='contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default HeaderComponent