"use client"
import React from 'react'
import SkillBox from '@/components/modules/SkillBox'
import MainFooter from '@/components/modules/MainFooter'
import SectionSlider from '@/components/modules/SectionSlider'
import { SwiperSlide } from 'swiper/react'
import Header from '@/components/modules/Header'
// import { SwiperSlide } from 'swiper/react';

const Skills = () => {
      return (
            <>
                  <Header />

                  <section id='skill-header' className='relative' >
                        <div id='skill-header-bg' className='w-full h-full rounded-[16px]'></div>
                        <div className="w-[70%] mx-auto absolute bottom-30 left-1/6">
                              <h1 className='text-center my-2 mb-4 font-bold text-white lg:text-[60px] md:text-3xl text-2xl'>مهارت های برتر فرتاک</h1>
                              <h4 className='text-center my-2 mb-4 font-bold text-white lg:text-4xl text-2xl'>با انتخاب هر مهارت ، نیازت رو برطرف کن</h4>
                        </div>
                  </section>

                  <div className="w-[90%] mx-auto border-[2px] my-8 border-[#1E1E1E] rounded-lg px-3 py-2 flex flex-col lg:flex-row gap-3 justify-between items-center">
                        <p className='lg:text-2xl md:text-xl text-base font-bold'>دنبال چه مهارتی هستی ؟ </p>
                        <div className="flex items-center gap-3">
                              <button className='rounded-lg border-[2px] border-[#1E1E1E] px-3 py-1 md:w-[200px] sm:w-[130px] w-[100px] flex justify-between items-center text-lg font-normal cursor-pointer text-[#00000080]'>
                                    فیلتر
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                              <div className="flex justify-between items-center rounded-lg border-[2px] border-[#1E1E1E] px-3 py-1 md:w-[370px] sm:w-[280px] w-[210px] bg-white">
                                    <input type="text" placeholder='جست و جوی مهارت' className='placeholder:text-lg placeholder:font-normal placeholder:text-[#00000080]' />
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M22 22.4785L20 20.4785M2 11.9785C2 6.73181 6.25329 2.47852 11.5 2.47852C16.7467 2.47852 21 6.73181 21 11.9785C21 17.2252 16.7467 21.4785 11.5 21.4785C6.25329 21.4785 2 17.2252 2 11.9785Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </div>
                        </div>

                  </div>

                  <SectionSlider title="طراحی سایت و اپلیکیشن" slidesPerView={4} viewAllUrl="/category/web">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="تولید محتوا و سئو" slidesPerView={4} viewAllUrl="/category/seo">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="ترجمه و نگارش" slidesPerView={4} viewAllUrl="/category/translation">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="رسانه و ویدیو" slidesPerView={4} viewAllUrl="/category/media">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>


                  <SectionSlider title="طراحی گرافیک و هنر های دیجیتال" slidesPerView={4} viewAllUrl="/category/digital">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="برنامه نویسی و کد نویسی" slidesPerView={4} viewAllUrl="/category/programming">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="پشتیبانی و مدیریت" slidesPerView={4} viewAllUrl="/category/translation">
                        {[...Array(2)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="خدمات ویژه" slidesPerView={4} viewAllUrl="/category/media">
                        {[...Array(10)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <SectionSlider title="عکاسی و محتوای تصویری" slidesPerView={4} viewAllUrl="/category/media">
                        {[...Array(1)].map((_, i) => (
                              <SwiperSlide key={i}>
                                    <SkillBox />
                              </SwiperSlide>
                        ))}
                  </SectionSlider>

                  <MainFooter />
            </>
      )
}

export default Skills