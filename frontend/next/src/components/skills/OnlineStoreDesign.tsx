'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import RegisterFormtepOne from './RegisterFormtepOne'
import RegisterFormtepTwo from './RegisterFormtepTwo'
import RegisterFormtepThree from './RegisterFormtepThree'
import RegisterFormtepFour from './RegisterFormtepFour'
import SectionTitle from './SectionTitile'
import PricingTable from './PricingTable'
import CategorySkillSliderSection from './CategorySkillSliderSection'

type RegisterFormStep = 'register-sub' | 'register-time-budget' | 'register-options' | 'register-desc'

const OnlineStoreDesign: React.FC = () => {
  const [registerFormStep, setRegisterFormStep] = useState<RegisterFormStep>('register-sub')

  return (
    <>
      <SectionTitle title={"مزایای طراحی سایت فروشگاهی با فرتاک"} />

      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className='flex flex-col gap-5 items-center'>
                    <div className="relative lg:w-[240px] w-[120px] lg:h-[240px] h-[120px]">
                        <Image src={"/projectRegistration/web-creation-point.png"} fill
                                sizes="(max-width: 768px) 100vw, auto"
                                className="w-full h-full" alt='logo' />
                    </div>
                    <span className='text-[#1D40D7] font-bold md:text-base text-xs text-center'>
                        امکان مشاهده و انتخاب از بین نمونه کارها و متخصصین مختلف
                    </span>
            </div>
        ))}
      </section>

      <SectionTitle title="مراحل ثبت سفارش فروشگاه اینترنتی" />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {['1.ثبت پروژه', '2.انتخاب متخصص', '3.انجام پروژه', '4.دریافت نهایی'].map((label, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
              <Image
                src="/skills/image 17.png"
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="step-of-order"
              />
            </div>
            <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">{label}</span>
          </div>
        ))}
      </section>

      <SectionTitle title="قیمت طراحی سایت فروشگاهی" />
      <PricingTable />

      <SectionTitle title="جدیدترین پروژه های ثبت شده" />
      <CategorySkillSliderSection>
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className='border-[2px] border-[#1D40D7] rounded-2xl flex flex-col gap-6 p-4' id='new-project-box'>
                <h6 className='font-bold text-sm md:text-lg text-[#1450A3]'>طراحی سایت سایت فروشگاهی</h6>
                <div className="flex items-center justify-between">
                    <span className='font-normal md:text-sm text-xs text-[#1450A380]'>1 ساعت پیش</span>
                    <span className='bg-[#EEF5FF] rounded-lg px-2 py-1 font-normal md:text-sm text-xs text-[#1450A3]'>در حال بررسی</span>
                </div>
                <p className='font-normal md:text-sm text-xs text-black'>
                    توضیحات مختصر درباره پروژه و خروجی پروژه و مدت زمان انجام آن و نوع سایت و هر توضیح اضافه ای که لازم باشد
                </p>
                <Link href={"/"} className='rounded-lg bg-[#1D40D7] md:py-2 py-1 flex justify-center items-center w-full md:text-sm text-xs font-normal text-white'>ثبت پروژه مشابه</Link>
            </div>
          </SwiperSlide>
        ))}
      </CategorySkillSliderSection>

      <SectionTitle title="نمونه کار های طراحی سایت" />
      <CategorySkillSliderSection>
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <div id='skill-box' className='bg-[#EEF5FF] rounded-2xl p-4 flex flex-col items-center gap-3'>
                <div className="relative lg:w-[220px] w-[150px] lg:h-[200px] h-[130px]">
                    <Image src={"/skills/image 13.png"} fill
                            sizes="(max-width: 768px) 100vw, auto"
                            className="w-full h-full" alt='skill-box-image' />
                </div>
                <h6 className='text-[#1D40D7] md:text-xl text-base font-bold'>طراحی لندینگ پیچ</h6>
                <Link href={"/skills/ui"} className='rounded-lg bg-[#1d40d7] flex justify-center items-center w-full py-1 text-white text-sm font-normal'>مشاهده اطلاعات</Link>
            </div>
          </SwiperSlide>
        ))}
      </CategorySkillSliderSection>

      <SectionTitle title="لطفا جهت ثبت پروژه فرم را تکمیل کنید" />
      <section className="w-[90%] mx-auto md:my-10 my-5 flex flex-col gap-6">
        <div className="flex w-full justify-between items-center border-b border-b-[#000] overflow-x-auto">
          <div className="flex space-x-4 w-full pb-4 justify-between">
            {([
              { step: 'register-sub', label: 'موضوع سایت' },
              { step: 'register-time-budget', label: 'بودجه و زمان' },
              { step: 'register-options', label: 'امکانات خاص مدنظر' },
              { step: 'register-desc', label: 'توضیحات' },
            ] as { step: RegisterFormStep; label: string }[]).map(({ step, label }, i) => {
              const active = registerFormStep === step
              return (
                <button
                  key={step}
                  onClick={() => setRegisterFormStep(step)}
                  className={`${active ? 'bg-[#495AFF]' : 'bg-white'} flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
                >
                  <div
                    className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                      active ? 'border-[#fff]' : 'border-[#828282]'
                    }`}
                  >
                    <span
                      className={`${active ? 'text-white' : 'text-[#828282]'} md:text-[22px] text-sm font-normal`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span className={`md:text-lg text-sm font-normal ${active ? 'text-white' : 'text-[#828282]'}`}>
                    {label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {registerFormStep === 'register-sub' && <RegisterFormtepOne />}
        {registerFormStep === 'register-time-budget' && <RegisterFormtepTwo />}
        {registerFormStep === 'register-options' && <RegisterFormtepThree />}
        {registerFormStep === 'register-desc' && <RegisterFormtepFour />}
      </section>

      <SectionTitle title="برخی برندهای تجاری همکار ما" />
      <section className="w-[90%] mx-auto md:my-10 my-5 flex flex-wrap items-center justify-between gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative lg:w-[220px] w-[150px] lg:h-[90px] h-[60px]">
            <Image
              src="/projectRegistration/taat.png"
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default OnlineStoreDesign
