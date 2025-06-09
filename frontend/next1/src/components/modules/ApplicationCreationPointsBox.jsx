import Image from 'next/image'
import React from 'react'

const ApplicationCreationPointsBox = () => {
      return (
            <div className='bg-[#EEF5FF] flex items-center gap-2 p-3 rounded-lg'>
                  <div className="relative lg:w-[120px] w-[60px] lg:h-[120px] h-[60px]">
                        <Image src={"/images/application-creation-point.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='text-[#1D40D7] font-bold md:text-base text-xs text-center'>
                        افزایش چشمگیر دیده شدن کسب و کار شما در بازار رقبا
                  </span>
            </div>
      )
}

export default ApplicationCreationPointsBox