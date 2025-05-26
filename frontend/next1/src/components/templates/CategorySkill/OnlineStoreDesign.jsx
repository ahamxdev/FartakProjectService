"use client"
import React, { useState } from 'react'
import BreadCrumb from '@/components/modules/BreadCrumb'
import Image from 'next/image'
import Link from 'next/link'
import WebSiteCreationPointsBox from '@/components/modules/WebSiteCreationPointsBox'
import CategorySkillSliderSection from '@/components/modules/CategorySkillSliderSection'
import NewestProjectBox from '@/components/modules/NewestProjectBox'
import SkillBox from '@/components/modules/SkillBox'
import SectionTitle from '@/components/modules/SectionTitle'
import { SwiperSlide } from 'swiper/react'
import RegisterFormtepOne from '@/components/modules/RegisterFormtepOne'
import RegisterFormtepTwo from '@/components/modules/RegisterFormtepTwo'
import RegisterFormtepThree from '@/components/modules/RegisterFormtepThree'
import RegisterFormtepFour from '@/components/modules/RegisterFormtepFour'
import PricingTable from '@/components/modules/PricingTable'

const OnlineStoreDesign = () => {
      const [registerFormStep, setRegisterFormStep] = useState("register-sub")
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

                  <SectionTitle title={"مزایای طراحی سایت فروشگاهی با فرتاک"} />
                  <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4">
                        <WebSiteCreationPointsBox />
                        <WebSiteCreationPointsBox />
                        <WebSiteCreationPointsBox />
                        <WebSiteCreationPointsBox />
                  </section>

                  <SectionTitle title={"مراحل ثبت سفارش فروشگاه اینترنتی"} />
                  <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center gap-2">
                              <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
                                    <Image src={"/images/image 17.png"} fill sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-of-order' />
                              </div>
                              <span className='font-bold md:text-[22px] text-sm text-[#1450A3]'>1.ثبت پروژه</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                              <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
                                    <Image src={"/images/image 17.png"} fill sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-of-order' />
                              </div>
                              <span className='font-bold md:text-[22px] text-sm text-[#1450A3]'>2.انتخاب متخصص</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                              <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
                                    <Image src={"/images/image 17.png"} fill sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-of-order' />
                              </div>
                              <span className='font-bold md:text-[22px] text-sm text-[#1450A3]'>3.انجام پروژه</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                              <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
                                    <Image src={"/images/image 17.png"} fill sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-of-order' />
                              </div>
                              <span className='font-bold md:text-[22px] text-sm text-[#1450A3]'>4.دریافت نهایی</span>
                        </div>
                  </section>

                  <SectionTitle title={"قیمت طراحی سایت فروشگاهی"} />
                  <PricingTable />

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

                  <SectionTitle title={"لطفا جهت ثبت پروژه فرم را تکمیل کنید"} />
                  <section className='w-[90%] mx-auto md:my-10 my-5 flex flex-col gap-6'>
                        <div className="flex w-full justify-between items-center border-b border-b-[#000] overflow-x-auto">
                              <div className="flex space-x-4 w-full pb-4 justify-between">
                                    <button onClick={() => {
                                          setRegisterFormStep("register-sub")
                                    }} className={`${registerFormStep === "register-sub" ? "bg-[#495AFF]" : "bg-white"} flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}>
                                          <div className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${registerFormStep === "register-sub" ? "border-[#fff]" : "border-[#828282]"}`}>
                                                <span className={`${registerFormStep === "register-sub" ? "text-white" : "text-[#828282]"} md:text-[22px] text-sm font-normal`}>1</span>
                                          </div>
                                          <span className={`md:text-lg text-sm font-normal ${registerFormStep === "register-sub" ? "text-white" : "text-[#828282]"}`}>موضوع سایت</span>
                                    </button>
                                    <button onClick={() => {
                                          setRegisterFormStep("register-time-budget")
                                    }} className={`${registerFormStep === "register-time-budget" ? "bg-[#495AFF]" : "bg-white"} flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}>
                                          <div className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${registerFormStep === "register-time-budget" ? "border-[#fff]" : "border-[#828282]"}`}>
                                                <span className={`${registerFormStep === "register-time-budget" ? "text-white" : "text-[#828282]"} md:text-[22px] text-sm font-normal`}>2</span>
                                          </div>
                                          <span className={`md:text-lg text-sm font-normal ${registerFormStep === "register-time-budget" ? "text-white" : "text-[#828282]"}`}>بودجه و زمان</span>
                                    </button>
                                    <button onClick={() => {
                                          setRegisterFormStep("register-options")
                                    }} className={`${registerFormStep === "register-options" ? "bg-[#495AFF]" : "bg-white"} flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}>
                                          <div className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${registerFormStep === "register-options" ? "border-[#fff]" : "border-[#828282]"}`}>
                                                <span className={`${registerFormStep === "register-options" ? "text-white" : "text-[#828282]"} md:text-[22px] text-sm font-normal`}>3</span>
                                          </div>
                                          <span className={`md:text-lg text-sm font-normal ${registerFormStep === "register-options" ? "text-white" : "text-[#828282]"}`}>امکانات خاص مدنظر</span>
                                    </button>
                                    <button onClick={() => {
                                          setRegisterFormStep("register-desc")
                                    }} className={`${registerFormStep === "register-desc" ? "bg-[#495AFF]" : "bg-white"} flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}>
                                          <div className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${registerFormStep === "register-desc" ? "border-[#fff]" : "border-[#828282]"}`}>
                                                <span className={`${registerFormStep === "register-desc" ? "text-white" : "text-[#828282]"} md:text-[22px] text-sm font-normal`}>4</span>
                                          </div>
                                          <span className={`md:text-lg text-sm font-normal ${registerFormStep === "register-desc" ? "text-white" : "text-[#828282]"}`}>توضیحات</span>
                                    </button>
                              </div>
                        </div>

                        {
                              registerFormStep === "register-sub" ? (
                                    <RegisterFormtepOne />
                              ) : registerFormStep === "register-time-budget" ? (
                                    <RegisterFormtepTwo />
                              ) : registerFormStep === "register-options" ? (
                                    <RegisterFormtepThree />
                              ) : registerFormStep === "register-desc" && (
                                    <RegisterFormtepFour />
                              )
                        }

                  </section>


                  <SectionTitle title={"برخی برندهای تجاری همکار ما"} />
                  <section className='w-[90%] mx-auto md:my-10 my-5 flex flex-wrap items-center justify-between gap-6'>
                        <div className="relative lg:w-[220px] w-[150px] lg:h-[90px] h-[60px]">
                              <Image src={"/images/taat.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='logo' />
                        </div>
                        <div className="relative lg:w-[220px] w-[150px] lg:h-[90px] h-[60px]">
                              <Image src={"/images/taat.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='logo' />
                        </div>
                        <div className="relative lg:w-[220px] w-[150px] lg:h-[90px] h-[60px]">
                              <Image src={"/images/taat.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='logo' />
                        </div>
                  </section>

            </>
      )
}

export default OnlineStoreDesign