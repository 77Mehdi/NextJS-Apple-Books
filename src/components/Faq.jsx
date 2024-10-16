import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const faq = [
    {
        question: "What is Apple Books?",
        answer: "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks, and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store."
    },

    {
        question: "Can I gift an audiobook or ebook?",
        answer: "Yes. You can use Apple Books to gift an audiobook or ebook to anyone. Search for the title and select the gift box symbol to complete the purchase."
    },
    {
        question: "How do I download books for offline reading?",
        answer: "Simply tap the download icon next to the book or audiobook in your library. Once downloaded, you can access it without an internet connection."
    },

    {
        question: "Does Apple Books support PDF files?",
        answer: " You can import and read PDF files within Apple Books. Just share the PDF to the Apple Books app, and it will be saved to your library."
    },

    {
        question: "Are there free books available on Apple Books?",
        answer: " Apple Books offers a selection of free ebooks and audiobooks. You can find them by browsing the 'Free' section in the app."
    },
    {
        question: "Can I highlight and add notes to books?",
        answer: "Yes. You can highlight text, add notes, and even bookmark pages in ebooks. All your highlights and notes will sync across your devices with iCloud."
    },
    {
        question: "What formats are supported by Apple Books?",
        answer: "Apple Books supports EPUB, PDF, and audiobooks in M4B format. Other ebook formats need to be converted before they can be imported."
    }
];


function Faq() {
    return (
        <section className=" bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900 ">
            <div className="px-4 mx-auto  max-w-screen-xl text-center py-24 lg:py-32">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
                    Questions? Answers.
                </h1>
                <Accordion collapseAll className=' border-none'>
                    {
                        faq.map(({ question, answer },index) => (
                            <AccordionPanel key={index}>
                                <AccordionTitle className=' text-gray-900 text-xl'>{question}</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-left text-gray-700 dark:text-gray-400">
                                        {answer}
                                    </p>

                                </AccordionContent>
                            </AccordionPanel>
                        ))
                    }

                </Accordion>
            </div>
        </section>
    )
}

export default Faq




