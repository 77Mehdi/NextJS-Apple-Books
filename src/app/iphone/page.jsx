import React from 'react'
import HeaderIphon from './header'
import HomeIphon from './homeIphon'




function page() {
  return (
    <>
      <section className=''>
        <div className='  flex justify-center'>
          <HeaderIphon />
        </div>
        <div className=' flex justify-center p-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 my-5'>
          <p className=' '>
            Get $180 $650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.
            <span className=' text-blue-500  text-[13px] cursor-pointer'> Shop iPhone </span>
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <HomeIphon />
        </div>

      </section>
    </>
  )
}

export default page