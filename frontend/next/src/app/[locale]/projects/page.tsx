"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import SectionSlider from "@/components/skills/SectionSlider";
import CategoryBox from "@/components/skills/CategoryBox";
import MainHeader from "@/components/skills/MainHeader";
import ProjectSteps from "@/components/skills/ProjectSteps";
import NewProjectBox from "@/components/skills/NewProjectBox";
import FartakUser from "@/components/skills/FartakUser";
// import { api } from "@/utils/api";
import { UseCategory } from "@/contexts/CategoryContext";

const items = [
  {
    id: 1,
    tags: ["نظر کارفرما", "پروفایل فریلنسر"],
    details: [
      "تحویل شده در: ۳ روز قبل",
      "بودجه: ۸۵۰,۰۰۰ تومان",
      "مدت زمان انجام: ۳۴ روز",
      "انجام شده توسط: مرتضی دشتی",
    ],
  },
  {
    id: 2,
    tags: ["نظر کارفرما", "پروفایل فریلنسر"],
    details: [
      "تحویل شده در: ۳ روز قبل",
      "بودجه: ۸۵۰,۰۰۰ تومان",
      "مدت زمان انجام: ۳۴ روز",
      "انجام شده توسط: مرتضی دشتی",
    ],
  },
  {
    id: 3,
    tags: ["نظر کارفرما", "پروفایل فریلنسر"],
    details: [
      "تحویل شده در: ۳ روز قبل",
      "بودجه: ۸۵۰,۰۰۰ تومان",
      "مدت زمان انجام: ۳۴ روز",
      "انجام شده توسط: مرتضی دشتی",
    ],
  },
  {
    id: 4,
    tags: ["نظر کارفرما", "پروفایل فریلنسر"],
    details: [
      "تحویل شده در: ۳ روز قبل",
      "بودجه: ۸۵۰,۰۰۰ تومان",
      "مدت زمان انجام: ۳۴ روز",
      "انجام شده توسط: مرتضی دشتی",
    ],
  },
];

// type ItemType = {
//   projectCategoryId: number;
//   title: string;
//   projectCategoryParentId: number;
// };

export default function Home() {
  const [showField, setShowField] = useState<string>("همه");
  const { category } = UseCategory();


  // const [category, setCategory] = useState<ItemType[]>([]);

  // useEffect(() => {
  //   api("/api/ProjectCategories/GetAllParent", "POST")
  //     .then((res) => {
  //       if (res.status == 200) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCategory(data.projectCategories);
  //     });
  // }, []);

  return (
    <>
      <MainHeader />
      <ProjectSteps />
      <section className="grid py-20 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 md:my-8 my-4 w-[90%] mx-auto">
        {/* <CategoryBox src={"/skills/Index.png"} title={category[1]?.title}
        id={category[1]?.projectCategoryId} />
        <CategoryBox
          src={"/skills/Laptop Coding-ctg.png"}
          hasScale={true}
          title={category[0]?.title}
          id={category[0]?.projectCategoryId}
        />
        <CategoryBox
          src={"/skills/Increase-ctg.png"}
          title={category[3]?.title}
          id={category[3]?.projectCategoryId}
        />
        <CategoryBox
          src={"/skills/Paint Palette-ctg.png"}
          title={category[2]?.title}
          id={category[2]?.projectCategoryId}
        />
        <CategoryBox
          src={"/skills/Goal.png"}
          title={category[4]?.title}
          id={category[4]?.projectCategoryId}
          hasScale={true}
        />
        <CategoryBox
          src={"/skills/Drafting Compass.png"}
          title={category[5]?.title}
          id={category[1]?.projectCategoryId}
        /> */}
        {category?.map((item, index) => (
          <CategoryBox
            key={item?.projectCategoryId}
            src={`/images/ctg/${item?.projectCategoryId}.png`}
            title={item?.title}
            hasScale={index == 1 || index == 4 ? true : false}
            id={item?.projectCategoryId}
            addProject={false}
          />
        ))}
      </section>
      <SectionSlider sliderPerview={3} title="پروژه های جدید فرتاک" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <NewProjectBox />
          </SwiperSlide>
        ))}
      </SectionSlider>
      <SectionSlider sliderPerview={3} title="گروه فریلنسری فرتاک" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <FartakUser />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <section className="w-[90%] mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <span className="flex gap-0.5">
              <svg
                width="2"
                height="35"
                viewBox="0 0 2 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.47852L0.999999 33.4785"
                  stroke="#FAB437"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="self-end"
                width="2"
                height="19"
                viewBox="0 0 2 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.47852L0.999999 17.4785"
                  stroke="#1E2531"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h2 className="md:text-2xl text-base font-black">
              نمونه پروژه های انجام شده
            </h2>
          </div>
          <Link
            href={"/"}
            className="md:text-base text-xs font-bold text-[#1E2531]"
          >
            مشاهده همه
          </Link>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-4">
          <ul className="flex gap-3 w-full overflow-x-auto md:w-auto">
            {[
              { title: "همه" },
              { title: "عکاسی" },
              { title: "طراحی سایت" },
              { title: "تولید محتوا" },
              { title: "وبلاگ" },
              { title: "معماری" },
              { title: "سئو" },
              { title: "فروش و بازاریابی" },
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => setShowField(item.title)}
                className="flex flex-col items-center md:text-lg text-sm font-normal cursor-pointer whitespace-nowrap"
              >
                {item.title}
                {showField === item.title && (
                  <div className="mt-1">
                    <svg
                      width="35"
                      height="6"
                      viewBox="0 0 47 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5C18.5736 5 28.4264 5 46 5"
                        stroke="#FAB437"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1 1L30 1"
                        stroke="#1E2531"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M34 1H46"
                        stroke="#1E2531"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-[#292D32]">
              مرتب سازی بر اساس
            </span>
            <button className="flex items-center gap-1 text-[#1D40D7] text-sm cursor-pointer font-normal">
              جدیدترین ها
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9995 16.8983C11.2995 16.8983 10.5995 16.6283 10.0695 16.0983L3.54953 9.57828C3.25953 9.28828 3.25953 8.80828 3.54953 8.51828C3.83953 8.22828 4.31953 8.22828 4.60953 8.51828L11.1295 15.0383C11.6095 15.5183 12.3895 15.5183 12.8695 15.0383L19.3895 8.51828C19.6795 8.22828 20.1595 8.22828 20.4495 8.51828C20.7395 8.80828 20.7395 9.28828 20.4495 9.57828L13.9295 16.0983C13.3995 16.6283 12.6995 16.8983 11.9995 16.8983Z"
                  fill="#1D40D7"
                />
              </svg>
            </button>
          </div>
        </div>

        <section className="grid py-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 md:my-2 my-4 w-[100%] mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={"/images/Frame 1171275276.png"}
                alt={`Image ${item.id}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition duration-300 group-hover:blur-lg"
              />
              <div className="absolute inset-0 bg-[#0000001A] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute top-0 left-3 rounded-lg w-[90%] mx-auto mt-3 px-3 py-2 bg-[#00000080] text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <ul className="flex flex-wrap gap-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="whitespace-nowrap">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-3 w-[90%] mb-3 px-3 py-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <Link
                  href={""}
                  className="bg-[#FAB437CC] flex-1 py-1.5 text-black text-xs px-2 rounded-md flex justify-center items-center shadow"
                >
                  {item.tags[0]}
                </Link>
                <Link
                  href={""}
                  className="bg-[#0000001A] flex-1 py-1.5 border border-[#6C6C6C] text-black text-xs px-2 rounded-md flex justify-center items-center shadow"
                >
                  {item.tags[1]}
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section
          id="dream-box"
          className="w-[100%] gap-5 my-5 md:my-2 flex lg:flex-row flex-col items-center"
        >
          <div className="w-full flex flex-col gap-8 px-14 py-10">
            <span className="text-[#1D40D7] font-extrabold lg:text-2xl text-lg">
              کارفرما عزیز :
            </span>
            <h6 className="font-extrabold lg:text-3xl text-center md:text-right md:text2xl text-xl text-[#fff]">
              ما رویای شما را به واقعیت تبدیل میکنیم.
            </h6>
            <p className="font-bold lg:text-lg md:text-xl text-base text-[#C7C7C7]">
              در فرتاک پس از ثبت پروژه مدیر لاین پیشنهاد شما را دریافت نمونده و
              پروژه شما با رضایت بالا به شما تحویل میدهد.
            </p>
            <Link
              className="bg-transparent w-fit md:text-lg text-xs font-normal text-white px-8 md:py-3 py-1.5 rounded-lg border border-white mt-3 md:mt-0 flex justify-center items-center"
              href={"/projects/project-registration"}
            >
              ثبت پروژه
            </Link>
          </div>
        </section>
      </section>

      <section className="w-[90%] flex flex-col lg:flex-row gap-10 mx-auto md:my-16 my-6">
        <div
          className="lg:w-[40%] w-full px-6 py-10 lg:py-10 flex flex-col justify-end pb-8 gap-3 border border-[#CBC2FF] bg-[#fbfbfb]"
          id="step-right-section"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src={"/images/photo_2025-06-05_14-59-16.jpg"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
          <div className="px-6 py-10 lg:py-10 pb-8">
            <h4 className="md:text-2xl text-lg font-black text-[#000]">
              فرتاک برترین پلتفرم ایران
            </h4>
            <p className="md:text-lg text-sm font-medium text-[#000] text-justify">
              فرتاک خانه کارفرما هست . پروژه خود را به راحتی برون سپاری کنید و
              بهترین شکل فرتاک در این راه به شما کمک خواهد کرد.
            </p>
          </div>
        </div>
        <div className="flex lg:w-[60%] w-full flex-col gap-4 py-10">
          <h6 className="font-black lg:text-3xl text-xl">مراحل انجام پروژه</h6>
          <ul className="flex flex-col gap-6 mt-5">
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image
                  src={"/skills/step1-en.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="step-1"
                />
              </div>
              ثبت پروژه و پرداخت امن
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image
                  src={"/skills/step2-en.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="step-1"
                />
              </div>
              ارزیابی پروژه توسط تیم فرتاک و توافق بر کیفیت بالا
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image
                  src={"/skills/step3-en.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="step-1"
                />
              </div>
              نظارت بر پروژه
            </li>
            <li className="flex gap-3 items-center md:text-2xl text-sm font-medium">
              <div className="relative md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
                <Image
                  src={"/skills/step4-en.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="step-1"
                />
              </div>
              تحویل پروژه
            </li>
          </ul>
        </div>
      </section>

      <section className="w-[90%] flex flex-col gap-10 mx-auto md:my-16 my-6">
        <div className="flex flex-wrap items-center gap-4">
          <button
            className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}
          >
            <div className="relative lg:w-[70px] w-[40px] lg:h-[48px] h-[24px]">
              <Image
                src={"/skills/Services.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="service-image"
              />
            </div>
            برترین سرویس ها
          </button>
          <button
            className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}
          >
            <div className="relative lg:w-[70px] w-[40px] lg:h-[60px] h-[35px]">
              <Image
                src={"/skills/Laptop Coding.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="Laptop Coding"
              />
            </div>
            توسعه نرم افزار و ای تی
          </button>
          <button
            className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}
          >
            <div className="relative lg:w-[70px] w-[40px] lg:h-[60px] h-[35px]">
              <Image
                src={"/skills/translation.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="translation-image"
              />
            </div>
            محتوا و ترجمه
          </button>
          <button
            className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}
          >
            <div className="relative lg:w-[60px] w-[30px] lg:h-[50px] h-[30px]">
              <Image
                src={"/skills/Increase.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="Increase-image"
              />
            </div>
            بازاریابی و فروش
          </button>
          <button
            className={`flex items-center gap-1 font-normal md:text-base text-sm text-[#000] bg-white rounded-full px-3 py-1 cursor-pointer border border-[#CBC2FF]`}
          >
            <div className="relative lg:w-[64px] w-[60px] lg:h-[35px] h-[35px]">
              <Image
                src={"/skills/Paint Palette.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="Paint Palette"
              />
            </div>
            طراحی و خلاقیت
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:w-[40%] w-full gap-3">
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              استخدام برنامه نویس
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی سایت
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              خدمات سئو
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی لوگو
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی اپلیکشن
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی ست اداری
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی کاتالوگ{" "}
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              صفحه ارایی و طراحی مجله
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی بنر
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              استخدام ادمین
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              استخدام تایپیست
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی بسته بندی
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی سربرگ شرکت
            </Link>
          </li>
          <li>
            <Link
              className="md:text-lg text-sm font-normal text-[#000]"
              href={"/"}
            >
              طراحی کارت ویزیت
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <p className="md:text-xl text-sm font-extrabold text-[#000]">
              در سریع ترین زمان ممکن پروژه خود را بصورت رایگان ثبت کنید
            </p>
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={"/skills/Hand Left.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="hand-left"
              />
            </div>
          </div>
          <Link
            href={"/projects/project-registration"}
            className="bg-[#00C83F] flex justify-center items-center rounded-lg py-3 md:w-[400px] w-[200px] text-white md:text-xl text-base font-extrabold md:ml-22"
          >
            ثبت سریع پروژه
          </Link>
        </div>
      </section>
    </>
  );
}
