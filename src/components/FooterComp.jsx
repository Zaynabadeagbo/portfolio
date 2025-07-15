import React from 'react'
import {
     FacebookIcon, 
     InstagramIcon, 
     LinkedInIcon, 
     TwitterIcon 
    } from './common/Icon'


const FooterComp = () => {
    return (
        <footer className='w-full h-[182px] flex items-center justify-center'>
            <div className='flex flex-col w-[210px] gap-4 items-center'>
                <div className='flex items-center justify-between w-full'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </div>
                <small>Copyright ©2020 All rights reserved</small>
            </div>
        </footer>
    )
}

export default FooterComp