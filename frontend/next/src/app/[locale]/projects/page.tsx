


"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import SectionSlider from "@/components/skills/SectionSlider";

export default function Home() {
  return (
    <>

      <MainHeader />
      <ProjectSteps />
      <section className="grid py-20 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 md:my-8 my-4 w-[90%] mx-auto">
        <CategoryBox src={"/skills/Index.png"} title={"محتوا و ترجمه"} />
        <CategoryBox src={"/skills/Laptop Coding-ctg.png"} hasScale={true} title={"توسعه نرم افزار و ای تی"} />
        <CategoryBox src={"/skills/Increase-ctg.png"} title={"بازاریابی و فروش"} />
        <CategoryBox src={"/skills/Paint Palette-ctg.png"} title={"طراحی و خلاقیت"} />
        <CategoryBox src={"/skills/Goal.png"} title={"کسب و کار"} hasScale={true} />
        <CategoryBox src={"/skills/Drafting Compass.png"} title={"مهندسی و معماری"} />
      </section>
      <SectionSlider slidesPerView={3} title="پروژه های جدید فرتاک" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <NewProjectBox />
          </SwiperSlide>
        ))}
      </SectionSlider>
      <SectionSlider slidesPerView={3} title="گروه فریلنسری فرتاک" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <FartakUser />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <section className="w-[90%] flex flex-col lg:flex-row gap-10 mx-auto md:my-16 my-6">
        <div className="lg:w-[40%] w-full px-6 py-10 lg:py-10 flex flex-col justify-end pb-8 gap-3 border border-[#CBC2FF] bg-[#fbfbfb]" id="step-right-section">
          <h4 className="md:text-2xl text-lg font-black text-[#000]">فرتاک برترین پلتفرم ایران</h4>
          <p className="md:text-lg text-sm font-medium text-[#000]">
            فرتاک خانه کارفرما هست .
            پروژه خود را به راحتی برون سپاری کنید و بهترین شکل فرتاک در این راه به شما کمک خواهد کرد.
          </p>
        </div>
        <div className="flex lg:w-[60%] w-full flex-col gap-4 py-10">
          <h6 className="font-black lg:text-3xl text-xl">مراحل انجام پروژه</h6>
          <ul className="flex flex-col gap-6 mt-5">
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image src={"/skills/step1-en.png"} fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full" alt="step-1" />
              </div>
              ثبت پروژه و پرداخت امن
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image src={"/skills/step2-en.png"} fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full" alt="step-1" />
              </div>
              ارزیابی پروژه توسط تیم فرتاک و توافق بر کیفیت بالا
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image src={"/skills/step3-en.png"} fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full" alt="step-1" />
              </div>
              نظارت بر پروژه
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image src={"/skills/step4-en.png"} fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full" alt="step-1" />
              </div>
              تحویل پروژه
            </li>
          </ul>
        </div>
      </section>

      <section className="w-[90%] flex flex-col gap-10 mx-auto md:my-16 my-6">
        <div className="flex flex-wrap items-center gap-4">
          <button className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}>
            <div className="relative lg:w-[70px] w-[40px] lg:h-[48px] h-[24px]">
              <Image src={"/skills/Services.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="service-image" />
            </div>
            برترین سرویس ها
          </button>
          <button className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}>
            <div className="relative lg:w-[70px] w-[40px] lg:h-[60px] h-[35px]">
              <Image src={"/skills/Laptop Coding.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="Laptop Coding" />
            </div>
            توسعه نرم افزار و ای تی
          </button>
          <button className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}>
            <div className="relative lg:w-[70px] w-[40px] lg:h-[60px] h-[35px]">
              <Image src={"/skills/translation.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="translation-image" />
            </div>
            محتوا و ترجمه
          </button>
          <button className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}>
            <div className="relative lg:w-[60px] w-[30px] lg:h-[50px] h-[30px]">
              <Image src={"/skills/Increase.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="Increase-image" />
            </div>
            بازاریابی و فروش
          </button>
          <button className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}>
            <div className="relative lg:w-[64px] w-[60px] lg:h-[35px] h-[35px]">
              <Image src={"/skills/Paint Palette.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="Paint Palette" />
            </div>
            طراحی و خلاقیت
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:w-[40%] w-full gap-3">
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>استخدام برنامه نویس</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی سایت</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>خدمات سئو</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی لوگو</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی اپلیکشن</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی ست اداری</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی کاتالوگ </Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>صفحه ارایی و طراحی مجله</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی بنر</Link>
          </li><li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>استخدام ادمین</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>استخدام تایپیست</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی بسته بندی</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی سربرگ شرکت</Link>
          </li>
          <li>
            <Link className="md:text-lg text-sm font-normal text-[#000]" href={"/"}>طراحی کارت ویزیت</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <p className="md:text-xl text-sm font-extrabold text-[#000]">
              در سریع ترین زمان ممکن پروژه خود را بصورت رایگان ثبت کنید
            </p>
            <div className="relative w-[60px] h-[60px]">
              <Image src={"/skills/Hand Left.png"} fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full" alt="hand-left" />
            </div>
          </div>
          <Link href={"/"} className="bg-[#00C83F] flex justify-center items-center rounded-lg py-3 md:w-[400px] w-[200px] text-white md:text-xl text-base font-extrabold md:ml-22">ثبت پروژه</Link>
        </div>
      </section>

    </>
  );
}


const CategoryBox = ({ src, title, hasScale }:{ src:string, title: string, hasScale?:boolean }) => {
      return (
            <Link href={"/"} className={`flex flex-col items-center gap-2 ${hasScale ? `md:scale-[1.2]` : ""}`}>
                  <div className={`flex flex-col gap-4 justify-center px-20 py-8 w-[300px] items-center bg-[#000] rounded-2xl border border-[#ECECEC]`}>
                        <div className="relative lg:w-[96px] w-[55px] lg:h-[96px] h-[55px]">
                              <Image src={src} alt='category-image' fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" />
                        </div>
                        <span className='font-medium md:text-lg text-sm text-center text-white'>{title}</span>
                  </div>
                  <span className='font-medium md:text-lg text-sm text-[#777]'>+200 فریلنسر</span>
            </Link>
      )
}


const MainHeader = () => {
      return (
            <div className='bg-[#C9E4F9] w-full md:h-[430px] h-auto my-4 pb-4 md:pb-0 md:pt-12 pt-3'>
                  <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between w-[90%] mx-auto">
                        <div className="flex flex-col gap-5 mb-3 md:mb-0 mt-4">
                              <p className='md:text-[32px] text-xl text-[#000] font-normal'>در بین نمونه کار ها جستجو کنید</p>
                              <p className='md:text-xl text-sm text-[#000] font-normal'>و مطمئن پروژه‌های خود را برون‌سپاری کنید</p>
                        </div>
                        <div className="relative lg:w-[368px] w-[200px] lg:h-[289px] h-[170px]">
                              <Image src={"/skills/mainheader.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    className="w-full h-full" alt='mainheader-image' />
                        </div>
                  </div>
                  <div className="w-[57%] mx-auto my-5 bg-white rounded-lg flex justify-between items-center md:py-3 py-1.5 px-1.5 mb-4">
                        <input type="text" className='w-[90%] bg-none border-none outline-none' />
                        <span className='md:w-7 md:h-7 w-4 h-4'>
                              <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4163 25.3737C6.82467 25.3737 1.45801 20.007 1.45801 13.4154C1.45801 6.8237 6.82467 1.45703 13.4163 1.45703C20.008 1.45703 25.3747 6.8237 25.3747 13.4154C25.3747 20.007 20.008 25.3737 13.4163 25.3737ZM13.4163 3.20703C7.78134 3.20703 3.20801 7.79203 3.20801 13.4154C3.20801 19.0387 7.78134 23.6237 13.4163 23.6237C19.0513 23.6237 23.6247 19.0387 23.6247 13.4154C23.6247 7.79203 19.0513 3.20703 13.4163 3.20703Z" fill="#121212" />
                                    <path d="M25.6664 26.5374C25.4447 26.5374 25.223 26.4558 25.048 26.2808L22.7147 23.9474C22.3764 23.6091 22.3764 23.0491 22.7147 22.7108C23.053 22.3724 23.613 22.3724 23.9514 22.7108L26.2847 25.0441C26.623 25.3824 26.623 25.9424 26.2847 26.2808C26.1097 26.4558 25.888 26.5374 25.6664 26.5374Z" fill="#121212" />
                              </svg>
                        </span>
                  </div>
            </div>
      )
}



const ProjectSteps = () => {
      return (
            <div className='w-full bg-[#D5E8DB] my-6 flex lg:flex-row flex-col items-center justify-between px-5 py-4'>
                  <div className="lg:w-[78%] w-full flex items-center gap-1 justify-between">
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/skills/step1.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-1' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>ثبت پروژه و پرداخت امن</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/skills/step2.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-2' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>ارزیابی پروژه توسط تیم فرتاک و توافق بر کیفیت بالا</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/skills/step3.png"} fill
                                          sizes="(max-width: 768px) 100vw, auto"
                                          className="w-full h-full" alt='step-3' />
                              </div>
                              <span className='font-normal lg:text-xl md:text-base text-[8px] text-[#000] w-fit'>نظارت بر پروژه</span>
                        </div>
                        <div className="flex flex-1 gap-2.5 items-center">
                              <div className="relative lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]">
                                    <Image src={"/skills/step4.png"} fill
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


const NewProjectBox = () => {
      return (
            <div className='rounded-[20px] bg-[#fbfbfb] py-2.5 px-4 flex flex-col gap-3' id='new-project-box'>
                  <span className='text-sm font-normal text-[#1E2531]'>1 ساعت پیش</span>
                  <h3 className='md:text-xl text-base text-[#1D40D7] font-bold'>طراحی رابط کاربری سایت مواد غذایی</h3>
                  <h5 className='flex items-center gap-1.5 md:text-base text-sm font-bold text-[#000]'>
                        <span className='md:w-6 md:h-6 w-4 h-4'>
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z" stroke="#28303F" strokeWidth="1.5" strokeLinejoin="round" />
                              </svg>
                        </span>
                        بودجه از 5.000.000 تا 10.000.000 تومان
                  </h5>
                  <p className='font-normal md:text-sm text-xs leading-6 text-[#1E2531]'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با ...
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                        <Link className='rounded-lg flex justify-center items-center md:px-10 px-5 whitespace-nowrap md:py-3 py-2 bg-[#1E2531] font-extrabold md:text-base text-sm text-white' href={"/"}>ثبت پیشنهاد</Link>
                        <Link className='rounded-lg flex justify-center items-center md:px-10 px-5 whitespace-nowrap md:py-3 py-2 bg-none font-extrabold md:text-base text-sm text-[#1E2531] border border-[#1E2531]' href={"/"}>مشاهده پروژه</Link>
                  </div>
            </div>
      )
}


const FartakUser = () => {
      return (
            <div id='fartak-user' className='border border-[#ececec] py-2 px-3 rounded-lg'>
                  <div className="flex gap-2.5 items-center md:items-stretch">
                        <div className="relative md:w-[200px] md:h-[200px] w-[130px] h-[130px]">
                              <Image src={"/skills/user.png"} fill
                                    sizes="(max-width: 768px) 100vw, auto"
                                    alt='user-image' className='rounded-full w-full h-full' />
                        </div>
                        <div className="flex flex-col gap-2 mt-2.5 items-center">
                              <span className='md:text-lg text-sm font-normal my-3'>مرتضی دشتی</span>
                              <span className='my-0.5 md:text-2xl text-lg font-bold'>عکاس</span>
                              <div className="my-0.5 flex items-center gap-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.3901 1.15653L10.8002 3.99563C10.9902 4.38827 11.5002 4.76078 11.9303 4.84132L14.4804 5.26416C16.1106 5.53599 16.4906 6.72398 15.3205 7.91198L13.3304 9.91545C13.0003 10.2477 12.8103 10.9021 12.9203 11.3753L13.4904 13.8519C13.9404 15.8051 12.9003 16.5702 11.1902 15.5433L8.80005 14.1137C8.37003 13.8519 7.64998 13.8519 7.21995 14.1137L4.82978 15.5433C3.11967 16.5602 2.0796 15.8051 2.52963 13.8519L3.09967 11.3753C3.18967 10.892 2.99966 10.2376 2.66964 9.90539L0.6795 7.90191C-0.49058 6.72398 -0.110554 5.53599 1.51956 5.2541L4.06973 4.83125C4.49976 4.76078 5.0098 4.37821 5.19981 3.98556L6.60991 1.14647C7.37996 -0.383829 8.62004 -0.383829 9.3901 1.15653Z" fill="#FFAD41" />
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.3901 1.15653L10.8002 3.99563C10.9902 4.38827 11.5002 4.76078 11.9303 4.84132L14.4804 5.26416C16.1106 5.53599 16.4906 6.72398 15.3205 7.91198L13.3304 9.91545C13.0003 10.2477 12.8103 10.9021 12.9203 11.3753L13.4904 13.8519C13.9404 15.8051 12.9003 16.5702 11.1902 15.5433L8.80005 14.1137C8.37003 13.8519 7.64998 13.8519 7.21995 14.1137L4.82978 15.5433C3.11967 16.5602 2.0796 15.8051 2.52963 13.8519L3.09967 11.3753C3.18967 10.892 2.99966 10.2376 2.66964 9.90539L0.6795 7.90191C-0.49058 6.72398 -0.110554 5.53599 1.51956 5.2541L4.06973 4.83125C4.49976 4.76078 5.0098 4.37821 5.19981 3.98556L6.60991 1.14647C7.37996 -0.383829 8.62004 -0.383829 9.3901 1.15653Z" fill="#FFAD41" />
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.3901 1.15653L10.8002 3.99563C10.9902 4.38827 11.5002 4.76078 11.9303 4.84132L14.4804 5.26416C16.1106 5.53599 16.4906 6.72398 15.3205 7.91198L13.3304 9.91545C13.0003 10.2477 12.8103 10.9021 12.9203 11.3753L13.4904 13.8519C13.9404 15.8051 12.9003 16.5702 11.1902 15.5433L8.80005 14.1137C8.37003 13.8519 7.64998 13.8519 7.21995 14.1137L4.82978 15.5433C3.11967 16.5602 2.0796 15.8051 2.52963 13.8519L3.09967 11.3753C3.18967 10.892 2.99966 10.2376 2.66964 9.90539L0.6795 7.90191C-0.49058 6.72398 -0.110554 5.53599 1.51956 5.2541L4.06973 4.83125C4.49976 4.76078 5.0098 4.37821 5.19981 3.98556L6.60991 1.14647C7.37996 -0.383829 8.62004 -0.383829 9.3901 1.15653Z" fill="#FFAD41" />
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.3901 1.15653L10.8002 3.99563C10.9902 4.38827 11.5002 4.76078 11.9303 4.84132L14.4804 5.26416C16.1106 5.53599 16.4906 6.72398 15.3205 7.91198L13.3304 9.91545C13.0003 10.2477 12.8103 10.9021 12.9203 11.3753L13.4904 13.8519C13.9404 15.8051 12.9003 16.5702 11.1902 15.5433L8.80005 14.1137C8.37003 13.8519 7.64998 13.8519 7.21995 14.1137L4.82978 15.5433C3.11967 16.5602 2.0796 15.8051 2.52963 13.8519L3.09967 11.3753C3.18967 10.892 2.99966 10.2376 2.66964 9.90539L0.6795 7.90191C-0.49058 6.72398 -0.110554 5.53599 1.51956 5.2541L4.06973 4.83125C4.49976 4.76078 5.0098 4.37821 5.19981 3.98556L6.60991 1.14647C7.37996 -0.383829 8.62004 -0.383829 9.3901 1.15653Z" fill="#FFAD41" />
                                    </svg>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.3901 1.15653L10.8002 3.99563C10.9902 4.38827 11.5002 4.76078 11.9303 4.84132L14.4804 5.26416C16.1106 5.53599 16.4906 6.72398 15.3205 7.91198L13.3304 9.91545C13.0003 10.2477 12.8103 10.9021 12.9203 11.3753L13.4904 13.8519C13.9404 15.8051 12.9003 16.5702 11.1902 15.5433L8.80005 14.1137C8.37003 13.8519 7.64998 13.8519 7.21995 14.1137L4.82978 15.5433C3.11967 16.5602 2.0796 15.8051 2.52963 13.8519L3.09967 11.3753C3.18967 10.892 2.99966 10.2376 2.66964 9.90539L0.6795 7.90191C-0.49058 6.72398 -0.110554 5.53599 1.51956 5.2541L4.06973 4.83125C4.49976 4.76078 5.0098 4.37821 5.19981 3.98556L6.60991 1.14647C7.37996 -0.383829 8.62004 -0.383829 9.3901 1.15653Z" fill="#FFAD41" />
                                    </svg>
                              </div>
                              <span className='my-0.5 font-medium md:text-xl text-base text-center'>+ 34 پروژه موفق</span>
                        </div>
                  </div>
                  <div className='flex items-center my-3 gap-2'>
                        <span className='text-sm font-normal whitespace-nowrap'>مهارت ها : </span>
                        <div className="flex flex-wrap gap-2 items-center">
                              <span className='bg-[#ececec80] rounded-sm px-2 py-1 text-sm font-medium'>ویراستاری</span>
                              <span className='bg-[#ececec80] rounded-sm px-2 py-1 text-sm font-medium'>ویراستاری</span>
                        </div>
                  </div>
                  <Link href={"/"} className='border border-[#1E2531] w-full flex justify-center items-center font-black md:text-base text-sm text-[#1E2531] rounded-sm my-3 py-2'>دیدن پروفایل</Link>
            </div>
      )
}

