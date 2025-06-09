import Image from 'next/image'
import React from 'react'

const CategoryHeader = ({ title }) => {
      return (
            <>
                  <div id='category-header' className='w-full relative md:h-[415px] h-[200px] my-4 pb-4 md:pb-0 md:pt-12 pt-3'>
                        <div className="absolute top-0 left-0 bottom-0 right-0">
                              <div className="relative w-full md:h-[415px] h-[200px]">
                                    <Image src={"/images/AI Generator.png"} fill
                                          sizes="100vw, auto"
                                          className="w-full h-full" alt='mainheader-image' />
                              </div>
                        </div>
                        <h1 className='font-bold relative z-10 md:text-4xl text-xl mt-[30%] sm:mt-[19%] md:mt-[35%] lg:mt-[20%] text-[#fff] flex justify-center items-end'>توسعه نرم افزار و آی تی</h1>
                  </div>
            </>
      )
}

export default CategoryHeader