"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation';
import { data } from '../../../public/assets/data/data';
import BookDetails from './info';

function BookInfo() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');


    const book = data.find(item => item.id === parseInt(id));


    return (
        <>
            <section className=' dark:bg-gray-900  dark:text-white text-gray-900 '>
                <div className="max-w-[1000px] mx-auto px-4 ">
                    <div className="  hidden sm:flex justify-between items-center py-12">
                        <h2 className="text-[24px]  font-medium">
                            <span className="text-gray-500">Preview </span> Books
                        </h2>
                        <div className="text-[13px] mt-2 ">
                            <a href="#" className="hover:text-blue-600 mx-4">Top Books</a>
                            <a href="#" className="hover:text-blue-600">Top Audiobooks</a>
                        </div>
                    </div>
                    <div className="     border-t border-gray-300  w-full  "></div>
                </div>

                <div className=' max-w-[1000px] mx-auto px-4 '>
                    {book ? (
                        <BookDetails book={book} />
                    ) : (
                        <p>Book not found.</p>
                    )}
                </div>
            </section>

        </>
    )
}

export default BookInfo