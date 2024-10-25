import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Explore() {

    const arry = [
        { imag: '/assets/images/iphon2.jpg', color: ['bg-red-500', 'bg-green-500', 'bg-blue-500',], titel: 'iPhone 16 Pro', name: 'The ultimate iPhone.', desc: 'From $999 or $41.62/mo. for 24 mo.**' },
        { imag: '/assets/images/iphon4.jpg', color: ['bg-indigo-500', 'bg-purple-500', 'bg-green-500', 'bg-blue-500',], titel: 'iPhone 16 ', name: 'A total powerhouse.', desc: 'From $799 or $33.29/mo. for 24 mo.**' },
        { imag: '/assets/images/iphon6.jpg', color: ['bg-teal-500', 'bg-red-500', 'bg-pink-500', 'bg-blue-500',], titel: 'iPhone 14', name: 'All kinds of awesome..', desc: 'From $599 or $24.95/mo. for 24 mo.**' },
        { imag: '/assets/images/iphone5.jpg', color: ['bg-blue-500', 'bg-red-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-blue-500',], titel: 'iPhone SE', name: 'Serious power. Serious value.', desc: 'From $429 or $17.87/mo. for 24 mo.**' },
    ]



    return (
        <div className="">
            <div className=" lg:w-[1450px] w-[300px] ">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 15 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {arry.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex  flex-col items-center'>
                                <Image src={item.imag} width={150} height={300} className='h-[300px] w-[150px] rounded-3xl' alt={item.titel} />
                                <div className=' flex justify-center my-5'>
                                    <div className="flex space-x-2">
                                        {
                                            item.color.map((color, index) => (
                                                <span className={`${color} w-3 h-3 rounded-lg`} key={index}></span>
                                            ))
                                        }
                                    </div>
                                </div>
                                {
                                    index < 2 ? <span className='flex justify-center text-red-500'>New</span>
                                        : <span className=' my-3'></span>
                                }
                                <h1 className='flex justify-center text-[30px] font-medium'> {item.titel} </h1>
                                <p className=' flex justify-center my-3'>{item.name}</p>
                                <p className=' flex justify-center font-medium '>{item.desc}</p>
                                <div className=' my-7 flex '>
                                    <button className=' py-3 px-5 bg-blue-700 text-white font-medium  rounded-3xl mr-20'>Learn more</button>
                                    <p className=' text-[17px]  font-medium mt-3 cursor-pointer text-blue-700 flex'>Buy <IoIosArrowForward className=' mt-1' /></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

