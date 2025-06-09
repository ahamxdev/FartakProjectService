import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectSteps = () => {
      return (
            <div className='w-full bg-[#D5E8DB] my-6 flex lg:flex-row flex-col items-center justify-between px-5 py-4'>
                  <div className="lg:w-[78%] w-full flex items-center gap-1 justify-between">
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/images/step1.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-1' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>ثبت پروژه و پرداخت امن</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/images/step2.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-2' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>ارزیابی پروژه توسط تیم فرتاک و توافق بر کیفیت بالا</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/images/step3.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-3' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>نظارت بر پروژه</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/images/step4.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-4' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>تحویل پروژه</span>
                        </div>
                  </div>
                  <Link className='bg-[#00C83F] lg:w-[22%] w-full md:text-sm text-xs font-normal text-white px-8 md:py-3 py-1.5 rounded-lg mt-3 md:mt-0 flex justify-center items-center' href={"/project-registration"}>همین حالا پروژه خود را سفارش دهید </Link>
            </div>
      )
}

export default ProjectSteps