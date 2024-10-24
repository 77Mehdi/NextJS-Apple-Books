import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { BsPhoneFlip } from "react-icons/bs";
import { TbDeviceAirpods } from "react-icons/tb";
import { IoIosImages } from "react-icons/io";


export default function HeaderIphon() {
    return (
        <section className=' max-w-[1500px] overflow-x-auto  flex gap-10 mt-12'>
            <div>
                <div className=' flex '>
                    <IoPhonePortraitOutline className='  text-[52px] mt-[10px] mr-[-27px] text-gray-600 dark:text-gray-100' />
                    <IoPhonePortraitOutline className='  text-[62px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] dark:text-gray-100'>iPhone 16 Pro</p>
                <span className=' flex justify-center text-[12px] text-red-500 '>New</span>
            </div>
            <div>
                <div className=' flex '>
                    <IoPhonePortraitOutline className='  text-[52px] mt-[10px] mr-[-27px] text-gray-600 dark:text-gray-100' />
                    <IoPhonePortraitOutline className='  text-[62px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] dark:text-gray-100'>iPhone 16 </p>
                <span className=' flex justify-center text-[12px] text-red-500'>New</span>
            </div>
            <div>
                <div className=' flex '>
                    <IoPhonePortraitOutline className='  text-[52px] mt-[10px] mr-[-27px] text-gray-600 dark:text-gray-100' />
                    <IoPhonePortraitOutline className='  text-[62px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] dark:text-gray-100'>iPhone 15 </p>

            </div>
            <div>
                <div className=' flex '>
                    <IoPhonePortraitOutline className='  text-[52px] mt-[10px] mr-[-27px] text-gray-600 dark:text-gray-100' />
                    <IoPhonePortraitOutline className='  text-[62px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] dark:text-gray-100'>iPhone 14 </p>

            </div>
            <div className=' my-2'>
                <div className=' '>
                    <IoPhonePortraitSharp className=' text-[45px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] my-2 dark:text-gray-100'>iPhone SE</p>

            </div>
            <div className=' my-2'>
                <div className=' '>
                    <BsPhoneFlip className=' text-[45px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] my-2 dark:text-gray-100'>Compare</p>

            </div>
            <div className=' my-2'>
                <div className=' '>
                    <TbDeviceAirpods className=' text-[45px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] mt-2 dark:text-gray-100'>AirPods</p>
                <span className=' flex justify-center text-[12px] text-red-500'>New</span>
            </div>
            <div className=' my-2'>
                <div className=' '>
                    <IoIosImages className=' text-[45px] text-gray-600 dark:text-gray-100' />
                </div>
                <p className=' flex justify-center text-gray-500 text-[13px] mt-2 dark:text-gray-100 '>Shop iPhone</p>

            </div>

        </section>
    )
}
