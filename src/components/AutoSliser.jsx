import Image from 'next/image'
import Link from 'next/link';
import { IoIosPlayCircle } from "react-icons/io";


export default function AutoSliser({ images, movementSpeed }) {
    return (
        <>
            <div className=' slider h-72 mt-10 overflow-hidden flex'>
                <div className=' flex gap-5 cursor-pointer animate-awipe hover:[animation-play-state:paused]' style={{ animationDuration: `${movementSpeed}s` }}>
                    {
                        [...images, ...images, ...images, ...images].map(({ src, title, author ,id }, index) => (
                            <div className='relative group flex flex-col items-start  flex-shrink-0' key={index}>
                                <Image src={src} alt={title} width={195} height={195} className='w-52 h-52 object-cover rounded-md' />
                                <div className="w-52 h-52 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                                    <Link
                                        href={{
                                            pathname: '/bookinfo',
                                            query: {id },
                                          }}
                                        className=" text-gray-900 inset-0border px-4 py-2 bg-white rounded-[60px] opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  flex items-center justify-center"
                                    >
                                        <span className='flex items-center gap-1 '>Listen now <IoIosPlayCircle /></span>
                                    </Link>
                                </div>
                                <span className=' pt-2'>{title}</span>
                                <span className=' text-gray-400'>{author}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/*text-lg font-semibold underline border px-4 py-2 bg-white rounded-[60px]
          <Image
                  src={src}
                  alt={title}
                  width={195}
                  height={195}
                  className="w-52 h-52 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div
                  className="w-52 h-52 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-md flex items-center justify-center"
                >
                  <Link
                    href={''}
                    className="text-lg font-semibold underline border px-4 py-2 bg-white rounded-[60px]"
                  >
                    <span className="flex items-center gap-1">
                      Listen now <IoIosPlayCircle />
                    </span>
                  </Link>
                </div> 
           */}
        </>
    )
}
