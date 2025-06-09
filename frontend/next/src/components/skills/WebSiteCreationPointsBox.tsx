import Image from 'next/image'
import React from 'react'

const WebSiteCreationPointsBox = () => {
      return (
            <div className='flex flex-col gap-5 items-center'>
                  <div className="relative lg:w-[240px] w-[120px] lg:h-[240px] h-[120px]">
                        <Image src={"/images/web-creation-point.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='text-[#1D40D7] font-bold md:text-base text-xs text-center'>
                        امکان مشاهده و انتخاب از بین نمونه کارها و متخصصین مختلف
                  </span>
            </div>
      )
}

export default WebSiteCreationPointsBox