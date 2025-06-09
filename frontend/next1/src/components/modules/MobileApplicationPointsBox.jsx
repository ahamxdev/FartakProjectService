import Image from 'next/image'
import React from 'react'

const MobileApplicationPointsBox = () => {
      return (
            <div className='bg-[#EEF5FF] flex flex-col items-center gap-2 p-3 rounded-lg'>
                  <div className="relative lg:w-[160px] w-[80px] lg:h-[160px] h-[80px]">
                        <Image src={"/images/mobile-application-creation-box.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='text-[#1D40D7] font-bold md:text-base text-xs text-center'>
                        1.طراحی اپلیکیشن
                  </span>
            </div>
      )
}

export default MobileApplicationPointsBox