import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SkillFooter from '@/components/skills/SkillFooter'
import ManagerListHeader from '@/components/skills/ManagerListHeader'
import ManagerListBox from '@/components/skills/ManagerListBox'

const ManagerList = () => {
      return (
            <>
                  <ManagerListHeader />

                  <div className="flex w-[50%] mx-auto md:my-10 my-5 justify-center items-center">
                        <h6 className='text-center text-[#1E1E1E] md:text-3xl text-xl font-bold'>
                              مدیران تخصصی <span className='text-[#FAB437]'>فرتاک</span> آماده پاسخگویی و راهنمایی در مسیر یادگیری شما هستند
                        </h6>
                  </div>
                  <div className="flex w-[60%] mx-auto my-5 items-center gap-3 border border-[#7E7E7E] rounded-md p-2">
                        <span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                        </span>
                        <input className='w-full bg-transparent border-none outline-none' type="text" placeholder='جستوجو کنید...' />
                  </div>

                  <section className='w-[90%] mx-auto md:my-12 my-5 flex justify-between items-center gap-6 flex-wrap'>
                        <Link href={"/projects/managerlist/website"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/projects/managerlist/website"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/projects/managerlist/website"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/projects/managerlist/website"} className="flex flex-col items-center gap-2">
                              <div className="flex justify-center items-center px-14 py-6 bg-[#1E2531] rounded-lg">
                                    <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                                          <Image src={"/images/web-coding 1.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <span className='font-normal text-[#1E2531] md:text-lg text-sm'>طراحی و گرافیک</span>
                        </Link>
                        <Link href={"/projects/managerlist/website"} className="flex flex-col items-center gap-2">
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

                  <div className='flex items-center gap-3.5 w-[90%] mx-auto md:my-12 my-5'>
                        <span className='flex gap-0.5'>
                              <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.47852L0.999999 33.4785" stroke="#FAB437" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                              <svg className='self-end' width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.47852L0.999999 17.4785" stroke="#1E2531" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                        </span>
                        <h2 className="md:text-2xl text-sm font-black">مدیران</h2>
                  </div>

                  <section className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-[90%] mx-auto md:my-12 my-5 '>
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

export default ManagerList