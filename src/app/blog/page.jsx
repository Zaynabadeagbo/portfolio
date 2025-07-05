
import React from 'react'
import BlogpageComp from './BlogpageComp'

const BlogPage = () => {
    return (
        <section className='w-[856px] mx-auto flex flex-col items-start py-5 h-auto'>

            <div className='w-full h-[100px] text-[#21243D] flex items-start font-bold text-[44px]'>
                Blog
            </div>


            <div>
                <BlogpageComp title='UI Interactions of the week' date='12 Feb 2019' label='Express, Handlebars' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

                <BlogpageComp title='UI Interactions of the week' date='12 Feb 2019' label='Express, Handlebars' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

                <BlogpageComp title='UI Interactions of the week' date='12 Feb 2019' label='Express, Handlebars' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />

                <BlogpageComp title='UI Interactions of the week' date='12 Feb 2019' label='Express, Handlebars' content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />


            </div>

        </section>
    )
}

export default BlogPage