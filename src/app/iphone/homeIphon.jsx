"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider ';
import { IoIosArrowForward } from "react-icons/io";
import Explore from './Explore';


export default function HomeIphon() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="max-w-[1500px] mx-auto mt-12 px-4 ">
      <div className="lg:flex justify-between items-center lg:gap-[900px]  gap-0">
        <h1 className="font-bold lg:text-[70px] text-gray-900 dark:text-white text-[40px] ">
          iPhone
        </h1>
        <h1 className="font-bold lg:text-[30px] text-[20px] text-gray-700 dark:text-gray-300">
          Designed to be loved.
        </h1>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <video
          src={isSmallScreen ? "assets/images/iphon-hait.mp4" : "/assets/images/iphon-Video.mp4"}
          className={`w-full max-w-[90%] ${isSmallScreen ? "h-[70vh]" : "h-auto"} rounded-[30px] shadow-lg border border-gray-300 dark:border-gray-700`}
          controls
          autoPlay
          loop
          muted
        />
      </div>
      <div className=' ml-12 my-24'>

        <h1 className="  font-bold lg:text-[70px] text-gray-900 dark:text-white text-[30px] "> Get to know iPhone.</h1>

        <div className=' mt-12  '>
          <ImageSlider />
        </div>
      </div>

      <div className=' bg-gray-100 dark:bg-gray-400 py-[100px] px-4 rounded-xl'>
        <div className=' lg:flex lg:justify-between'>
          <h1 className=' lg:text-[50px] text-[30px]  font-bold '>Explore the lineup.</h1>
          <span className=' flex lg:mt-12 text-blue-500   font-medium cursor-pointer'>Compare all models <IoIosArrowForward className=' mt-1' /></span>
        </div>

        <div className=' mt-12  '>
          <Explore />
        </div>
      </div>



    </section>

  )
}
