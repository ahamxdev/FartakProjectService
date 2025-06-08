"use client"
import React from 'react'
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CategorySkillSliderSection = ({ children }) => {
      return (
            <section className='w-[90%] mx-auto md:my-10 my-5'>
                  <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                              0: {
                                    slidesPerView: 1
                              },
                              640: {
                                    slidesPerView: 1.5,
                              },
                              768: {
                                    slidesPerView: 2.5,
                              },
                              1024: {
                                    slidesPerView: 3.5,
                              },
                        }}
                  >
                        {children}
                  </Swiper>
            </section>
      )
}

export default CategorySkillSliderSection