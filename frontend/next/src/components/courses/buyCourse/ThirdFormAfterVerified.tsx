"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Day = {
  id: number;
  title: string;
  subtitle: string;
  slots: string[];
};

const week: Day[] = [
  {
    id: 1,
    title: "۱",
    subtitle: "امروز",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 2,
    title: "۲",
    subtitle: "فردا",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 3,
    title: "۳",
    subtitle: "دوشنبه",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 4,
    title: "۴",
    subtitle: "سه‌شنبه",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 5,
    title: "۵",
    subtitle: "چهارشنبه",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 6,
    title: "۶",
    subtitle: "پنج‌شنبه",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
  {
    id: 7,
    title: "۷",
    subtitle: "جمعه",
    slots: ["08:00 - 11:00", "13:00 - 16:00", "16:00 - 19:00", "20:00 - 23:00"],
  },
];

const persianDigits = [
  "۰",
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
] as const;
const toPersianDigits = (value: string) =>
  value.replace(/\d/g, (d) => persianDigits[Number(d)]);

const ThirdFormAfterVerified = () => {
  const [selected, setSelected] = useState<{
    day: number;
    slot: string;
  } | null>(null);
  const router = useRouter();

  return (
    <section
      className="w-full max-w-7xl mx-auto mt-8 px-4 lg:px-0 overflow-hidden"
      dir="rtl"
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-right">
        انتخاب زمان کلاس
      </h2>
      <p className="text-[#5E5E5E] text-sm lg:text-base text-right mt-2">
        با انتخاب روزها و ساعت‌هایی که استاد در دسترس است، درخواستتان را ثبت
        کنید.
      </p>
      <p className="text-[#C30000] text-xs lg:text-sm text-right mt-1">
        * به ازای هر نفر ۲۰ درصد به قیمت اضافه می‌شود.
      </p>

      {/* Week navigator */}
      <div className="flex items-center justify-between border rounded-xl px-4 py-3 mt-6">
        <span className="font-semibold text-lg lg:text-xl">
          هفته جاری - اردیبهشت ۱۴۰۴
        </span>
      </div>

      <div className="overflow-x-auto mt-4">
        <div className="flex justify-between gap-4 rounded-xl py-6">
          {week.map((d, idx) => {
            const isToday = idx === 0;
            return (
              <div
                key={d.id}
                className={`min-w-[110px] flex-shrink-0 rounded-xl border ${
                  isToday
                    ? "bg-[#FFEE98] border-none"
                    : "bg-white border-[#1E1E1E]"
                } flex flex-col items-center`}
              >
                <header className="flex flex-col items-center py-2">
                  <span className="text-lg font-bold">{d.title}</span>
                  <span className="text-xs text-[#6C6C6C]">{d.subtitle}</span>
                  <hr className="w-16 border-t mt-2 border-[#D9D9D9]" />
                </header>
                <ul className="flex flex-col gap-4 py-4 px-2">
                  {d.slots.map((slot) => {
                    const chosen =
                      selected?.day === d.id && selected.slot === slot;
                    return (
                      <li key={slot} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`day-${d.id}`}
                          checked={chosen}
                          onChange={() => setSelected({ day: d.id, slot })}
                          className="form-radio text-[#158AFF] focus:ring-0"
                        />
                        <span className="text-[13px] lg:text-sm">
                          {toPersianDigits(slot)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Select Box for Weekly Sessions */}
      <div className="flex items-center justify-between border rounded-xl px-4 py-3 mt-6">
        <label
          htmlFor="weekly-sessions"
          className="font-semibold text-lg lg:text-xl"
        >
          چه تعداد جلسه در هفته مد نظر شما است؟
        </label>
        <div className="relative">
          <select
            id="weekly-sessions"
            className="w-60 appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#158AFF] focus:border-[#158AFF] hover:border-gray-400 transition-colors duration-200 pr-10"
            aria-label="تعداد جلسات در هفته"
          >
            <option value="1">۱ جلسه</option>
            <option value="2">۲ جلسه</option>
            <option value="3">۳ جلسه</option>
            <option value="4">۴ جلسه</option>
            <option value="5">۵ جلسه</option>
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Custom Select Box for Class Duration */}
      <div className="flex items-center justify-between border rounded-xl px-4 py-3 mt-6">
        <label
          htmlFor="class-duration"
          className="font-semibold text-lg lg:text-xl"
        >
          در صورت رضایت از استاد میخواهید تا چه زمانی کلاس ادامه داشته باشد؟
        </label>
        <div className="relative">
          <select
            id="class-duration"
            className="w-40 appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#158AFF] focus:border-[#158AFF] hover:border-gray-400 transition-colors duration-200 pr-10"
            aria-label="مدت زمان ادامه کلاس"
          >
            <option value="1">۱ ماه</option>
            <option value="2">۲ ماه</option>
            <option value="3">۳ ماه</option>
            <option value="6">۶ ماه</option>
            <option value="12">۱ سال</option>
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Responsive Textarea and File Input */}
      <div className="mt-6">
        <label
          htmlFor="additional-info"
          className="font-semibold text-sm lg:text-xl text-right block mb-2"
        >
          توضیحات تکمیلی خود را در این قسمت وارد کنید
        </label>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl py-3">
          <textarea
            id="additional-info"
            className="h-[95px] w-full md:w-1/2 rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal border-[#1E1E1E]"
            placeholder="توضیحات تکمیلی"
          ></textarea>
          <div className="h-[95px] w-full md:w-1/2 flex items-center justify-center rounded-lg border-[2px] border-[#1E1E1E]">
            <div className="h-[55px] w-full md:w-[80%] flex items-center justify-center rounded-lg py-3 px-3 bg-[#FFEE98]">
              <input
                type="file"
                className="opacity-0 absolute cursor-pointer w-full"
              />
              <span className="text-center text-[#1E1E1E]">
                فایل انتخاب کنید
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-4 w-full bg-[#1D40D7] text-white h-[40px] rounded-lg cursor-pointer"
        onClick={() => router.push("/fa/tadris/result")}
      >
        تایید زمان انتخاب شده
      </button>
    </section>
  );
};

export default ThirdFormAfterVerified;