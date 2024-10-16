import React from 'react'
import AutoSliser from './AutoSliser'

function HeroFilter() {
    return (

        <section className=" bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900">
            <div className="px-4 mx-auto  text-center pt-24 lg:pt-32">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
                    A library you’ll want<br />
                    to get lost in.
                </h1>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                    Browse our global catalog featuring millions of bestsellers, new releases, and <br />
                    classics — with new audiobooks and ebooks added every week.
                </p>
                <div className=' flex justify-center'>
                    <ul className=' flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 '>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Bestselling Audiobooks</li>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>New & Trending Ebooks</li>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Fan-Favorite Audiobooks</li>
                    </ul>
                </div>
                <AutoSliser/>
            </div>
        </section>
    )
}

export default HeroFilter