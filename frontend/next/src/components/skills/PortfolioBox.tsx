import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortfolioBox = () => {
      return (
            <div className='p-4 rounded-[16px] bg-[#EEF5FF] flex flex-col gap-4' id='portfolio-box'>
                  <div className="relative lg:w-[248px] w-[160px] lg:h-[248px] h-[160px]">
                        <Image src={"/images/image 1300.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <span className='w-full md:text-2xl text-base text-[#1450A3] font-bold text-center'>
                        هلدینگ ریزآبادی
                  </span>
                  <span className='bg-[#BECCEB] text-[#3C3C3C] text-xs rounded-sm py-2 font-bold w-full flex justify-center items-center'>
                        طراحی اپلیکیشن موبایل
                  </span>
                  <Link href={"/"} className='w-full bg-[#1D40D7] rounded-lg flex justify-center items-center py-2 text-white font-normal text-sm'>
                        مشاهده جزئیات
                  </Link>
            </div>
      )
}

export default PortfolioBox