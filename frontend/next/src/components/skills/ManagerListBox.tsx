import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ManagerListBox = () => {
      return (
            <div className='bg-[#FBFBFB] rounded-lg flex flex-col items-center px-10 py-6 gap-4 border border-[#c2c2c2]'>
                  <div className="relative lg:w-[88px] w-[44px] lg:h-[88px] h-[44px]">
                        <Image src={"/images/Ellipse 1560.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>
                  <h4 className='font-bold md:text-xl text-sm'>طراح Ui/Ux</h4>
                  <h5 className='font-medium md:text-lg text-xs'>مهزیار سودمند</h5>
                  <Link className='bg-[#1E2531] rounded-lg flex justify-center items-center px-14 whitespace-nowrap py-2 md:text-sm text-xs text-white font-extrabold' href={"/"}>ارسال پیام</Link>
            </div>
      )
}

export default ManagerListBox