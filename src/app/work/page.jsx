import React from 'react'


import WorkpageComp from './WorkpageComp'
import TitleComp from '@/components/common/TitleComp'


const WorkPage = () => {
  return (
    <section className='w-[344px] sm:w-full mx-auto sm:mx-0 h-auto '>
      <div className='w-full sm:w-[856px] mx-auto'>
         <div className='w-full h-[100px] text-[#21243D] flex items-start font-bold text-[44px]'>
               Work
            </div>


        <div className='flex flex-col h-auto gap-6'>

          <WorkpageComp title='Designing Dashboards' img='/assets/image1.png' label='Dashboard' btnContent='2020' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <WorkpageComp title=' Vibrant Portraits of 2020' img='/assets/image2.png' label='Illustration' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

          <WorkpageComp title='36 Days of Malayalam type' img='/assets/image3.png' label='Typography' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
         
          <WorkpageComp title='Components' img='/assets/image 4.png' label='Components, Design' btnContent='2018' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
        </div>
      </div>

    </section>
  )
}

export default WorkPage