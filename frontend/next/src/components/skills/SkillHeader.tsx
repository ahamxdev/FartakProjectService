"use client"
import Image from 'next/image'
import Link from 'next/link'

const SkillHeader = () => {
      return (
            <>
                  <div className='w-[90%] mx-auto py-2'>
                        <div className="flex items-center gap-2 justify-between w-full">
                              <div className="flex items-center">
                                    <span className='block md:hidden cursor-pointer' >
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                          </svg>
                                    </span>
                                    <div className="relative lg:w-[120px] w-[70px] lg:h-[120px] h-[70px]">
                                          <Image src={"/logo.png"} fill
                                                sizes="(max-width: 768px) 100vw, auto"
                                                className="w-full h-full" alt='logo' />
                                    </div>
                              </div>
                              <h2 className='text-[32px] hidden md:block mr-30 text-[#FAB437] font-extrabold'>فرتاک پروژه</h2>
                              <div className="flex justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                          <span className='md:w-6 md:h-6 w-4 h-4'>
                                                <svg width="100%" height="100%" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M21 28.2952L19 25.6321M1 14.3139C1 7.32757 5.25329 1.66406 10.5 1.66406C15.7467 1.66406 20 7.32757 20 14.3139C20 21.3002 15.7467 26.9637 10.5 26.9637C5.25329 26.9637 1 21.3002 1 14.3139Z" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                          </span>
                                          <span className='md:w-6 md:h-6 w-4 h-4'>
                                                <svg width="100%" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0001 1V2M10.0001 20V21M18.6603 6L17.7943 6.5M2.20587 15.5L1.33985 16M1.33984 6L2.20587 6.5M17.7943 15.5L18.6603 16M16.0001 11C16.0001 14.3137 13.3138 17 10.0001 17C6.68641 17 4.00012 14.3137 4.00012 11C4.00012 7.68629 6.68641 5 10.0001 5C13.3138 5 16.0001 7.68629 16.0001 11Z" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                          </span>
                                          <span className='md:w-6 md:h-6 w-4 h-4'>
                                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                                </svg>
                                          </span>
                                    </div>
                                    <Link className='bg-[#1D40D7] text-white px-3 md:px-8 py-1 md:py-2 rounded-md text-[10px] flex justify-center items-center md:text-base font-normal' href={"/"}>ورود | عضویت</Link>
                              </div>
                        </div>
                        <ul className='md:flex hidden items-center gap-2 w-[73%] mx-auto justify-between border-t-[1px] border-t-[#00000040] pt-3'>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>خانه</Link>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>تدریس</Link>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/skills"}>پروژه ها</Link>
                              </li>
                              <li className='text-base font-bold cursor-pointer text-[#00060F] flex items-center gap-2'>
                                    دوره ها
                                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 0.839844L6 4.83984L11 0.839844" stroke="#00060F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>وبلاگ</Link>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>درباره ما</Link>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>تماس با ما</Link>
                              </li>
                              <li className='cursor-pointer'>
                                    <Link className='text-base font-bold text-[#00060F]' href={"/"}>پشتیبانی</Link>
                              </li>
                        </ul>
                  </div>

                  {/* {
                        isSidebarOpen && (
                              <BgDark setIsSomeThingOpen={setIsSidebarOpen} />
                        )
                  }
                  <Sidebar isSidebarOpen={isSidebarOpen} /> */}
            </>
      )
}

export default SkillHeader