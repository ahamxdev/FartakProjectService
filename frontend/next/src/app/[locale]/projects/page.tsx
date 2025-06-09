


"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import SectionSlider from "@/components/skills/SectionSlider";
import CategoryBox from "@/components/skills/CategoryBox";
import MainHeader from "@/components/skills/MainHeader";
import ProjectSteps from "@/components/skills/ProjectSteps";
import NewProjectBox from "@/components/skills/NewProjectBox";
import FartakUser from "@/components/skills/FartakUser";

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

