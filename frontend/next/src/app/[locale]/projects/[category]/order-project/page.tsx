"use client";
import React, { useRef } from "react";
// import Header from '@/components/modules/Header'
import Image from "next/image";
import InputCheckbox from "@/components/skills/InputCheckbox";
import SkillFooter from "@/components/skills/SkillFooter";

const OrderProject = () => {
  const inputRef = useRef();

  return (
    <>
      {/* <Header /> */}
      <div
        id="category-header"
        className="w-full relative md:h-[415px] h-[200px] my-4 pb-4 md:pb-0 md:pt-12 pt-3"
      >
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div className="relative w-full md:h-[415px] h-[200px]">
            <Image
              src={"/images/AI Generator (7).png"}
              fill
              sizes="100vw, auto"
              className="w-full h-full"
              alt="mainheader-image"
            />
          </div>
        </div>
        <div className="flex justify-center items-center lg:mt-[15%] mt-[16%] sm:mt-[40%] md:mt-[24%] relative z-10 flex-col gap-5">
          <h1 className="font-bold md:text-4xl text-xl text-[#fff] flex justify-center items-end">
            ثبت پروژه
          </h1>
          <h3 className="font-bold md:text-4xl text-xl text-center text-[#fff] flex justify-center items-end">
            با فرتاک ایده های خود را به واقعیت تبدیل کنید
          </h3>
        </div>
      </div>

      <section className="w-[90%] mx-auto md:my-8 my-5 flex flex-col gap-10">
        <h6 className="text-[##00060F] font-bold md:text-3xl text-xl text-right">
          ایجاد یک پروژه
        </h6>
        <div className="flex md:flex-row flex-col justify-between md:gap-30 gap-5">
          <div className="flex flex-col gap-4 md:w-[50%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              میخواهید چه کاری برای شما انجام شود ؟
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              سرویس مورد نظر خود را انتخاب کنید .
            </label>
            <div className="flex items-center gap-4 w-full">
              <button
                className={`rounded-lg border-[2px] border-[#DC3545] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]`}
              >
                دسته بندی
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
          <div className="flex flex-col gap-4 md:w-[50%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              یک عنوان خوب برای پروژه بنویسید .
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              عنوان پروژه
            </label>
            <div className="flex items-center gap-4 w-full">
              <input
                className={`rounded-lg border-[2px] border-[#DC3545] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]`}
              />
            </div>
            <span className="text-sm text-[#DC3545] font-normal flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#dc3545]"></span>
              مثال : طراحی یک .لوگوی مینیمال برای تولید کیف و کفش
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col gap-4 md:w-[60%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              درباره پروژه توضیح دهید
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              هر چه توضیحات بیشتر و واضح‌تر باشد به شما کمک می‌کند سریعتر به
              آنچه می‌خواهید برسید
            </label>
            <div className="flex items-center gap-4 w-full">
              <textarea
                className={`rounded-lg border-[2px] h-[190px] border-[#DC3545] w-full px-3 py-2 flex justify-between items-center md:text-base bg-[#fff] font-normal cursor-pointer text-[#00000080] placeholder:text-[#aaa] text-sm`}
                placeholder="توضیحات تکمیلی"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-[40%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              آپلود فایل
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              فایل هایی که به توضیحات شما در معرفی پروژه کمک میکند را آپلود کنید
            </label>
            <div
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.click();
                }
              }}
              className={`w-full bg-white flex justify-center items-center cursor-pointer rounded-lg text-xs md:text-base font-bold border-[2px] h-[190px] border-[#DC3545]`}
            >
              <input ref={inputRef} type="file" hidden />
              آپلود عکس یا فایل
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              به چه مهارت‌هایی نیاز دارید؟
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              حداکثر پنچ مهارت را انتخاب کنید
            </label>
            <div className="flex items-center gap-4 w-full">
              <button
                className={`rounded-lg border-[2px] border-[#DC3545] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]`}
              >
                جست و جوی مهارت
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border-[1px] border-[#DC3545] px-6 py-2 justify-between">
              <span className="cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24309 0.757865L0.757812 9.24315M9.24309 9.24309L0.757812 0.757812"
                    stroke="#495AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="md:text-lg text-sm text-[#000] font-normal">
                مهارت 1
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              اولویت و بودجه را مشخص کنید.
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              با انتخاب اولویت پروژه، فریلنسر از هدف شما مطلع می‌شود و می‌تواند
              خروجی بهتری را به شما ارائه کند.
            </label>
          </div>
          <div className="flex items-center gap-5 justify-between flex-wrap">
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
          </div>
          <span className="md:text-base text-sm text-[##00060F] font-normal">
            انتخاب بودجه (تومان)
          </span>
          <div className="flex md:flex-row flex-col items-center md:gap-30 gap-5">
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <label className="text-[##00060F] text-sm font-normal" htmlFor="">
                حداقل بودجه (تومان)
              </label>
              <div className="flex items-center gap-4 w-full">
                <input className="rounded-lg border-[1px] border-[#D3D3D3] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]" />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <label className="text-[##00060F] text-sm font-normal" htmlFor="">
                حداکثر بودجه (تومان)
              </label>
              <div className="flex items-center gap-4 w-full">
                <input className="rounded-lg border-[1px] border-[#D3D3D3] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-between flex-wrap my-6">
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] border-[#DC3545] px-4 py-2`}
            >
              <InputCheckbox />
            </div>
          </div>
          <button
            className={`w-full flex justify-center items-center text-[#fff] rounded-lg bg-[#6C757D] py-3 md:text-lg text-sm font-bold cursor-pointer`}
          >
            ثبت رایگان پروژه
          </button>
        </div>
      </section>

      <SkillFooter />
    </>
  );
};

export default OrderProject;
