"use client"
import React from "react"
import BreadCrumb from "@/components/skills/BreadCrumb"
import OnlineStoreDesign from "@/components/skills/OnlineStoreDesign"
import Image from "next/image"
import Link from "next/link"
// import ContentCreation from "@/components/skills/ContentCreation"
// import ApplicationWebsiteDesign from "@/components/skills/ApplicationWebsiteDesign"
// import Programming from "@/components/skills/Programming"
// import Translation from "@/components/skills/Translation"
// import WebDesign from "@/components/skills/WebDesign"

const CategoryInfo = () => {
  return (
    <>

      <BreadCrumb items={["مهارت ها شما", "طراحی سایت و اپلیکیشن", "طراحی رابط کاربری"]} />
      <section className='flex flex-col lg:flex-row lg:gap-16 gap-8 w-[90%] mx-auto md:my-10 my-5'>
        <div className="relative lg:w-[55%] w-full lg:h-[530px] h-[350px]">
          <Image
            src="/skills/image 10.png"
            alt="category-detail-image"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full h-full"
          />
        </div>


        <div className="flex flex-col justify-between lg:w-[45%] w-full">
          <div className="flex flex-col gap-5">
            <h1 className='text-[#1450A3] font-bold text-lg md:text-xl lg:text-[32px]'>طراحی رابط کاربری</h1>
            <p className='font-normal leading-6 text-sm md:text-base lg:text-xl text-justify'>
              سفارش این پروژه نقطهٔ شروع تبدیل ایده‌های دیجیتال شما به یک واقعیت ملموس است.
              در این پروژه، با رویکردی نوین و استاندارد، ساختاری منسجم و ظاهری جذاب برای وب‌سایت شما طراحی می‌شود.
              تمامی جنبه‌ها از طراحی واکنش‌گرا و بهینه‌سازی سرعت گرفته تا هماهنگی دقیق المان‌های بصری و فنی مد نظر قرار گرفته تا سایت شما در انواع دستگاه‌ها به بهترین شکل نمایش داده شود.
              تیم مجرب ما با دقت به جزئیات و بهره‌گیری از تجربه‌های عملی، محیطی حرفه‌ای و مدرن را برای حضور شما در فضای آنلاین فراهم می‌آورد.
            </p>
          </div>
          <Link href={"/projects/project-registration"} className='bg-[#1D40D7] text-white rounded-lg flex justify-center items-center md:text-lg text-xs font-bold w-full py-2 my-6 lg:my-0'>همین الان پروژت رو ثبت کن</Link>
        </div>
      </section>

      <OnlineStoreDesign />

      {/* <ApplicationWebsiteDesign /> */}

      {/* <ContentCreation /> */}

      {/* <Programming /> */}

      {/* <Translation /> */}

      {/* <WebDesign /> */}

    </>
  )
}

export default CategoryInfo