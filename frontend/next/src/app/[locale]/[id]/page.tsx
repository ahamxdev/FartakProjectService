"use client";

import { use } from "react";
import TeacherInfo from "@/components/courses/TeacherInfo";
import CourseSyllabus from "@/components/courses/CourseSyllabus";
import CourseComments from "@/components/courses/CourseComments";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { id, locale } = use(params);
  
  const course = {
    id: id,
    image: "/python.jpg",
    title: "آموزش پایتون",
    teacher: { 
      name: "علی رضایی", 
      profile: "/teacherProfile.png", 
      bio: "مدرس با تجربه",
      degree: "دکترا",
      specialty: "برنامه نویسی پایتون"
    },
    students: 120,
    duration: 24,
    rating: 4.8,
    price: "۵۰۰,۰۰۰",
    syllabus: [
      { title: "مقدمه", duration: "۵۰:۳۹" },
      { title: "نصب پایتون", duration: "۵۰:۳۹" },
      { title: "متغیرها", duration: "۵۰:۳۹" },
      { title: "حلقه‌ها", duration: "۵۰:۳۹" },
      { title: "توابع", duration: "۵۰:۳۹" },
    ],
    comments: [
      { user: "کاربر ۱", text: "خیلی خوب بود!" },
      { user: "کاربر ۲", text: "عالی و کاربردی" },
    ],
  };

  const handleBuy = () => {
    console.log("Buying course:", id);
  };

  return (
    <div>
      <div className="max-w-[1296px] w-full h-[580px] relative mx-auto my-8 px-[50px] rounded-lg overflow-hidden">
  <Image 
    src="/layout.png"
    alt="Course Layout"
    fill
    className="object-cover rounded-lg"
  />
</div>

      <div className="container mx-auto p-4 max-w-3xl">
        <div className="flex justify-start gap-8 text-lg font-semibold my-4">
          <span>مشخصات آموزش</span>
          <span>نظرات (365 نفر)</span>
        </div>
        <div className="text-right my-4">
          <h1 className="text-3xl font-bold">آموزش برنامه نویسی پایتون و مثال های عملی</h1>
          <p className="text-xl text-gray-700">در Pythone + گواهینامه</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md my-6 text-right">
          <h2 className="text-2xl font-bold">پایتون چیست ؟</h2>
          <p className="text-gray-700 leading-relaxed">
            آموزش پایتون یکی از پرطرفدارترین دوره‌های سبزلرن است که به آموزش جامع زبان برنامه‌نویسی پایتون (Python) می‌پردازد. این دوره با رویکرد پروژه‌محور و پشتیبانی همیشگی، فرصتی عالی برای یادگیری و تسلط بر این زبان قدرتمند فراهم می‌کند.
به طور خلاصه این زبان از اول به عنوان زبانی با ساختار کدنویسی ساده، کدهای کوتاه و سرعت خوب در محاسبات پیچیده مشهور شد که می تونید اون رو یاد بگیرید و با تمرین کافی، پیچیده ترین برنامه هارو با کمترین کدنویسی بسازید. همین مسئله باعث شده حتی تازه کارها این زبان رو برای شروع انتخاب کنن.
این زبان کاربردهای خیلی زیادی داره و از هوش مصنوعی و علم داده گرفته تا بازی های کامپیوتری و نرم افزارهای دسکتاپ در حال استفاده از زبان پایتون هستن که هر روز هم جامعه توسعه
            <button className="text-blue-600 mr-1 focus:outline-none">بیشتر</button>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-6 my-8">
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/Group.png" alt="job" width={109} height={109} />
            <span className="font-semibold text-[16px]">295 فرصت شغلی</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/Frame.png" alt="student" width={109} height={109} />
            <span className="font-semibold text-[16px]">295 دانشجو</span>
          </div>
        </div>

        <div className="text-right text-2xl font-bold my-4">محتوای این آموزش</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/camera.png" alt="video" width={85} height={85} />
            <span className="font-semibold text-[16px]">13 ساعت و 2 دقیقه آموزش ویدئویی</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/file.png" alt="quiz" width={85} height={85} />
            <span className="font-semibold text-[16px]">113 سوال سنجش یادگیری</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/folder.png" alt="files" width={85} height={85} />
            <span className="font-semibold text-[16px]">فایل برنامه ها و پروژه ها</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/Frame 7.png" alt="qa" width={85} height={85} />
            <span className="font-semibold text-[16px]">پرسش و پاسخ</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <Image src="/Frame8.png" alt="certificate" width={85} height={85} />
            <span className="font-semibold text-[16px]">آزمون و گواهینامه دو زبانه</span>
          </div>
        </div>

        <CourseSyllabus syllabus={course.syllabus} />
        <TeacherInfo {...course.teacher} />
        <CourseComments comments={course.comments} />
      </div>
    </div>
  );
}