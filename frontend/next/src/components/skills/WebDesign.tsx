"use client";
import React, { useState } from "react";
// import BreadCrumb from '@/components/modules/BreadCrumb'
// import Image from 'next/image'
// import Link from 'next/link'
// import InputCheckbox from '@/components/modules/InputCheckbox'
// import CategorySkillSliderSection from '@/components/modules/CategorySkillSliderSection'
import { SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitile";
import WebCreationStepBox from "./WebCreationStepBox";
import InputCheckbox from "./InputCheckbox";
import CategorySkillSliderSection from "./CategorySkillSliderSection";
import NewestProjectBox from "./NewestProjectBox";
// import SkillBox from './SkillBox'
// import NewestProjectBox from '@/components/modules/NewestProjectBox'
// import SectionTitle from '@/components/modules/SectionTitle'
// import WebCreationStepBox from '@/components/modules/WebCreationStepBox'

const WebDesign = () => {
  const [webCreationStep, setWebCreationStep] = useState<string>("web-sub");
  const [webCreationStepIndex, setWebCreationStepIndex] = useState<number>(0);
  console.log(webCreationStepIndex);
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    "سیستم مدیریت محتوا داشته باشه؟",
    "دارای پنل مدیریت باشه؟",
    "بتونه محتوا ویرایش کنه؟",
    "امکان اضافه کردن صفحه داشته باشه؟",
  ];

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

      <SectionTitle title={"تو سه مرحله سایت خود را سفارش دهید ."} />
      <section className="w-[90%] mx-auto md:my-10 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
        <div className="flex flex-col gap-3 border-[2px] border-[#495AFF] items-center px-4 py-6 rounded-lg">
          <p className="md:text-xl text-base font-bold text-[#000] text-center">
            بررسی رزومه و پیشنهادات قیمتی و زمانی طراحان سایت
          </p>
          <p className="md:text-base text-sm leading-6 font-normal text-[#1450A3] text-center">
            بدون اینکه از خونه بیرون برید یا نیاز باشه به شرکت های مختلف زنگ
            بزنید ، کلی طراح سایت حرفه ای ، سفارش شمارو بررسی می‌کنند و قیمت ،
            زمان و نحوه انجام کار رو براتون میفرستند
          </p>
        </div>
        <div className="flex flex-col gap-3 border-[2px] border-[#495AFF] items-center px-4 py-6 rounded-lg">
          <p className="md:text-xl text-base font-bold text-[#000] text-center">
            بررسی رزومه و پیشنهادات قیمتی و زمانی طراحان سایت
          </p>
          <p className="md:text-base text-sm leading-6 font-normal text-[#1450A3] text-center">
            بدون اینکه از خونه بیرون برید یا نیاز باشه به شرکت های مختلف زنگ
            بزنید ، کلی طراح سایت حرفه ای ، سفارش شمارو بررسی می‌کنند و قیمت ،
            زمان و نحوه انجام کار رو براتون میفرستند
          </p>
        </div>
        <div className="flex flex-col gap-3 border-[2px] border-[#495AFF] items-center px-4 py-6 rounded-lg">
          <p className="md:text-xl text-base font-bold text-[#000] text-center">
            بررسی رزومه و پیشنهادات قیمتی و زمانی طراحان سایت
          </p>
          <p className="md:text-base text-sm leading-6 font-normal text-[#1450A3] text-center">
            بدون اینکه از خونه بیرون برید یا نیاز باشه به شرکت های مختلف زنگ
            بزنید ، کلی طراح سایت حرفه ای ، سفارش شمارو بررسی می‌کنند و قیمت ،
            زمان و نحوه انجام کار رو براتون میفرستند
          </p>
        </div>
      </section>

      <SectionTitle title={"با چند کلیک سایت خود را سفارش دهید ."} />
      <section className="w-[90%] mx-auto md:my-10 my-5">
        <div className="flex items-center w-full overflow-x-auto">
          <div className="flex space-x-4 min-w-max pb-4">
            <button
              onClick={() => {
                setWebCreationStep("web-sub");
                setWebCreationStepIndex(1);
              }}
              className={`${
                webCreationStep === "web-sub" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-sub"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-sub"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  1
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-sub"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  موضوع سایت
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-sub"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-type");
                setWebCreationStepIndex(2);
              }}
              className={`${
                webCreationStep === "web-type" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-type"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-type"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  2
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-type"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  نوع سایت
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-type"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-pages");
                setWebCreationStepIndex(2);
              }}
              className={`${
                webCreationStep === "web-pages" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-pages"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-pages"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  3
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-pages"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  تعداد صفحات
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-pages"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-time");
                setWebCreationStepIndex(3);
              }}
              className={`${
                webCreationStep === "web-time" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-time"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-time"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  4
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-time"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  زمان طراحی سایت
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-time"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-budget");
                setWebCreationStepIndex(5);
              }}
              className={`${
                webCreationStep === "web-budget" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-budget"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-budget"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  5
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-budget"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  بودجه تخمینی
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-budget"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-desc");
                setWebCreationStepIndex(6);
              }}
              className={`${
                webCreationStep === "web-desc" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-desc"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-desc"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  6
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-desc"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  توضحات تکمیلی
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-desc"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-familiar");
                setWebCreationStepIndex(7);
              }}
              className={`${
                webCreationStep === "web-familiar" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-familiar"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-familiar"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  7
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-familiar"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  سایت مشابه
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-familiar"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setWebCreationStep("web-options");
                setWebCreationStepIndex(8);
              }}
              className={`${
                webCreationStep === "web-options" ? "bg-[#495AFF]" : "bg-white"
              } flex cursor-pointer gap-3 items-center rounded-md py-3 px-5 flex-shrink-0`}
            >
              <div
                className={`md:w-10 md:h-10 w-6 h-6 rounded-full flex justify-center items-center border-[2px] ${
                  webCreationStep === "web-options"
                    ? "border-[#fff]"
                    : "border-[#828282]"
                }`}
              >
                <span
                  className={`${
                    webCreationStep === "web-options"
                      ? "text-white"
                      : "text-[#828282]"
                  } md:text-[22px] text-sm font-normal`}
                >
                  8
                </span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span
                  className={`md:text-lg text-sm font-normal ${
                    webCreationStep === "web-options"
                      ? "text-white"
                      : "text-[#828282]"
                  }`}
                >
                  گزینه های تکمیلی
                </span>
                <span
                  className={`rounded-lg px-2 py-1 md:text-sm text-xs font-normal ${
                    webCreationStep === "web-options"
                      ? "text-[#0030FD] bg-[#D9EEFF]"
                      : "text-[#828282] bg-[#dcdcdc]"
                  }`}
                >
                  در انتظار تکمیل شدن
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto md:my-10 my-5 flex flex-col items-center gap-8">
        {webCreationStep !== "web-familiar" &&
        webCreationStep !== "web-options" ? (
          <p className="font-bold md:text-xl text-base text-[#000]">
            {webCreationStep === "web-sub"
              ? "موضوع سایت"
              : webCreationStep === "web-type"
              ? "نوع سایت"
              : webCreationStep === "web-pages"
              ? "تعداد صفحات سایت"
              : webCreationStep === "web-time"
              ? "ددلاین طراحی سایت"
              : webCreationStep === "web-budget"
              ? "بودجه تخمینی سایت"
              : webCreationStep === "web-desc" && "توضیحات تکمیلی"}{" "}
            خود را انتخاب کنید
          </p>
        ) : (
          <p className="font-bold md:text-xl text-base text-[#000]">
            {webCreationStep === "web-familiar"
              ? "سایت های مشابه"
              : webCreationStep === "web-options" &&
                "گزینه های تکمیلی (اختیاری)"}
          </p>
        )}
        {webCreationStep === "web-desc" ||
        webCreationStep === "web-familiar" ? (
          <>
            {webCreationStep === "web-desc" ? (
              <div className="w-full flex flex-col border border-black h-[300px] gap-3 rounded-lg py-5 px-6">
                <textarea
                  className="w-full placeholder:md:text-base placeholder:text-xs placeholder:font-bold placeholder:text-[#aaa] h-[90%]"
                  placeholder="کمی بیشتر در مورد پروژه بنویسید و حروجی کار مد نظر خود را شرخ دهید"
                ></textarea>
                <button className="bg-[#495AFF] cursor-pointer flex justify-center items-center rounded-lg text-white  fnt-normal text-sm px-4 py-2 self-end">
                  مرحله بعد
                </button>
              </div>
            ) : (
              webCreationStep === "web-familiar" && (
                <div className="w-full flex flex-col border border-black h-[300px] gap-3 rounded-lg py-5 px-6">
                  <textarea
                    className="w-full placeholder:md:text-base placeholder:text-xs placeholder:font-bold placeholder:text-[#aaa] h-[90%]"
                    placeholder="اگر سایت مشابه ای مدنظر دارید ، لینک سایت را در اینجا بنویسید"
                  ></textarea>
                  <button className="bg-[#495AFF] cursor-pointer flex justify-center items-center rounded-lg text-white  fnt-normal text-sm px-4 py-2 self-end">
                    مرحله بعد
                  </button>
                </div>
              )
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {webCreationStep === "web-sub" ? (
              <>
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
              </>
            ) : webCreationStep === "web-type" ? (
              <>
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
              </>
            ) : webCreationStep === "web-pages" ? (
              <>
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
              </>
            ) : webCreationStep === "web-time" ? (
              <>
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={false} />
              </>
            ) : webCreationStep === "web-budget" ? (
              <>
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
                <WebCreationStepBox title={"طراحی سایت شرکتی"} isSvg={true} />
              </>
            ) : (
              webCreationStep === "web-options" && (
                <>
                  {options.map((label) => (
                    <InputCheckbox
                      key={label}
                      label={label}
                      checked={selected === label}
                      onChange={() => setSelected(label)}
                    />
                  ))}
                </>
              )
            )}
          </div>
        )}
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
    </>
  );
};

export default WebDesign;
