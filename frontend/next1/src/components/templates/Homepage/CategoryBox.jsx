import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryBox = ({ src, title, hasScale }) => {
      return (
            <Link href={"/translation"} className={`flex flex-col items-center gap-2 ${hasScale ? `md:scale-[1.2]` : ""}`}>
                  <div className={`flex flex-col gap-4 justify-center px-20 py-8 w-[300px] h-[220px] items-center bg-[#000] rounded-2xl border border-[#ECECEC]`}>
                        <div className="relative lg:w-[96px] w-[55px] lg:h-[96px] h-[55px]">
                              <Image src={src} alt='category-image' fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" />
                        </div>
                        <span className='font-medium md:text-lg text-sm text-center text-white'>{title}</span>
                  </div>
                  <span className='font-medium md:text-lg text-sm text-[#777]'>+200 فریلنسر</span>
            </Link>
      )
}

export default CategoryBox