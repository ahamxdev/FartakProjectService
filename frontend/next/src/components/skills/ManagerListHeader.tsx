"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BgDark from './BgDark'
import OrderSidebar from './OrderSidebar'

const ManagerListHeader = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false)

      return (
            <>
                  <header className='w-[90%] mx-auto md:my-5 my-2 flex justify-between items-center'>
                        <div className="flex items-center gap-4">
                              <div className='flex items-center gap-3'>
                                    <span className='block md:hidden cursor-pointer'
                                          onClick={() => setIsSidebarOpen(true)}
                                    >
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                          </svg>
                                    </span>
                                    <h2 className='font-semibold md:text-2xl text-lg text-black'>فرتاک</h2>
                              </div>
                              <ul className="md:flex hidden items-center gap-6">
                                    <li>
                                          <Link className='text-sm font-normal text-[#000]' href={"/"}>دوره‌های آموزشی </Link>
                                    </li>
                                    <li>
                                          <Link className='text-sm font-normal text-[#000]' href={"/"}>پروژه‌ها</Link>
                                    </li>
                                    <li>
                                          <Link className='text-sm font-normal text-[#000]' href={"/"}>فریلنسر ها</Link>
                                    </li>
                                    <li>
                                          <Link className='text-sm font-normal text-[#000]' href={"/"}>راهنما</Link>
                                    </li>
                              </ul>
                        </div>
                        <div className="flex items-center gap-4">
                              <div className="md:flex hidden bg-[#C9E4F933] rounded-lg py-2 px-3">
                                    <input type="text" className='bg-transparent border-none outline-none' />
                                    <span>
                                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4166 25.3737C6.82492 25.3737 1.45825 20.007 1.45825 13.4154C1.45825 6.8237 6.82492 1.45703 13.4166 1.45703C20.0083 1.45703 25.3749 6.8237 25.3749 13.4154C25.3749 20.007 20.0083 25.3737 13.4166 25.3737ZM13.4166 3.20703C7.78159 3.20703 3.20825 7.79203 3.20825 13.4154C3.20825 19.0387 7.78159 23.6237 13.4166 23.6237C19.0516 23.6237 23.6249 19.0387 23.6249 13.4154C23.6249 7.79203 19.0516 3.20703 13.4166 3.20703Z" fill="#121212" />
                                                <path d="M25.6661 26.5374C25.4444 26.5374 25.2228 26.4558 25.0478 26.2808L22.7144 23.9474C22.3761 23.6091 22.3761 23.0491 22.7144 22.7108C23.0528 22.3724 23.6128 22.3724 23.9511 22.7108L26.2844 25.0441C26.6228 25.3824 26.6228 25.9424 26.2844 26.2808C26.1094 26.4558 25.8878 26.5374 25.6661 26.5374Z" fill="#121212" />
                                          </svg>
                                    </span>
                              </div>
                              <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12.0201 20.3483C9.44011 20.3483 6.87011 19.9383 4.42011 19.1183C3.51011 18.8183 2.82011 18.1683 2.52011 17.3483C2.22011 16.5283 2.32011 15.5883 2.81011 14.7683L4.08011 12.6483C4.36011 12.1783 4.61011 11.2983 4.61011 10.7483V8.64828C4.61011 4.55828 7.93011 1.23828 12.0201 1.23828C16.1101 1.23828 19.4301 4.55828 19.4301 8.64828V10.7483C19.4301 11.2883 19.6801 12.1783 19.9601 12.6483L21.2301 14.7683C21.7001 15.5483 21.7801 16.4783 21.4701 17.3283C21.1601 18.1783 20.4801 18.8283 19.6201 19.1183C17.1701 19.9483 14.6001 20.3483 12.0201 20.3483ZM12.0201 2.74828C8.76011 2.74828 6.11011 5.39828 6.11011 8.65828V10.7583C6.11011 11.5683 5.79011 12.7383 5.37011 13.4283L4.10011 15.5583C3.84011 15.9883 3.78011 16.4483 3.93011 16.8483C4.08011 17.2483 4.42011 17.5483 4.90011 17.7083C9.50011 19.2383 14.5601 19.2383 19.1601 17.7083C19.5901 17.5683 19.9201 17.2483 20.0701 16.8283C20.2301 16.4083 20.1801 15.9483 19.9501 15.5583L18.6801 13.4383C18.2601 12.7483 17.9401 11.5783 17.9401 10.7683V8.66828C17.9301 5.39828 15.2801 2.74828 12.0201 2.74828Z" fill="#121212" />
                                          <path d="M11.9999 22.9003C10.9299 22.9003 9.87992 22.4603 9.11992 21.7003C8.35992 20.9403 7.91992 19.8903 7.91992 18.8203H9.41992C9.41992 19.5003 9.69992 20.1603 10.1799 20.6403C10.6599 21.1203 11.3199 21.4003 11.9999 21.4003C13.4199 21.4003 14.5799 20.2403 14.5799 18.8203H16.0799C16.0799 21.0703 14.2499 22.9003 11.9999 22.9003Z" fill="#121212" />
                                    </svg>
                              </span>
                              <div className="relative md:w-[40px] md:h-[40px] w-[25px] h-[25px]">
                                    <Image src={"/images/Frame 1171274980.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='logo' />
                              </div>
                        </div>

                        
                  </header>

                  <div className="flex md:hidden bg-[#C9E4F933] justify-between items-center w-[90%] mx-auto rounded-lg py-1 md:py-2 px-2 md:px-3">
                        <input type="text" className='bg-transparent border-none outline-none' />
                        <span>
                              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4166 25.3737C6.82492 25.3737 1.45825 20.007 1.45825 13.4154C1.45825 6.8237 6.82492 1.45703 13.4166 1.45703C20.0083 1.45703 25.3749 6.8237 25.3749 13.4154C25.3749 20.007 20.0083 25.3737 13.4166 25.3737ZM13.4166 3.20703C7.78159 3.20703 3.20825 7.79203 3.20825 13.4154C3.20825 19.0387 7.78159 23.6237 13.4166 23.6237C19.0516 23.6237 23.6249 19.0387 23.6249 13.4154C23.6249 7.79203 19.0516 3.20703 13.4166 3.20703Z" fill="#121212" />
                                    <path d="M25.6661 26.5374C25.4444 26.5374 25.2228 26.4558 25.0478 26.2808L22.7144 23.9474C22.3761 23.6091 22.3761 23.0491 22.7144 22.7108C23.0528 22.3724 23.6128 22.3724 23.9511 22.7108L26.2844 25.0441C26.6228 25.3824 26.6228 25.9424 26.2844 26.2808C26.1094 26.4558 25.8878 26.5374 25.6661 26.5374Z" fill="#121212" />
                              </svg>
                        </span>
                  </div>

                  {
                        isSidebarOpen && (
                              <BgDark setIsSomeThingOpen={setIsSidebarOpen} />
                        )
                  }
                  <OrderSidebar isSidebarOpen={isSidebarOpen} />
            </>
      )
}

export default ManagerListHeader