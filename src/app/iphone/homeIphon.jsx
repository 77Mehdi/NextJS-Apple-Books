"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


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
      <div>
        <h1 className="font-bold lg:text-[70px] text-gray-900 dark:text-white text-[40px] "> Get to know iPhone.</h1>
        <div>
           <div className=' w-[300px] h-[600px] border border-gray-400 rounded-3xl'>
           <Image src={"/assets/images/iphone_01.png"} width={100} height={200} className=' w-[200px]'/>
           </div>
        </div>
      </div>



    </section>

  )
}
