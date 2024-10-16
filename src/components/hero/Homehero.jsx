import React from 'react'
import Content from './Content'
import { GiSmartphone } from "react-icons/gi";
import { MdTabletMac } from "react-icons/md";
import { TbDeviceImac } from "react-icons/tb";
import { TbDeviceVisionPro } from "react-icons/tb";
import { CgAppleWatch } from "react-icons/cg";
import { LuPlaySquare } from "react-icons/lu";



function Homehero() {
    return (
        <section className=" bg-center bg-no-repeat dark:bg-gray-900  dark:text-white text-gray-900">
            <div className="px-4 mx-auto  text-center pt-24 lg:pt-32">
                <h1 className="mb-20 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
                    A novel reading and <br />
                    listening experience.
                </h1>
                <div >
                    <Content />
                </div>
                <div className='  bg-gray-100 my-10 py-5 rounded-lg dark:bg-gray-900 dark:border dark:border-gray-600'>
                    <h1 className=' font-bold lg:text-[60px] text-[30px]'>
                        Read and listen on<br />
                        your favorite devices.
                    </h1>
                    <div className="space-y-12 py-12">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            <div className="text-center dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <GiSmartphone className="text-[100px]" />
                                <p className="pt-4 font-medium text-[20px]">iPhone</p>
                            </div>
                            <div className="text-center dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <MdTabletMac className="text-[100px]" />
                                <p className="pt-4 font-medium text-[20px]">iPad</p>
                            </div>
                            <div className="text-center dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <TbDeviceImac className="text-[100px]" />
                                <p className="pt-4 font-medium text-[20px]">Mac</p>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            <div className="text-center dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <CgAppleWatch className="text-[100px]" />
                                <p className="pt-4 font-medium text-[20px]">Apple Watch</p>
                            </div>
                            <div className="text-center hidden sm:block dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <LuPlaySquare className="text-[100px] " />
                                <p className="pt-4 font-medium text-[20px]">CarPlay</p>
                            </div>
                            <div className="text-center hidden sm:block dark:hover:border-orange-400 dark:hover:border rounded-lg p-3">
                                <TbDeviceVisionPro className="text-[100px] " />
                                <p className="pt-4 font-medium text-[20px]">Apple Vision </p>
                            </div>
                        </div>
                    </div>

                </div>

               

            </div>
        </section>
    )
}

export default Homehero