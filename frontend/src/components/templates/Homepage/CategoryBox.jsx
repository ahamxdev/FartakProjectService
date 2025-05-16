import Image from 'next/image'
import React from 'react'

const CategoryBox = () => {
      return (
            <div className='flex flex-col items-center gap-2'>
                  <div className="flex flex-col gap-4 justify-center px-20 py-8 items-center bg-[#000] rounded-2xl border border-[#ECECEC]">
                        <div className="relative lg:w-[96px] w-[55px] lg:h-[96px] h-[55px]">
                              <Image src={"/images/Index.png"} alt='category-image' fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" />
                        </div>
                        <span className='font-medium md:text-lg text-sm text-center text-white'>توسعه نرم افزار و ای تی</span>
                  </div>
                  <span className='font-medium md:text-lg text-sm text-[#777]'>+200 فریلنسر</span>
            </div>
      )
}

export default CategoryBox