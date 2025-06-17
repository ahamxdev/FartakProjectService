"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import SubMenu from '@/components/skills/SubMenu'
import PortfolioBox from '@/components/skills/PortfolioBox'
import Pagination from '@/components/skills/Pagination'
// import Header from '@/components/modules/Header'

const Portfolio = () => {
      const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false)
      return (
            <>
                  {/* <Header /> */}

                  <div className="md:h-[480px] relative h-[250px] w-[90%] mx-auto" id='portfolio-header'>
                        <Image src={"/images/Frame 1261153489.png"} fill
                              sizes="(max-width: 768px) 100vw, auto"
                              className="w-full h-full" alt='logo' />
                  </div>

                  <section className='w-[90%] mx-auto md:my-10 my-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        <div className="flex relative items-center gap-4">
                              <button
                                    onClick={() => setIsSubMenuOpen(prev => !prev)}
                                    className='rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]'>
                                    مهارت
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                              <SubMenu isSubMenuOpen={isSubMenuOpen} items={["تست 1 " , "تست 2"]} />
                        </div>
                        <div className="flex relative items-center gap-4">
                              <button
                                    onClick={() => setIsSubMenuOpen(prev => !prev)}
                                    className='rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]'>
                                    برچسب
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                              <SubMenu isSubMenuOpen={isSubMenuOpen} items={["تست 1 " , "تست 2"]} />
                        </div>
                        <div className="relative rounded-lg border-[2px] gap-4 bg-[#fff] border-[#1D40D7] px-3 py-1 flex justify-between items-center ">
                              <input
                                    className='w-full text-base  font-normal cursor-pointer text-[#00000080]'
                                    placeholder='جست و جوی نمونه کار'
                              />
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                        </div>
                  </section>

                  <section className='w-[90%] mx-auto md:my-10 my-5 flex flex-col gap-8'>
                        <div className="flex sm:flex-row flex-col gap-6 justify-between items-center w-full">
                              <h6 className='font-bold md:text-[32px] text-xl text-black'>بازدید بر اساس</h6>
                              <div className="flex items-center gap-6">
                                    <button className='bg-transparent border-none outline-none md:text-lg font-normal text-xs text-[#1D40D7]'>همه نمونه کار ها</button>
                                    <button className='bg-transparent border-none outline-none md:text-lg font-normal text-xs text-[#8BAEF5]'>همه نمونه کار ها</button>
                                    <button className='bg-transparent border-none outline-none md:text-lg font-normal text-xs text-[#8BAEF5]'>همه نمونه کار ها</button>
                              </div>
                        </div>
                        <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6'>
                              <PortfolioBox />
                              <PortfolioBox />
                              <PortfolioBox />
                              <PortfolioBox />
                              <PortfolioBox />
                        </div>
                  </section>

                  <Pagination />

            </>
      )
}

export default Portfolio