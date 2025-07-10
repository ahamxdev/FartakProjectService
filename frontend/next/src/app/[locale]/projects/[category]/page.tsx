"use client";
import React, { useEffect, useState } from "react";
// import Header from '@/components/modules/Header'
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import CategoryHeader from "@/components/skills/CategoryHeader";
import ProjectSteps from "@/components/skills/ProjectSteps";
import CategoryBox from "@/components/skills/CategoryBox";
import NewProjectBox from "@/components/skills/NewProjectBox";
import SectionSlider from "@/components/skills/SectionSlider";
import FartakUser from "@/components/skills/FartakUser";
import { api } from "@/utils/api";
import { useParams } from "next/navigation";

type ItemType = {
  projectCategoryId: number;
  title: string;
  projectCategoryParentId: number;
};

const CategoryPage = () => {
  const params = useParams<{ category: string }>();
  const id = params.category;

  const [category, setCategory] = useState<ItemType[]>([]);

  let getCtgs = {
    projectCategoryId: id.split("-")[0],
  };
  useEffect(() => {
    api("/api/ProjectCategories/GetChildrenById", "POST", getCtgs)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCategory(data.projectCategories);
      });
  }, []);
  return (
    <>
      {/* <Header /> */}

      <CategoryHeader title={"متن تستی"} />
      <ProjectSteps />
      <section className="grid py-20 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 md:my-8 my-4 w-[90%] mx-auto">
        {/* <CategoryBox
          src={"/skills/Index.png"}
          title={category[1]?.title}
          id={category[1]?.projectCategoryId}
        />
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
            src={"/skills/Drafting Compass.png"}
            title={item?.title}
            id={item?.projectCategoryParentId}
            hasScale={
              index == 1 ||
              index == 4 ||
              index == 7 ||
              index == 10 ||
              index == 13
                ? true
                : false
            }
          />
        ))}
      </section>

      <section
        id="dream-box"
        className="w-[90%] mx-auto gap-5 my-5 md:my-8 flex lg:flex-row flex-col items-center"
      >
        <div className="relative lg:w-[50%] w-full lg:h-[370px] hidden lg:block">
          <Image
            src={"/images/session.png"}
            fill
            sizes="(max-width: 1024px) 100vw, 300px"
            className="w-full h-full"
            alt="dream-box-image"
          />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col items-center gap-8 px-5 py-10 lg:py-0">
          <h6 className="font-bold lg:text-3xl text-center md:text-right md:text2xl text-xl text-[#fff]">
            اجرای صفر تا صد پروژه‌های برنامه‌نویسی و توسعه نرم‌افزار توسط تیم
            فرتاک
          </h6>
          <p className="font-bold lg:text-lg md:text-base text-sm text-[#fff]">
            ما در کنار شما هستیم تا از مرحله ایده‌پردازی و مشاوره اولیه تا اجرای
            کامل پروژه‌های برنامه‌نویسی و توسعه نرم‌افزار، تمامی مراحل را به
            بهترین شکل انجام دهیم.
          </p>
          <Link
            className="bg-[#00C83F] w-full md:text-lg text-xs font-normal text-white px-8 md:py-3 py-1.5 rounded-lg mt-3 md:mt-0 flex justify-center items-center"
            href={"translation/order-project"}
          >
            همین حالا پروژه خود را ثبت کنید{" "}
          </Link>
        </div>
      </section>

      <SectionSlider title="جدیدترین پروژه ها" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide className="py-6" key={i}>
            <NewProjectBox />
          </SwiperSlide>
        ))}
      </SectionSlider>
      <SectionSlider title="برترین تیم ها" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="py-6">
            <FartakUser />
          </SwiperSlide>
        ))}
      </SectionSlider>

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
            <p className="md:text-lg text-sm font-medium text-[#000]">
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
                  src={"/images/step1-en.png"}
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
                  src={"/images/step2-en.png"}
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
                  src={"/images/step3-en.png"}
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
                  src={"/images/step4-en.png"}
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
                src={"/images/Services.png"}
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
                src={"/images/Laptop Coding.png"}
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
                src={"/images/translation.png"}
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
                src={"/images/Increase.png"}
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
                src={"/images/Paint Palette.png"}
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
                src={"/images/Hand Left.png"}
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="hand-left"
              />
            </div>
          </div>
          <Link
            href={"/"}
            className="bg-[#00C83F] flex justify-center items-center rounded-lg py-3 md:w-[400px] w-[200px] text-white md:text-xl text-base font-extrabold md:ml-22"
          >
            ثبت پروژه
          </Link>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
