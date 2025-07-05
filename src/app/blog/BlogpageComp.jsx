import TitleComp from '@/components/common/TitleComp'
import React from 'react'


    const BlogpageComp = ({ title, content, date, label }) => {
    return (
        <div className='w-full h-auto  flex flex-col sm:flex-row gap-2 sm:gap-12 py-2  border-b-2 border-[#E0E0E0] '>
            
            <div className=' text-[#21243D] text-[26px] font-bold'>
                <h3>
                    {/* Designing Dashboards */}
                    {title}
                </h3>
                <div className='  py-2 w-[40%] flex items-center justify-between'>
                     <small className='text-[#21243D] font-[400]   w-[40%] border-r border-[#000000] flex items-center justify-start'>
                       {date}
                    </small>
                    
                    <small className='text-[#8695A4] font-[400] '>
                        {/* Dashboard */}
                        {label}
                    </small>
                </div>
                <p className='w-[70%] h-[89px] py-2  text-[#21243D] text-base font-normal'>
                    {/* Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. */}
                    {content}
                </p>
            </div>

            
        </div>
  )
}

export default BlogpageComp