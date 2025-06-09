import React from "react";
import Image from "next/image";

interface PrerequisitesProps {
  [key: string]: unknown;
}

const Prerequisites: React.FC<PrerequisitesProps> = () => {
  return (
    <div className="my-8 text-right">
      {/* Prerequisites Section */}
      <div className="p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">پیش نیاز ها</h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Image src="/camera video.png" alt="Video Icon" width={30} height={30} />
            <span className="font-semibold text-lg">آموزش رایگان نصب پایتون در ویندوز</span>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Image src="/camera video.png" alt="Video Icon" width={30} height={30} />
            <span className="font-semibold text-lg">آموزش اصول ومبانی برنامه نویسی (رایگان)</span>
          </div>
        </div>
      </div>

      {/* Related Software Section */}
      <div className="p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">نرم افزار های مرتبط</h2>
        <div className="flex items-center justify-start gap-3">
          <Image src="/Star.png" alt="Star Icon" width={30} height={30} />
          <span className="font-semibold text-lg">Spyder / Pythone 3.7</span>
        </div>
      </div>
      <div className="p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">آموزش های مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center justify-end gap-3 p-4 rounded-lg">
            <Image src="/c++.png" alt="C++ Icon" width={332} height={51} />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 rounded-lg">
            <Image src="/js.png" alt="JavaScript Icon" width={332} height={51} />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 rounded-lg">
            <Image src="/c+.png" alt="C# Icon" width={332} height={51} />
          </div>
        </div>
      </div>

      {/* Info Boxes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-white p-6 rounded-lg shadow-md"
       style={{
        backgroundImage: "url('/Rectangle.png')",
      }}
      >
      
       
        <div className="flex flex-col items-center justify-center text-center gap-2 relative border border-black w-[159px] h-[141px]  rounded-[10px] ">
          <Image src="/students.png" alt="Students Icon" width={48} height={48} />
          <span className="font-semibold text-base">صدها هزار دانشجو</span>
          <Image src="/rectangle.png" alt="Rectangle Background" width={120} height={48} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]" />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2 border border-black w-[159px] h-[141px]  rounded-[10px] ">
          <Image src="/books.png" alt="Clock Icon" width={48} height={48} />
          <span className="font-semibold text-base">هزاران ساعت آموزش</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2 border border-black w-[159px] h-[141px]  rounded-[10px] ">
          <Image src="/Vector.png" alt="Quality Icon" width={48} height={48} />
          <span className="font-semibold text-base">تضمین کیفیت آموزش ها</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2 border border-black w-[159px] h-[141px]  rounded-[10px] ">
          <Image src="/open book.png" alt="Book Icon" width={48} height={48} />
          <span className="font-semibold text-base">دسترسی آنی و همیشگی</span>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites; 