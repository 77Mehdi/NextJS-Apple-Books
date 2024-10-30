import React from 'react'

import { FaArrowRight, FaBookOpen } from "react-icons/fa";

function Hero() {
    return (
        <div>


            <section className=" dark:bg-gray-900  dark:text-white text-gray-900 ">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-30">
                    <FaBookOpen className='mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl text-white dark:bg-transparent dark:border-orange-400 dark:border' />
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
                        Read, listen, discover.<br />
                        All in one app.
                    </h1>
                    <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                        Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks.
                         Browse curated collections and get personalized recommendations.
                          Share your books with up to five family members.* All with no subscription or monthly commitment.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Get started

                            <FaArrowRight className=' ml-3' />
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center hover:text-gray-100 dark:hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center  rounded-lg border border-black hover:bg-gray-700 dark:hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Hero