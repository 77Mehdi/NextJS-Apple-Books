"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { data } from '../../../public/assets/data/data';
import BookDetails from './info';

// A separate component to handle book details
const BookInfoContent = () => {
    const searchParams = useSearchParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const id = searchParams.get('id');
        const foundBook = data.find(item => item.id === parseInt(id));
        setBook(foundBook);
    }, [searchParams]);

    return (
        <div className='max-w-[1000px] mx-auto px-4'>
            {book ? (
                <BookDetails book={book} />
            ) : (
                <p>Book not found.</p>
            )}
        </div>
    );
};

const BookInfo = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className='dark:bg-gray-900 dark:text-white text-gray-900'>
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="hidden sm:flex justify-between items-center py-12">
                        <h2 className="text-[24px] font-medium">
                            <span className="text-gray-500">Preview </span> Books
                        </h2>
                        <div className="text-[13px] mt-2">
                            <a href="#" className="hover:text-blue-600 mx-4">Top Books</a>
                            <a href="#" className="hover:text-blue-600">Top Audiobooks</a>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 w-full"></div>
                </div>

                <BookInfoContent />
            </section>
        </Suspense>
    );
};

export default BookInfo;
