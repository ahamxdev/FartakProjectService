"use client";
import Image from "next/image";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import SectionSlider from "@/components/skills/SectionSlider";
// Placeholder icons – replace with actual icons in /public/icons/
import Logo from "../../../../../public/logo.png";
import IconSample from "../../../../../public/open book.png";
import HeaderImage from "../../../../../public/courses/Image (1).svg";
import CourseImg from "../../../../../public/courses/image 13.svg";
import UserImg from "../../../../../public/courses/vecteezy_3d-male-character-working-on-a-laptop_24785851.svg";

interface FeatureItem {
  icon: any;
  label: string;
  badge?: number;
  badgePosition?: { top: string; right: string };
}

const featuresLeft: FeatureItem[] = [
  { icon: IconSample, label: "جزوه های کلاسی" },
  { icon: IconSample, label: "آزمون های آنلاین" },
  { icon: IconSample, label: "مشاهده آفلاین کلاس ها" },
  { icon: IconSample, label: "آزمون های کلاسی" },
];

const featuresRight: FeatureItem[] = [
  {
    icon: IconSample,
    label: "کیفیت بالای تصویر و صوت",
    badge: 156,
    badgePosition: { top: "-10px", right: "-10px" },
  },
  {
    icon: IconSample,
    label: "مشاهده و پشتیبانی",
    badge: 325,
    badgePosition: { top: "-10px", right: "-10px" },
  },
  { icon: IconSample, label: "پرسش و پاسخ حین کلاس" },
  { icon: IconSample, label: "کلاس های آنلاین و زنده" },
];

const FartakQuality: FC = () => {
  return (
    <div className="relative bg-white py-10 px-8 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="bg-[#7649C4] text-white w-[80%] rounded-[24px] p-8 flex flex-col items-center">
        <div className="flex justify-around items-center rounded-[24px]  w-full border border-white/60 bg-[linear-gradient(15deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.1)_41.54%,rgba(0,0,0,0.4)_88.33%)] backdrop-blur-[10px]">
          <div className="flex flex-col justify-end items-end gap-12">
            <span className="text-lg">
              با فرتاک سه سال{" "}
              <span className="text-yellow-300 font-bold text-xl">
                متوسطه اول
              </span>{" "}
              رو 20 میگیری
            </span>
            <button className="cursor-pointer border-[1px] bg-transparent rounded-md flex  justify-center items-center p-2 w-[85%]">
              <span className="text-sm ">برای ثبت نام کلیک کنید </span>
            </button>
          </div>
          <Image src={HeaderImage} alt="header img" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full relative mt-8">
        {/* Left Features */}
        <div className="flex flex-col gap-4">
          {featuresRight.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#CBC2FF] border border-[#7F56D9] p-4 rounded-xl w-60 flex flex-col justify-center items-center gap-3 relative"
            >
              <Image
                className="border border-[#00000099] p-2 rounded-lg"
                src={item.icon}
                alt="icon"
                width={64}
                height={64}
              />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex justify-center items-start bg-[#7649C4] rounded-[32px] w-[380px] h-[200px] py-5">
            <h3 className="text-white">کیفیت به سبک فرتاک</h3>
          </div>
          <div className="-mt-27 z-1 border border-[#7F56D9] bg-white rounded-full p-6 w-68 h-68 flex items-center justify-center">
            <Image src={Logo} alt="Fartak Project" width={230} height={230} />
          </div>
          <div className="mt-[-50px] flex gap-7  relative">
            {/* Left Card */}
            <div className="bg-[#CBC2FF] w-44 h-56 rounded-tl-[40px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col items-center justify-center border border-[#7F56D9] p-4">
              <Image
                className="border border-[#00000099] p-2 rounded-lg"
                src={IconSample}
                alt="icon"
                width={64}
                height={64}
              />
              <span className="mt-4 font-semibold text-sm">صرفه اقتصادی</span>
            </div>

            {/* Right Card */}
            <div className="bg-[#CBC2FF] w-44 h-56 rounded-tr-[40px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col items-center justify-center border border-[#7F56D9] p-4">
              <Image
                className="border border-[#00000099] p-2 rounded-lg"
                src={IconSample}
                alt="icon"
                width={64}
                height={64}
              />
              <span className="mt-4 font-semibold text-sm">تماس تصویری</span>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-4">
          {featuresLeft.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#CBC2FF] border border-[#7F56D9] p-4 rounded-xl w-60 flex flex-col justify-center items-center gap-3 relative"
            >
              <Image
                className="border border-[#00000099] p-2 rounded-lg"
                src={item.icon}
                alt="icon"
                width={64}
                height={64}
              />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionSlider title="دوره های آنلاین دهم" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="py-6">
            <div className="bg-[#EEF5FF] rounded-2xl shadow-md border border-gray-200 w-[250px] p-4 flex flex-col items-center text-right font-sans">
              {/* Course Image */}
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-3">
                <Image
                  src={CourseImg}
                  alt="Course Preview"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Title */}
              <h3 className="text-sm text-right w-full font-semibold text-[#1450A3] mb-1">
                فارسی اول ابتدایی
              </h3>

              {/* Time and Rating */}
              <div className="flex justify-between items-center w-full text-xs text-gray-500 mb-1">
                <span>۳۶ ساعت</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/merged.png"
                    alt="Star Icon"
                    width={10}
                    height={10}
                  />
                  <span>۴.۵</span>
                </div>
              </div>

              {/* Teacher Name */}
              <div className="w-full text-[#57626D] font-bold text-base mb-3">
                نام استاد
              </div>

              {/* Action Button */}
              <button className="bg-[#1450A3] text-white w-full py-2 rounded-lg text-sm hover:bg-[#0044cc] transition">
                مشاهده اطلاعات
              </button>
            </div>
          </SwiperSlide>
        ))}
      </SectionSlider>
      <div className="flex w-[83%] mt-6 justify-between items-center rounded-[16px_80px] h-[200px] bg-gradient-to-r from-[#FCE638] to-[#FCE94C] shadow-[0_0_5px_rgba(0,0,0,0.25)] pr-8">
        <p className="text-[#1E1E1E] font-bold md:text-xl">
          میدونی که فرتاک برات بهترین دوره ها رو آماده کرده ؟
        </p>
        <Image className="-mt-27 p-2" src={UserImg} alt="icon" />
      </div>
      <SectionSlider title="دوره های آنلاین دهم" viewAllUrl="/category/all">
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="py-6">
            <div className="bg-[#EEF5FF] rounded-2xl shadow-md border border-gray-200 w-[250px] p-4 flex flex-col items-center text-right font-sans">
              {/* Course Image */}
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-3">
                <Image
                  src={CourseImg}
                  alt="Course Preview"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Course Title */}
              <h3 className="text-sm text-right w-full font-semibold text-[#1450A3] mb-1">
                فارسی اول ابتدایی
              </h3>

              {/* Time and Rating */}
              <div className="flex justify-between items-center w-full text-xs text-gray-500 mb-1">
                <span>۳۶ ساعت</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/merged.png"
                    alt="Star Icon"
                    width={10}
                    height={10}
                  />
                  <span>۴.۵</span>
                </div>
              </div>

              {/* Teacher Name */}
              <div className="w-full text-[#57626D] font-bold text-base mb-3">
                نام استاد
              </div>

              {/* Action Button */}
              <button className="bg-[#1450A3] text-white w-full py-2 rounded-lg text-sm hover:bg-[#0044cc] transition">
                مشاهده اطلاعات
              </button>
            </div>
          </SwiperSlide>
        ))}
      </SectionSlider>
      <div className="rounded-lg border-2 border-[#1E1E1E] bg-white w-full p-8">
        <h3 className="text-black my-2 font-bold md:text-xl">نمونه کلاس های فرتاک</h3>
        <p className="text-black my-3 text-sm">
          اطلاعاتت‌رو وارد کن تا همین الان ویدیوهای نمونه تدریس رو ببینی!
        </p>
        <div className="flex justify-between items-center">
          <div>
            <label className="font-normal text-base text-black">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              className="border-[2px] border-[#1E1E1E]  rounded-lg py-2 px-4 mt-2"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
            />
          </div>
          <div className="">
            <label className="font-normal text-base text-black">
              شماره تلفن
            </label>
            <input
              type="tel"
              className="border-[2px] border-[#1E1E1E] rounded-lg py-2 px-4 mt-2"
              placeholder="لطفا شماره خود را وارد کنید"
            />
          </div>
          <div className="">
            <label className="font-normal text-base text-black">
              شماره تلفن
            </label>
            <input
              type="tel"
              className="border-[2px] border-[#1E1E1E] rounded-lg py-2 px-4 mt-2"
              placeholder="لطفا شماره خود را وارد کنید"
            />
          </div>
          <button className="bg-[#1D40D7] mt-7 text-white w-[40%] h-[44px] py-2 rounded-lg text-sm hover:bg-[#0044cc] transition">
            مشاهده ویدیو ها 
          </button>
        </div>
      </div>
    </div>
  );
};

export default FartakQuality;
