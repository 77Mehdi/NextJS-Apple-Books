import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const ImageSlider = () => {
    const swiperRef = useRef(null);

    return (
        <div className="">
            <div className=" lg:w-full w-[300px] ">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 15 },
                        1280: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {Array(10)
                        .fill()
                        .map((_, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={`/assets/images/iphone_0${(index % 5) + 1}.png`}
                                    width={250}
                                    height={500}
                                    alt={`iPhone ${index + 1}`}
                                    className="py-3 w-[250px] h-[500px] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className=' float-end'>
                <button onClick={() => swiperRef.current?.slidePrev()}>
                    <IoIosArrowDropleft className="text-[45px] text-gray-500" />
                </button>

                <button onClick={() => swiperRef.current?.slideNext()}>
                    <IoIosArrowDropright className="text-[45px] text-gray-700" />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
