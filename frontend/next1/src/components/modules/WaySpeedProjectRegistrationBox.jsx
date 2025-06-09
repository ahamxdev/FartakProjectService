import Image from 'next/image'
import React from 'react'

const WaySpeedProjectRegistrationBox = () => {
      return (
            <div className='py-6 px-10 cursor-pointer rounded-[20px] flex flex-col items-center gap-5' id='waySpeed-project-registration-box'>
                  <span className='md:text-xl text-sm font-medium text-[#000]'>متمایز</span>
                  <div className="relative lg:w-[140px] w-[70px] lg:h-[130px] h-[60px]">
                        <Image src={"/images/approved.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='md:text-xl text-sm font-medium text-[#000]'>price * 3</span>
            </div>
      )
}

export default WaySpeedProjectRegistrationBox