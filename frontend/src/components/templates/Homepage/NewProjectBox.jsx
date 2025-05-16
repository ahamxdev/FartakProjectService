import Link from 'next/link'
import React from 'react'

const NewProjectBox = () => {
      return (
            <div className='rounded-[20px] bg-[#fbfbfb] py-2.5 px-4 flex flex-col gap-3' id='new-project-box'>
                  <span className='text-sm font-normal text-[#1E2531]'>1 ساعت پیش</span>
                  <h3 className='md:text-xl text-base text-[#1D40D7] font-bold'>طراحی رابط کاربری سایت مواد غذایی</h3>
                  <h5 className='flex items-center gap-1.5 md:text-base text-sm font-bold text-[#000]'>
                        <span className='md:w-6 md:h-6 w-4 h-4'>
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                              </svg>
                        </span>
                        بودجه از 5.000.000 تا 10.000.000 تومان
                  </h5>
                  <p className='font-normal md:text-sm text-xs leading-6 text-[#1E2531]'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با ...
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                        <Link className='rounded-lg flex justify-center items-center md:px-10 px-5 md:py-3 py-2 bg-[#1E2531] font-extrabold md:text-base text-sm text-white' href={"/"}>ثبت پیشنهاد</Link>
                        <Link className='rounded-lg flex justify-center items-center md:px-10 px-5 md:py-3 py-2 bg-none font-extrabold md:text-base text-sm text-[#1E2531] border border-[#1E2531]' href={"/"}>مشاهده پروژه</Link>
                  </div>
            </div>
      )
}

export default NewProjectBox