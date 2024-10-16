import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function FooterSection() {
    return (
        <section className='bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900 '>
            <div className="px-4 mx-auto max-w-[1100px] text-center py-24 lg:py-56">
                <FaBookOpen className='mx-auto text-7xl bg-orange-400 py-3 px-4 mb-5 rounded-xl text-white dark:bg-transparent dark:border-orange-400 dark:border' />
                <h1 className="mb-4 text-2xl font-medium tracking-tight leading-none  md:text-5xl lg:text-5xl">
                    Working with Apple Books.
                </h1>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                    Apple Books for Authors guides you through every step of your journey as an author,
                    from structuring your story to packaging your digital book and selling it on our store.
                    Even established authors will find valuable resources on how to grow sales and track performance.
                </p>
                <div className=' flex gap-10 justify-center text-blue-600 cursor-pointer'>
                    <a href="/" className="flex items-center gap-1">Apple Books for Authors <MdArrowOutward /></a>
                    <a href="/" className="flex items-center gap-1">Apple Books for Authors <MdKeyboardArrowRight /></a>
                </div>

            </div>
            <div className='px-4 mx-auto max-w-[1100px] dark:pb-8 '>
                <p className="border-t border-b border-gray-300 w-fit py-2 text-[13px] text-gray-500">
                    * Family Sharing requires a personal Apple ID signed in to iCloud. Music, movies,
                    TV shows, and books can be downloaded on up to 10 devices per account, five of which
                    can be computers. iOS 8 or later and OS X Yosemite or later are required to set up
                    or join a Family Sharing group and are recommended for full functionality. Not all
                    content is eligible for Family Sharing.
                </p>
            </div>
        </section>
    )
}

export default FooterSection