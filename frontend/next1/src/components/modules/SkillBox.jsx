import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SkillBox = () => {
      return (
            <div id='skill-box' className='bg-[#EEF5FF] rounded-2xl p-4 flex flex-col items-center gap-3'>
                  <div className="relative lg:w-[220px] w-[150px] lg:h-[200px] h-[130px]">
                        <Image src={"/images/image 13.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='skill-box-image' />
                  </div>
                  <h6 className='text-[#1D40D7] md:text-xl text-base font-bold'>طراحی لندینگ پیچ</h6>
                  <Link href={"/skills/ui"} className='rounded-lg bg-[#1d40d7] flex justify-center items-center w-full py-1 text-white text-sm font-normal'>مشاهده اطلاعات</Link>
            </div>
      )
}

export default SkillBox