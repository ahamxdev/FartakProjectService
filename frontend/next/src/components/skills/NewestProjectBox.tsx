import Link from 'next/link'
import React from 'react'

const NewestProjectBox = () => {
      return (
            <div className='border-[2px] border-[#1D40D7] rounded-2xl flex flex-col gap-6 p-4' id='new-project-box'>
                  <h6 className='font-bold text-sm md:text-lg text-[#1450A3]'>طراحی سایت سایت فروشگاهی</h6>
                  <div className="flex items-center justify-between">
                        <span className='font-normal md:text-sm text-xs text-[#1450A380]'>1 ساعت پیش</span>
                        <span className='bg-[#EEF5FF] rounded-lg px-2 py-1 font-normal md:text-sm text-xs text-[#1450A3]'>در حال بررسی</span>
                  </div>
                  <p className='font-normal md:text-sm text-xs text-black'>
                        توضیحات مختصر درباره پروژه و خروجی پروژه و مدت زمان انجام آن و نوع سایت و هر توضیح اضافه ای که لازم باشد
                  </p>
                  <Link href={"/"} className='rounded-lg bg-[#1D40D7] md:py-2 py-1 flex justify-center items-center w-full md:text-sm text-xs font-normal text-white'>ثبت پروژه مشابه</Link>
            </div>
      )
}

export default NewestProjectBox