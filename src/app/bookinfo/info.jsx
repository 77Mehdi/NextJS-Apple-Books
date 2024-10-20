
import Image from 'next/image';
import React from 'react';
import StarRating from './StarRaiting';
import { GoArrowUpRight } from "react-icons/go";
import { MdPlayArrow } from "react-icons/md";
import { PiUploadFill } from "react-icons/pi";


const BookDetails = ({ book }) => {
    // console.log(book)
    return (
        <>
            <section className=' mt-10 items-center  ' >
                <div className=' flex lg:gap-16 gap-5 flex-col lg:flex-row ml-10 lg:ml-0'>
                    <Image src={`/assets${book.imag}`} width={150} height={100} className=' lg:w-[350px] lg:h-[350px] w-[150px] h-[150px] rounded-md  shadow-custom' />
                    <div className=' flex flex-col'>
                        {/* author desc imag prise rating title*/}
                        <h1 className=' font-bold text-[25px]'>{book.title}</h1>
                        <h3 className=' font-medium text-blue-500 my-3'>{book.author}</h3>
                        <span> <StarRating rating={book.rating} /> </span>

                        <span className=''> {book.prise} </span>
                        <div className='my-3  flex gap-3'>
                            <span className='flex cursor-pointer items-center border border-blue-500 rounded-md py-2 max-w-[50px] px-4 text-blue-500 bg-white hover:text-blue-700 transition-all duration-300'><GoArrowUpRight /></span>
                            <span className='flex cursor-pointer items-center border border-blue-500 rounded-md py-2 max-w-[100px] px-4 text-blue-500 bg-white hover:text-blue-700 transition-all duration-300'> <MdPlayArrow className='mr-1' />  Listen</span>
                            <div className='  flex items-center  cursor-pointer ml-4 text-blue-500'><PiUploadFill /></div>
                        </div>
                        <p className='flex items-center text-blue-500 text-[14px] '>Also available in the <span className=' mx-1 font-medium text-blue-500'>Book Store</span> <GoArrowUpRight /></p>
                    </div>
                </div>
                <div className='border-t my-10  border-gray-300'></div>
                <div>
                    <h1 className=' font-medium text-[20px] my-5'>Publisher Description</h1>
                    <p className=" text-justify text-[15px] text-gray-500 text-base mt-4 leading-relaxed  first-line:font-medium dark:first-line:text-gray-300 first-line:text-gray-950 ">
                        {book.desc}
                    </p>


                </div>

            </section>
        </>
    );
};

export default BookDetails;
