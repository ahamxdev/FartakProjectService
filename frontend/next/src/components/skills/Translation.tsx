"use client";
import React, { useEffect, useRef, useState } from "react";
// import BreadCrumb from "@/components/modules/BreadCrumb";
// import Image from "next/image";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types"; // این خط بسیار مهم است
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "./SectionTitile";
import Image from "next/image";
import ChooseTranslationLanguageBox from "./ChooseTranslationLanguageBox";
import TranslationCategory from "./TranslationCategory";
import QualityProjectBox from "./QualityProjectBox";
import NewestProjectBox from "./NewestProjectBox";
import CategorySkillSliderSection from "./CategorySkillSliderSection";
// import SkillBox from "./SkillBox";

const Translation = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevRef = useRef<HTMLInputElement | null>(null);
  const nextRef = useRef<HTMLInputElement | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // useEffect(() => {
  //   if (
  //     swiperInstance &&
  //     prevRef.current &&
  //     nextRef.current &&
  //     typeof swiperInstance.params.navigation !== 'boolean'
  //   ) {
  //     swiperInstance.params.navigation.prevEl = prevRef.current;
  //     swiperInstance.params.navigation.nextEl = nextRef.current;

  //     swiperInstance.navigation.destroy();
  //     swiperInstance.navigation.init();
  //     swiperInstance.navigation.update();
  //   }
  // }, [swiperInstance, prevRef, nextRef]);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation !== "boolean"
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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

      <SectionTitle title={"مراحل ثبت سفارش طراحی رابط کاربری"} />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
            <Image
              src={"/images/image 17.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="step-of-order"
            />
          </div>
          <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">
            1.ثبت پروژه
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
            <Image
              src={"/images/image 17.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="step-of-order"
            />
          </div>
          <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">
            2.انتخاب متخصص
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
            <Image
              src={"/images/image 17.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="step-of-order"
            />
          </div>
          <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">
            3.انجام پروژه
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative md:w-[225px] md:h-[225px] w-[170px] h-[170px]">
            <Image
              src={"/images/image 17.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="step-of-order"
            />
          </div>
          <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">
            4.دریافت نهایی
          </span>
        </div>
      </section>

      <SectionTitle title={"انواع خدمات ترجمه فرتاک"} />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        <ChooseTranslationLanguageBox countryImage={"تستی"} countryName="ایران" />
        <ChooseTranslationLanguageBox countryImage={"تستی"} countryName="فرانسه" />
        <ChooseTranslationLanguageBox countryImage={"تستی"} countryName="اسپانیا" />
        <ChooseTranslationLanguageBox countryImage={"تستی"} countryName="ایتالیا" />
      </section>

      <SectionTitle title={"دسته بندی های ترجمه"} />
      <section className="w-[90%] mx-auto md:my-10 my-5">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          onSwiper={setSwiperInstance}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="py-5">
            <TranslationCategory />
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <TranslationCategory />
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <TranslationCategory />
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <TranslationCategory />
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <TranslationCategory />
          </SwiperSlide>
        </Swiper>

        <div className="flex items-center justify-center gap-4">
          <span ref={prevRef} className="w-4 h-4 cursor-pointer text-[#1e2531]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1E2531"
              className="100%"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span ref={nextRef} className="w-4 h-4 cursor-pointer text-[#1e2531]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1E2531"
              className="100%"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </section>

      <SectionTitle title={"کیفیت انجام پروژه ترجمه"} />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <QualityProjectBox type={"bronze"} />
        <QualityProjectBox type={"silver"} />
        <QualityProjectBox type={"gold"} />
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
      {/* <CategorySkillSliderSection>
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </CategorySkillSliderSection> */}

      <SectionTitle title={"پروژتون در کمترین زمان ممکن ثبت کنید"} />
      <section className="w-[90%] flex flex-col gap-4 mx-auto md:my-10 my-5 bg-[#EEF5FF] rounded-2xl border-[2px] border-[#1E1E1E] py-5 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full">
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-bold md:text-[22px] text-sm text-[#000]">
              زمان مبدا را انتخاب کنید
            </span>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]">
                زمان مبدا
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.47852L6 5.47852L11 1.47852"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-bold md:text-[22px] text-sm text-[#000]">
              زمان مقصد را انتخاب کنید
            </span>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]">
                زمان مقصد
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.47852L6 5.47852L11 1.47852"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-bold md:text-[22px] text-sm text-[#000]">
              کیفیت ترجمه را انتخاب کنید
            </span>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]">
                کیفیت
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.47852L6 5.47852L11 1.47852"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-bold md:text-[22px] text-sm text-[#000]">
              نوع ترجمه را انتخاب کنید
            </span>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]">
                نوع
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.47852L6 5.47852L11 1.47852"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 w-full">
            <label
              className="font-bold md:text-[22px] text-sm text-[#000]"
              htmlFor=""
            >
              تعداد کلمات خود را وارد کنید
            </label>
            <input
              type="number"
              className="rounded-lg border-[2px] border-[#1D40D7] bg-white py-1 px-4 placeholder:text[#aaa] placeholder:text-base placeholder:font-normal"
              placeholder="تعداد کلمات"
            />
          </div>
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-bold md:text-[22px] text-sm text-[#000]">
              فایل خود را وارد کنید
            </span>
            <div className="flex items-center gap-4">
              <div
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.click();
                  }
                }}
                className="bg-white w-full py-1 rounded-lg border-[2px] border-[#1D40D7] flex justify-center items-center cursor-pointer text-xs md:text-base font-bold"
              >
                <input ref={inputRef} type="file" hidden />
                آپلود فایل
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label
            className="font-bold md:text-[22px] text-sm text-[#000]"
            htmlFor=""
          >
            توضیحات خود را وارد بنویسید
          </label>
          <textarea
            className="w-full h-[100px] border-[2px] border-[#1D40D7] rounded-lg py-4 px-4 placeholder:text[#aaa] bg-white placeholder:text-base placeholder:font-normal"
            placeholder="توضیحات خود را وارد بنویسید"
          ></textarea>
        </div>

        <button
          className="w-full bg-[#1D40D7] py-3 flex items-center justify-center rounded-lg font-bold md:text-lg text-xs text-white cursor-pointer my-4"
          id="confirm-btn"
        >
          ثبت رایگان پروژه
        </button>
      </section>
    </>
  );
};

export default Translation;
