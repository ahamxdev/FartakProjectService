"use client";
import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "@/components/skills/BreadCrumb";
// import OnlineStoreDesign from "@/components/skills/OnlineStoreDesign";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/utils/api";
import SectionTitle from "@/components/skills/SectionTitile";
import CategorySkillSliderSection from "@/components/skills/CategorySkillSliderSection";
import { SwiperSlide } from "swiper/react";

const SharedSkillContent = ({ id }: { id: string }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <SectionTitle
        title={`مراحل ثبت سفارش ${decodeURIComponent(id.split("-")[1])}`}
      />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          "1.ثبت پروژه",
          "2.انتخاب متخصص",
          "3.انجام پروژه",
          "4.دریافت نهایی",
        ].map((label, index) => (
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
            <span className="font-bold md:text-[22px] text-sm text-[#1450A3]">
              {label}
            </span>
          </div>
        ))}
      </section>
      <SectionTitle title={`جدیدترین پروژه های ثبت شده`} />
      <CategorySkillSliderSection>
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              className="border-[2px] border-[#1D40D7] rounded-2xl flex flex-col gap-6 p-4"
              id="new-project-box"
            >
              <h6 className="font-bold text-sm md:text-lg text-[#1450A3]">
                طراحی سایت سایت فروشگاهی
              </h6>
              <div className="flex items-center justify-between">
                <span className="font-normal md:text-sm text-xs text-[#1450A380]">
                  1 ساعت پیش
                </span>
                <span className="bg-[#EEF5FF] rounded-lg px-2 py-1 font-normal md:text-sm text-xs text-[#1450A3]">
                  در حال بررسی
                </span>
              </div>
              <p className="font-normal md:text-sm text-xs text-black">
                توضیحات مختصر درباره پروژه و خروجی پروژه و مدت زمان انجام آن و
                نوع سایت و هر توضیح اضافه ای که لازم باشد
              </p>
              <Link
                href={"/"}
                className="rounded-lg bg-[#1D40D7] md:py-2 py-1 flex justify-center items-center w-full md:text-sm text-xs font-normal text-white"
              >
                ثبت پروژه مشابه
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </CategorySkillSliderSection>

      <SectionTitle
        title={`نمونه کار های ${decodeURIComponent(id.split("-")[1])}`}
      />
      <CategorySkillSliderSection>
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              id="skill-box"
              className="bg-[#EEF5FF] rounded-2xl p-4 flex flex-col items-center gap-3"
            >
              <div className="relative lg:w-[220px] w-[150px] lg:h-[200px] h-[130px]">
                <Image
                  src={"/skills/image 13.png"}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="skill-box-image"
                />
              </div>
              <h6 className="text-[#1D40D7] md:text-xl text-base font-bold">
                طراحی لندینگ پیچ
              </h6>
              <Link
                href={"/skills/ui"}
                className="rounded-lg bg-[#1d40d7] flex justify-center items-center w-full py-1 text-white text-sm font-normal"
              >
                مشاهده اطلاعات
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </CategorySkillSliderSection>

      <SectionTitle title={"پروژتون در کمترین زمان ممکن ثبت کنید"} />
      <section className="w-[90%] flex flex-col gap-4 mx-auto md:my-10 my-5 bg-[#EEF5FF] rounded-2xl border-[2px] border-[#1E1E1E] py-5 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-2 w-full justify-between">
          <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
            <label
              className="font-bold md:text-[22px] text-sm text-[#000]"
              htmlFor=""
            >
              یک عنوان برای پروژه خود وارد کنید .
            </label>
            <input
              type="text"
              className="border-[2px] bg-white border-[#1D40D7] rounded-lg py-4 px-4 placeholder:text[#aaa] placeholder:text-base placeholder:font-normal"
              placeholder="عنوان پروژه خود را وارد کنید"
            />
          </div>
          <div className="flex flex-col gap-3.5 md:w-[50%] w-full">
            <label
              className="font-bold md:text-[22px] text-sm text-[#000]"
              htmlFor=""
            >
              زمان پیشنهادی شما برای تحویل پروژه چقدر است .
            </label>
            <input
              type="text"
              className="border-[2px] bg-white border-[#1D40D7] rounded-lg py-4 px-4 placeholder:text[#aaa] placeholder:text-base placeholder:font-normal"
              placeholder="تعداد روز"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="md:w-[60%] w-full flex flex-col gap-2">
            <label
              className="font-bold md:text-[22px] text-sm text-[#000]"
              htmlFor=""
            >
              بیشتر درباره پروژه بگویید .
            </label>
            <textarea
              className="w-full h-[150px] md:h-[190px] border-[2px] border-[#1D40D7] rounded-lg py-4 px-4 placeholder:text[#aaa] bg-white placeholder:text-base placeholder:font-normal"
              placeholder="توضیحات تکمیلی"
            ></textarea>
          </div>
          <div
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
            className="md:w-[40%] bg-white w-full mt-9 h-[120px] md:h-[190px] flex justify-center items-center cursor-pointer border-[2px] border-[#1D40D7] rounded-lg text-xs md:text-base font-bold"
          >
            <input ref={inputRef} type="file" hidden />
            آپلود عکس یا فایل
          </div>
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

export default SharedSkillContent;
