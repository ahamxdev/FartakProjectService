"use client"
import React, { useRef } from 'react'
import BreadCrumb from '@/components/modules/BreadCrumb'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/modules/SectionTitle'
import ProgrammingLanguageBox from '@/components/modules/ProgrammingLanguageBox'
import CategorySkillSliderSection from '@/components/modules/CategorySkillSliderSection'
import { SwiperSlide } from 'swiper/react'
import NewestProjectBox from '@/components/modules/NewestProjectBox'
import SkillBox from '@/components/modules/SkillBox'

const ContentCreation = () => {
      const inputRef = useRef()

      return (
            <>
                  {/* <BreadCrumb items={["مهارت ها شما", "طراحی سایت و اپلیکیشن", "طراحی رابط کاربری"]} />
                  <section className='flex flex-col lg:flex-row lg:gap-16 gap-8 w-[90%] mx-auto md:my-10 my-5'>
                        <div className="relative lg:w-[55%] w-full lg:h-[530px] h-[350px]">
                              <Image
                                    src="/images/image 10.png"
                                    alt="category-detail-image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="w-full h-full"
                              />
                        </div>


                        <div className="flex flex-col justify-between lg:w-[45%] w-full">
                              <div className="flex flex-col gap-5">
                                    <h1 className='text-[#1450A3] font-bold text-lg md:text-xl lg:text-[32px]'>طراحی رابط کاربری</h1>
                                    <p className='font-normal leading-6 text-sm md:text-base lg:text-xl'>
                                          سفارش این پروژه نقطهٔ شروع تبدیل ایده‌های دیجیتال شما به یک واقعیت ملموس است.
                                          در این پروژه، با رویکردی نوین و استاندارد، ساختاری منسجم و ظاهری جذاب برای وب‌سایت شما طراحی می‌شود.
                                          تمامی جنبه‌ها از طراحی واکنش‌گرا و بهینه‌سازی سرعت گرفته تا هماهنگی دقیق المان‌های بصری و فنی مد نظر قرار گرفته تا سایت شما در انواع دستگاه‌ها به بهترین شکل نمایش داده شود.
                                          تیم مجرب ما با دقت به جزئیات و بهره‌گیری از تجربه‌های عملی، محیطی حرفه‌ای و مدرن را برای حضور شما در فضای آنلاین فراهم می‌آورد.
                                    </p>
                              </div>
                              <Link href={"/"} className='bg-[#1D40D7] text-white rounded-lg flex justify-center items-center md:text-lg text-xs font-bold w-full py-2 my-6 lg:my-0'>همین الان پروژت رو ثبت کن</Link>
                        </div>
                  </section> */}

                  <SectionTitle title={"خدمات تولید محتوا"} />
                  <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                        <ProgrammingLanguageBox />
                  </section>

                  <SectionTitle title={"جدیدترین پروژه های ثبت شده"} />
                  <CategorySkillSliderSection>
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <NewestProjectBox />
                              </SwiperSlide>
                        ))}
                  </CategorySkillSliderSection>

                  <SectionTitle title={"نمونه کار های طراحی سایت"} />
                  <CategorySkillSliderSection>
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </CategorySkillSliderSection>


                  <SectionTitle title={"پروژتون در کمترین زمان ممکن ثبت کنید"} />
                  <section className='w-[90%] flex flex-col gap-4 mx-auto md:my-10 my-5 bg-[#EEF5FF] rounded-2xl border-[2px] border-[#1E1E1E] py-5 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-16'>
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between">
                              <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
                                    <span className='font-bold md:text-[22px] text-sm text-[#000]'>زمینه فعالیت خود را انتخاب کنید .</span>
                                    <div className="flex items-center gap-4">
                                          <button className='rounded-lg border-[2px] border-[#1D40D7] w-full px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]'>
                                                زمینه فعالیت
                                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                              <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
                                    <span className='font-bold md:text-[22px] text-sm text-[#000]'>نوع محتوای خود را انتخاب کنید .</span>
                                    <div className="flex items-center gap-4">
                                          <button className='rounded-lg border-[2px] border-[#1D40D7] w-full px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]'>
                                                نوع محتوا
                                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between">
                              <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
                                    <span className='font-bold md:text-[22px] text-sm text-[#000]'>زبان تولید محتوای خود را انتخاب کنید .</span>
                                    <div className="flex items-center gap-4">
                                          <button className='rounded-lg border-[2px] border-[#1D40D7] w-full px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]'>
                                                زمان
                                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                          </button>
                                    </div>
                              </div>
                              <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
                                    <label className='font-bold md:text-[22px] text-sm text-[#000]' htmlFor="">تعداد کلمات خود را وارد کنید .</label>
                                    <input type="text" className='border-[2px] bg-white border-[#1D40D7] rounded-lg py-1 px-4 placeholder:text[#aaa] placeholder:text-base placeholder:font-normal' placeholder='عنوان پروژه خود را وارد کنید .' />
                              </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                              <div onClick={() => {
                                    if (inputRef.current) {
                                          inputRef.current.click();
                                    }
                              }} className="bg-white w-full mt-9 h-[120px] md:h-[190px] flex justify-center items-center cursor-pointer border-[2px] border-[#1D40D7] rounded-lg text-xs md:text-base font-bold">
                                    <input ref={inputRef} type="file" hidden />
                                    آپلود عکس یا فایل
                              </div>
                        </div>

                        <button className='w-full bg-[#1D40D7] py-3 flex items-center justify-center rounded-lg font-bold md:text-lg text-xs text-white cursor-pointer my-4' id='confirm-btn'>ثبت رایگان پروژه</button>
                  </section>
            </>
      )
}

export default ContentCreation