import React from 'react'
import SkillFooter from '@/components/modules/MainFooter'
import ManagerListBox from '@/components/modules/ManagerListBox'
import ManagerListHeader from '@/components/modules/ManagerListHeader'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
      return (
            <>
                  <ManagerListHeader />

                  <div className="flex w-[50%] mx-auto md:my-10 my-5 justify-center items-center">
                        <h6 className='text-center text-[#1E1E1E] md:text-3xl text-xl font-bold'>
                              مدیران <span className='text-[#FAB437]'>فرتاک</span> متخصص در حوزه خدمات وب‌سایت
                        </h6>
                  </div>

                  <section className='w-[90%] mx-auto md:my-12 my-5 flex justify-between items-center gap-6 flex-wrap'>
                        <Link href={"/"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                  </section>

                  <div className='flex items-center gap-3.5 w-[90%] mx-auto md:my-6 my-3'>
                        <span className='flex gap-0.5'>
                              <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.47852L0.999999 33.4785" stroke="#FAB437" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                              <svg className='self-end' width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.47852L0.999999 17.4785" stroke="#1E2531" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                        </span>
                        <h2 className="md:text-2xl text-sm font-black">مدیران طراحی وب و رابط کاربری (UI/UX)</h2>
                  </div>

                  <div className='flex items-center gap-3.5 w-[90%] overflow-x-auto py-3 mx-auto md:my-6 my-3'>
                        <span className='text-black font-medium whitespace-nowrap md:text-xl text-sm'>فیلتر ها :</span>

                        <div className="flex items-center gap-4">
                              <button className='bg-[#1E2531] w-[220px] rounded-2xl text-white md:text-sm text-xs font-semibold flex items-center gap-3 px-8 py-2'>طراحی رابط کاربری (Ui)
                                    <span className='cursor-pointer'>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 1.00007L1 13M13 12.9999L1 1" stroke="#F3B036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                    </span>
                              </button>

                              <button className='bg-[#FBFBFB] w-[220px] border cursor-pointer border-[#C2C2C2] rounded-2xl text-[#000] md:text-sm text-xs font-normal flex items-center gap-3 px-8 py-2'>طراحی فروشگاه اینترنتی
                              </button>
                              <button className='bg-[#1E2531] w-[220px] rounded-2xl text-white md:text-sm text-xs font-semibold flex items-center gap-3 px-8 py-2'>طراحی رابط کاربری (Ui)
                                    <span className='cursor-pointer'>
                                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 1.00007L1 13M13 12.9999L1 1" stroke="#F3B036" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                    </span>
                              </button>

                              <button className='bg-[#FBFBFB] w-[220px] border cursor-pointer border-[#C2C2C2] rounded-2xl text-[#000] md:text-sm text-xs font-normal flex items-center gap-3 px-8 py-2'>طراحی فروشگاه اینترنتی
                              </button>
                        </div>
                  </div>

                  <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-[90%] mx-auto md:my-6 my-3'>
                        <ManagerListBox />
                        <ManagerListBox />
                        <ManagerListBox />
                        <ManagerListBox />
                        <ManagerListBox />
                        <ManagerListBox />
                        <ManagerListBox />
                  </section>

                  <SkillFooter />
            </>
      )
}

export default page