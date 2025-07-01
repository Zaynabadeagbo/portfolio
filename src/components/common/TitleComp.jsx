import React from 'react'

const TitleComp = ({ title }) => {
    return (
        <div className='w-auto'>
            <h2 className='text-[#21243D] text-[22px] font-normal leading-[60px]'>
                {title}
            </h2>
        </div>
    )
}

export default TitleComp