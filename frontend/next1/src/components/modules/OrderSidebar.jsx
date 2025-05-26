import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OrderSidebar = ({ isSidebarOpen }) => {
      return (
            <>
                  <div className={`transition-all duration-300 md:hidden ${isSidebarOpen ? "fixed right-0 top-0 bottom-0 z-30 bg-white px-3 py-5 w-[60%]" : "-right-[1000px] px-0 py-0 w-[0%] fixed bottom-0 top-0"}`}>
                        <div className={`relative mx-auto lg:w-[120px] w-[70px] lg:h-[120px] h-[70px] ${isSidebarOpen ? "block" : "hidden"}`}>
                              <Image src={"/images/logo.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='logo' />
                        </div>
                        <ul className={`${isSidebarOpen ? "flex" : "hidden"} flex-col gap-6`}>
                              <li className='block'>
                                    <Link className='text-sm font-normal text-[#000] flex' href={"/"}>دوره‌های آموزشی </Link>
                              </li>
                              <li className='block'>
                                    <Link className='text-sm font-normal text-[#000] flex' href={"/"}>پروژه‌ها</Link>
                              </li>
                              <li className='block'>
                                    <Link className='text-sm font-normal text-[#000] flex' href={"/"}>پروژه‌ها</Link>
                              </li>
                              <li className='block'>
                                    <Link className='text-sm font-normal text-[#000] flex' href={"/"}>راهنما</Link>
                              </li>
                        </ul>
                  </div>
            </>
      )
}

export default OrderSidebar