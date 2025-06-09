'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

interface SectionSliderProps {
      title: string;
      viewAllUrl: string;
      slidesPerView: number;
      children: ReactNode;
}

const SectionSlider: React.FC<SectionSliderProps> = ({ title, viewAllUrl, slidesPerView, children }) => {
      const prevRef = useRef<HTMLSpanElement>(null);
      const nextRef = useRef<HTMLSpanElement>(null);

      const [showNavigation, setShowNavigation] = useState<boolean>(false);
      const [slider, setSlider] = useState<boolean>(false);
      const [slidesCount, setSlidesCount] = useState<number>(0);

      useEffect(() => {
            setSlidesCount(React.Children.count(children));
      }, [children]);

      useEffect(() => {
            if (slider) {
                  setSlidesCount(React.Children.count(children));
            }
      }, [React.Children.count(children), slider]);

      return (
            <>
                  <div className="w-[90%] mx-auto my-10 px-4">
                        <div className="flex justify-between items-center mb-4">
                              <div className='flex items-center gap-3.5'>
                                    <span className='flex gap-0.5'>
                                          <svg width="2" height="35" viewBox="0 0 2 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.47852L0.999999 33.4785" stroke="#FAB437" strokeWidth="2" strokeLinecap="round" />
                                          </svg>
                                          <svg className='self-end' width="2" height="19" viewBox="0 0 2 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.47852L0.999999 17.4785" stroke="#1E2531" strokeWidth="2" strokeLinecap="round" />
                                          </svg>
                                    </span>
                                    <h2 className="md:text-2xl text-base font-black">{title}</h2>
                              </div>

                              <div className={`hidden lg:block h-[3px] bg-[#E6E6E8] ${showNavigation ? "w-[596px]" : "w-[895px]"}`}>
                              </div>
                              {showNavigation && (
                                    <div className="flex items-center space-x-4">
                                          <Link href={viewAllUrl} className="md:text-base text-xs font-bold text-[#1E2531]">مشاهده همه</Link>
                                          <div className="w-px h-5 bg-gray-300"></div>
                                          <div className="flex items-center gap-6">
                                                <span ref={prevRef} onClick={() => setSlider(true)} className="w-4 h-4 cursor-pointer text-[#1e2531]">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1E2531" className="100%">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                      </svg>
                                                </span>
                                                <span ref={nextRef} onClick={() => setSlider(true)} className="w-4 h-4 cursor-pointer text-[#1e2531]">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1E2531" className="100%">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                      </svg>
                                                </span>

                                          </div>
                                    </div>
                              )}
                        </div>

                        <Swiper
                              modules={[Navigation]}
                              spaceBetween={16}
                              slidesPerView={1}
                              navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                              }}
                              observer={true}
                              observeParents={true}
                              onInit={(swiper: SwiperType) => {
                                    // if (typeof swiper.params.navigation !== 'boolean') {
                                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                          swiper.params.navigation.prevEl = prevRef.current;
                                          swiper.params.navigation.nextEl = nextRef.current;
                                    }
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                    // }
                                    const perView =
                                          swiper.params.breakpoints?.[swiper.currentBreakpoint]?.slidesPerView ||
                                          swiper.params.slidesPerView;

                                    if (swiper.slides.length > (perView as number)) {
                                          setShowNavigation(true);
                                    } else {
                                          setShowNavigation(false);
                                    }
                              }}
                              breakpoints={{
                                    0: {
                                          slidesPerView: slidesPerView - 3,
                                    },
                                    640: {
                                          slidesPerView: slidesPerView - 2,
                                    },
                                    768: {
                                          slidesPerView: slidesPerView - 1,
                                    },
                                    1024: {
                                          slidesPerView: slidesPerView,
                                    },
                              }}
                        >
                              {children}
                        </Swiper>

                  </div>
            </>
      )
}

export default SectionSlider