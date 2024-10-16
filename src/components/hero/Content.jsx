import Image from 'next/image'
import React from 'react'


const SliderImage1 = [
    { src: "/assets/images/book_01.jpg", title: "Nuclear War", author: "Rebecca Yarros" },
    { src: "/assets/images/book_02.jpg", title: "Conviction", author: " Denise Mina" },

]

const SliderImage2 = [
    { src: "/assets/images/book_03.jpg", title: "Hillbilly Elegy", author: "Sarah J.Maas" },
    { src: "/assets/images/book_04.jpg", title: "Harry Poter", author: "Liz Moore" },

]


function Content() {
    return (
        <>
            <div className=' flex justify-center '>
                <section className=" w-[50rem]  bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900 bg-gray-100 rounded-lg p-[20px] dark:border dark:border-gray-600">
                    <div className="px-4 mx-auto  text-center ">
                        <h4 className=' text-[25px] text-gray-900 text-left py-5 font-bold dark:text-white '>Listen to audiobooks right in the app.</h4>
                        <p className=' text-left font-bold text-gray-500'>
                            Audiobooks is a tab right inside the Apple Books app, so you can easily find and <br />
                            get immersed in storytelling brought to life by talented narrators and celebrities.
                        </p>
                        <div className="flex justify-center items-center gap-4 py-5">
                            {SliderImage1.map(({ src, title }, index) => (
                                <Image src={src} alt={title} width={100} height={100} key={index} className="hidden sm:block" />
                            ))}

                            <span className="flex-shrink-0">
                                <Image src="/assets/images/iphone_02.png" alt="iPhone" width={150} height={150} className="w-[220px] h-[380px] hidden sm:block" />
                            </span>

                            {SliderImage2.map(({ src, title }, index) => (
                                <Image src={src} alt={title} width={100} height={100} key={index} />
                            ))}
                        </div>

                    </div>
                </section>

            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-5'>
                <section className='w-full max-w-[25rem] h-full bg-center bg-no-repeat dark:bg-gray-900 dark:text-white text-gray-900 bg-gray-100 rounded-lg p-5 dark:border dark:border-gray-600'>
                    <h5 className='text-left font-medium text-gray-900 text-2xl pb-5 dark:text-gray-100'>
                        Reach your<br />
                        page-turning potential.
                    </h5>
                    <p className='text-left font-medium text-gray-500 text-base md:text-lg'>
                        Track your reading progress and celebrate achievements with Reading Goals — whether
                        that’s how much you read in a day, a new streak record, or how many books you’ve
                        read this year. And get encouragement to reach your daily goals.
                    </p>
                    <span className='flex justify-center pt-12 md:pt-24'>
                        <Image src="/assets/images/book_11.jpg" alt="iPhone" width={150} height={150} className="w-[200px] h-[200px] rounded-[30px]" />
                    </span>
                    <p className='text-[12px] py-2'>
                        <span className='font-bold'>1 more book</span> to reach your goal
                    </p>
                </section>

                <section className='w-full max-w-[25rem] h-full  bg-center bg-no-repeat dark:bg-gray-900 dark:text-white text-gray-900 bg-gray-100 rounded-lg p-5 dark:border dark:border-gray-600'>
                    <h5 className='text-left font-medium text-gray-900 text-2xl pb-5 dark:text-gray-100'>
                        Get personalized<br />
                        recommendations.
                    </h5>
                    <p className='text-left font-medium text-gray-500 text-base md:text-lg'>
                        The For You collection is a curated list of audiobooks, ebooks,
                        authors, and a Weekly Top 5 based on what’s already in your library.
                    </p>

                    <span className='flex text-left font-medium lg:mt-16 mb-3 mt-5'>For You</span>
                    <div className='flex flex-col md:flex-row justify-center gap-5'>
                        <div className='flex flex-col items-center'>
                            <Image src="/assets/images/iphone_04.png" alt="iPhone" width={150} height={150} className="w-[140px] h-[250px]" />
                            <p className='text-[12px] font-medium'>The Midnight Library</p>
                            <span className='text-[12px] text-gray-500'>Matt Haig</span>
                        </div>
                        <div className=' hidden sm:block '>
                            <div className='flex flex-col items-center '>
                                <Image src="/assets/images/iphone_03.png" alt="iPhone" width={150} height={150} className="w-[140px] h-[250px]" />
                                <p className='text-[12px] font-medium'>A World of Curiosities</p>
                                <span className='text-[12px] text-gray-500'>Louise Penny</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className=' flex justify-center'>
                <section className=" w-[50rem]  bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900 bg-gray-100 rounded-lg p-[20px] dark:border dark:border-gray-600">
                    <div className="px-4 mx-auto  text-center ">
                        <h4 className=' text-[25px] text-gray-900 text-left py-5  font-medium dark:text-white '>Pick up where you left off.</h4>
                        <p className=' text-left font-bold text-gray-500 text-[18px]'>
                            iCloud syncs your progress. So even when you switch devices, you’ll pick up right where
                            you left off in your audiobook or ebook. And download your Apple Books titles to your
                            device for offline reading or listening.
                        </p>
                        <span className=' flex justify-center py-12'>
                            <Image src="/assets/images/amazon-ipad.jpg" alt="iPhone" width={150} height={150} className="lg:w-[550px]  rounded-lg w-[300px]" />
                        </span>
                    </div>
                </section>
            </div>


        </>
    )
}

export default Content