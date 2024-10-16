import Image from 'next/image'


const SliderImage = [
    { src: "/assets/images/book_01.jpg", title: "Nuclear War", author: "Rebecca Yarros" },
    { src: "/assets/images/book_02.jpg", title: "Conviction", author: " Denise Mina" },
    { src: "/assets/images/book_03.jpg", title: "Hillbilly Elegy", author: "Sarah J.Maas" },
    { src: "/assets/images/book_04.jpg", title: "Harry Poter", author: "Liz Moore" },
    { src: "/assets/images/book_05.jpg", title: "Irom Flame", author: "Tessa Bailey" },
    { src: "/assets/images/book_06.jpg", title: "Irom Flame", author: "Tessa Bailey" },
    { src: "/assets/images/book_07.jpg", title: "Irom Flame", author: "Tessa Bailey" },

]


export default function AutoSliser() {
    return (
        <>
            <div className=' slider h-72 mt-10 overflow-hidden flex'>
                <div className=' flex gap-5 cursor-pointer animate-awipe'>
                    {
                        [...SliderImage, ...SliderImage, ...SliderImage, ...SliderImage].map(({ src, title, author }) => (
                            <div className=' flex flex-col items-start   flex-shrink-0'>
                                <Image src={src} alt={title} width={195} height={195} className=' w-52 h-52 object-cover rounded-md' />
                                <span className=' pt-2'>{title}</span>
                                <span className=' text-gray-400'>{author}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
