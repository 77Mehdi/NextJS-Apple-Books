
import Image from 'next/image';
import { useState } from 'react';
import StarRating from './StarRaiting';
import { GoArrowUpRight } from "react-icons/go";
import { MdPlayArrow } from "react-icons/md";
import { PiUploadFill } from "react-icons/pi";
import { GiSpellBook } from "react-icons/gi";
import { GiFigurehead } from "react-icons/gi";
import ReadMore from './redmore';

const BookDetails = ({ book }) => {

    const footerText = ` Actress Bethany Joy Lenz tells the strange, startling true story of how she rose to
                        stardom while her life was being torn apart by a religious cult in this one-of-a-kind
                        celebrity memoir. An only child raised by deeply religious parents, Lenz was just 20
                        when she landed her big break playing Haley on the hit TV series One Tree Hill. While
                        adjusting to life in Los Angeles, she began attending a Bible study that gave her a
                        sense of family and acceptance. That changed as she was pulled into the Big House Family,
                        who controlled her life, forced her into an arranged marriage, derailed her career, and
                        stole her money. Lenz pulls no punches in her depiction of life in a cult, but the horrors
                        are buffered by her often witty tales of her time acting and her determination to win her
                        sense of agency back. Lenz’s reading is superb, giving life to the many remarkable
                        characters she met along the way. This will grab you even if you never watched One
                        Tree Hill
                        `



    return (
        <>
            <section className=' mt-10 items-center  ' >
                <div className=' flex lg:gap-16 gap-5 flex-col lg:flex-row ml-10 lg:ml-0'>
                    <Image src={`/assets${book.imag}`} width={150} height={100} className=' lg:w-[350px] lg:h-[350px] w-[150px] h-[150px] rounded-md  shadow-custom' />
                    <div className=' flex flex-col'>
                        <h1 className=' font-bold text-[25px]'>{book.title}</h1>
                        <h3 className=' font-medium text-blue-500 my-3'>{book.author}</h3>
                        <span> <StarRating rating={book.rating} /> </span>

                        <span className=''> {book.prise} </span>
                        <div className='my-3  flex gap-3'>
                            <span className='flex cursor-pointer items-center border border-blue-500 rounded-md py-2 max-w-[50px] px-4 text-blue-500 bg-white hover:text-blue-700 transition-all duration-300'><GoArrowUpRight /></span>
                            <span className='flex cursor-pointer items-center border border-blue-500 rounded-md py-2 max-w-[100px] px-4 text-blue-500 bg-white hover:text-blue-700 transition-all duration-300'> <MdPlayArrow className='mr-1' />  Listen</span>
                            <div className='  flex items-center  cursor-pointer ml-4 text-blue-500'><PiUploadFill /></div>
                        </div>
                        <p className='flex items-center text-blue-500 text-[14px] '>Also available in the <span className=' mx-1 font-medium text-blue-500 cursor-pointer'>Book Store</span> <GoArrowUpRight /></p>
                    </div>
                </div>
                <div className='border-t my-10  border-gray-300'></div>
                <div className=' my-10'>
                    <h1 className=' font-medium text-[20px] my-5'>Publisher Description</h1>
                    <p className="text-justify text-[15px]  text-gray-500 mt-4 leading-relaxed first-line:font-medium dark:first-line:text-gray-300 first-line:text-gray-950">
                        <ReadMore text={book.desc} maxLength={200} />
                    </p>

                </div>
                <div>
                    <span className='border-b-2   border-gray-900 font-medium text-[13px] '> APPLE BOOKS REVIEW</span>
                    <div className=' flex mt-2'>
                        <span className=' text-[42px] m-3'>
                            <GiSpellBook className=' text-gray-700 dark:text-gray-300 ' />
                        </span>
                        <p className=' text-[15px] font-serif mb-5'>
                            <ReadMore text={footerText} maxLength={180} />

                        </p>
                    </div>
                </div>

                <div className="mt-10 dark:pb-8">
                    <div className="overflow-x-auto ">
                        <div className="flex justify-between min-w-[800px] sm:min-w-full">
                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">GENRE</span>
                                <p className=' flex justify-center'>  <GiFigurehead className=" text-black dark:text-gray-100 text-[30px]" /></p>
                                <p className="text-[11px] mb-[-6px] font-medium text-gray-500">Biographies &</p>
                                <span className="flex justify-center text-[11px] font-medium text-gray-500">Memoirs</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">NARRATOR</span>
                                <p className="flex justify-center text-black dark:text-gray-100 text-[25px] font-bold">BJL</p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">Bethany Joy Lenz</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">LANGUAGE</span>
                                <p className="flex justify-center text-black dark:text-gray-100 text-[25px] font-bold">EN</p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">English</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">DURATION</span>
                                <p className="flex justify-center text-black dark:text-gray-100 text-[25px] font-bold">08:17</p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">hr min</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">RELEASED</span>
                                <p className="flex justify-center text-black dark:text-gray-100 text-[25px] font-bold">2024</p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">October 22</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">PUBLISHER</span>
                                <p className="flex justify-center text-[13px] dark:text-gray-100 font-medium text-gray-500 my-1">
                                    Simon & Schuster
                                </p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">Audio</span>
                            </div>

                            <div className="border-r pr-6">
                                <span className="flex justify-center text-[13px] font-bold text-gray-500">SIZE</span>
                                <p className="flex justify-center text-black dark:text-gray-100 text-[25px] font-bold">386.7</p>
                                <span className="flex justify-center text-[13px] font-medium text-gray-500">MB</span>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
        </>
    );
};

export default BookDetails;
