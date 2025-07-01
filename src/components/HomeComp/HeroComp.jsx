import Image from 'next/image'
import React from 'react'

const HeroComp = () => {
    return (
        <section className='w-[856px] mx-auto flex items-center justify-between py-5'
        >
            <aside className='w-[60%] flex flex-col justify-start gap-[39px]'>
                <h1 className='text-[#21243D] text-[44px] font-bold leading-[60px]'>Hi, I am Zeenithra, Frontend Developer</h1>
                <p className='text-[#21243D] text-base font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className='bg-[#FF6464] h-[47px] w-[208px] max-w-[208px] flex items-center justify-center text-[#FFFFFF] text-xl font-medium rounded-[2px]'>Download Resume</button>
            </aside>
            <aside className='w-[40%] flex items-center justify-center'>
                <div className='w-[243px] h-[243px] rounded-full bg-[#EDF7FA] relative'>
                    <Image src='/assets/my-image.jpg' width='243' height='243' className='absolute bottom-2.5 rounded-full' alt='my profile picture'/>
                </div>
            </aside>
        </section>
    )
}

export default HeroComp