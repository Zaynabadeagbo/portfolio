import React from 'react'

import WorkdetailsComp from './WorkdetailsComp'


const Detailspage = () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto p-10'>
      <div className='w-full sm:w-[856px] mx-auto'>
        <div className='w-[506px] flex items-start font-bold text-[#21243D] text-[34px] py-3.5 '>
          <h1> Designing Dashboards with usability in mind</h1>
        </div>

        <div className='flex flex-col h-auto '>

          <WorkdetailsComp btnContent='2020'  label='Dashboard, User Experience Design'  content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' img='/assets/image5.png' />
</div>
</div>
<div className='w-full sm:w-[856px] mx-auto py-12 cursor-pointer '>
    <h2 className='font-bold text-[28px] text-[#21243D] '>Heading 1</h2>
    <h2 className='font-semibold text-[22px] text-[#21243D] py-2.5 '>Heading 2</h2>
   <p className='w-[650px] py-4 text-base pb-8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <img src="/assets/image6.png" alt="picture 6" />
    <img src="/assets/image7.png" alt="picture 7" className='pt-9'/>
    
    

</div>
</section>
  )
}

export default Detailspage