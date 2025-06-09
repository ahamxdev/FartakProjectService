// import Image from 'next/image'
import React from 'react'

const MainHeader = () => {
      return (
            <div className='bg-[#C9E4F9] w-full md:h-[210px] lg:h-[300px] h-[100px] my-4'>
                  <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between w-[90%] mx-auto" id='main-header'>
                        {/* <div className="flex flex-col gap-5 mb-3 md:mb-0 mt-4">
                              <p className='md:text-[32px] text-xl text-[#000] font-normal'>در بین نمونه کار ها جستجو کنید</p>
                              <p className='md:text-xl text-sm text-[#000] font-normal'>و مطمئن پروژه‌های خود را برون‌سپاری کنید</p>
                        </div> */}
                        {/* <div className="relative lg:w-[368px] w-[200px] lg:h-[289px] h-[170px]">
                              <Image src={"/images/mainheader.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='mainheader-image' />
                        </div> */}
                  </div>
                  {/* <div className="w-[57%] relative z-10 mx-auto my-5 bg-white rounded-lg flex justify-between items-center md:py-3 py-1.5 px-1.5 mb-4">
                        <input type="text" className='w-[90%] bg-none border-none outline-none' />
                        <span className='md:w-7 md:h-7 w-4 h-4'>
                              <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4163 25.3737C6.82467 25.3737 1.45801 20.007 1.45801 13.4154C1.45801 6.8237 6.82467 1.45703 13.4163 1.45703C20.008 1.45703 25.3747 6.8237 25.3747 13.4154C25.3747 20.007 20.008 25.3737 13.4163 25.3737ZM13.4163 3.20703C7.78134 3.20703 3.20801 7.79203 3.20801 13.4154C3.20801 19.0387 7.78134 23.6237 13.4163 23.6237C19.0513 23.6237 23.6247 19.0387 23.6247 13.4154C23.6247 7.79203 19.0513 3.20703 13.4163 3.20703Z" fill="#121212" />
                                    <path d="M25.6664 26.5374C25.4447 26.5374 25.223 26.4558 25.048 26.2808L22.7147 23.9474C22.3764 23.6091 22.3764 23.0491 22.7147 22.7108C23.053 22.3724 23.613 22.3724 23.9514 22.7108L26.2847 25.0441C26.623 25.3824 26.623 25.9424 26.2847 26.2808C26.1097 26.4558 25.888 26.5374 25.6664 26.5374Z" fill="#121212" />
                              </svg>
                        </span>
                  </div> */}
            </div>
      )
}

export default MainHeader