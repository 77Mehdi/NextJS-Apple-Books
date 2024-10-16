import React from 'react'
import AutoSliser from './AutoSliser'

const SliderImage1 = [
    { src: "/assets/images/book_01.jpg", title: "Nuclear War", author: "Rebecca Yarros" },
    { src: "/assets/images/book_02.jpg", title: "Conviction", author: " Denise Mina" },
    { src: "/assets/images/book_03.jpg", title: "Hillbilly Elegy", author: "Sarah J.Maas" },
    { src: "/assets/images/book_04.jpg", title: "Harry Poter", author: "Liz Moore" },
    { src: "/assets/images/book_05.jpg", title: "Irom Flame", author: "Tessa Bailey" },
    { src: "/assets/images/book_06.jpg", title: "Irom Flame", author: "Tessa Bailey" },
    { src: "/assets/images/book_07.jpg", title: "Irom Flame", author: "Tessa Bailey" },

]

const SliderImage2 = [
    { src: "/assets/images/book_08.jpg", title: "Irom Flam" , author: " Tessa Bailey" },
    { src: "/assets/images/book_09.jpg", title: "The 48 Laws of Power", author: "Robert Greene" },
    { src: "/assets/images/book_10.jpg",title: "Irom Flame" , author: "Sarah J.Maas" },
    { src: "/assets/images/book_11.jpg", title: "Harry Poter", author: "  Denise Mina" },
    { src: "/assets/images/book_12.jpg",  title: "Hillbilly Elegy", author: "Tessa Bailey" },
    { src: "/assets/images/book_13.jpg", title: "Nuclear War", author: "Rebecca Yarros " },
    { src: "/assets/images/book_14.jpg", title: "It Starts with Us (Unabridged)", author: "Colleen Hoover" },

]


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
                    <ul className=' flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 dark:text-gray-900 '>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Bestselling Audiobooks</li>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>New & Trending Ebooks</li>
                        <li className=' px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white'>Fan-Favorite Audiobooks</li>
                    </ul>
                </div>

                <AutoSliser images={SliderImage1} movementSpeed={25}/>
                <AutoSliser images={SliderImage2} movementSpeed={40}/>

            </div>
        </section>
    )
}

export default HeroFilter