import Button from '@/components/common/Button'
import Image from 'next/image'
import React from 'react'

const WorkdetailsComp = ({ img, content, btnContent, label }) => {
    return (
        <div className='w-full h-auto gap-2 sm:gap-12 py-2 ]'>
           
            <div className=' text-[#21243D] text-[34px] font-bold'>
                <h3 >
                    {/* Designing Dashboards */}
                    
                </h3>
                <div className='flex py-6 gap-6'>
                    <Button
                        // text="2020"
                        text={btnContent}
                        bg={'#FF7C7C'}
                        
                    />
                    <small className='text-[#21243D] font-normal text-[20px]'>
                        {/* Dashboard */}
                        {label}
                    </small>
                </div>
                <p className='w-[650px] h-auto sm:h-[93px] text-[#21243D] text-base font-normal '>
                    {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. */}
                    {content}
                </p>
                 <div className='w-full h-auto'>
                <Image
                    // src='/assets/image1.png'
                    src={img}
                    width='680'
                    height='360'
                    alt='picture1' />
            </div>
            </div>

            
        </div>
    )
}

export default WorkdetailsComp