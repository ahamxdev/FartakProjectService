import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen?: boolean }) => {
  return (
    <div
      className={`transition-all duration-300 md:hidden ${
        isSidebarOpen
          ? "fixed right-0 top-0 bottom-0 z-30 bg-white px-3 py-5 w-[60%]"
          : "-right-[1000px] px-0 py-0 w-[0%] fixed bottom-0 top-0"
      }`}
    >
      <div
        className={`relative mx-auto lg:w-[120px] w-[70px] lg:h-[120px] h-[70px] ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <Image
          src={"/images/logo.png"}
          fill
          sizes="(max-width: 768px) 100vw, auto"
          className="w-full h-full"
          alt="logo"
        />
      </div>
      <ul
        className={`flex-col gap-5 pr-3.5 ${isSidebarOpen ? "flex" : "hidden"}`}
      >
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            خانه
          </Link>
        </li>
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            تدریس
          </Link>
        </li>
        <li className="block">
          <Link
            className="text-base font-bold text-[#00060F] flex"
            href={"/skills"}
          >
            پروژه ها
          </Link>
        </li>
        <li className="text-base font-bold text-[#00060F] flex items-center gap-2">
          دوره ها
        </li>
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            وبلاگ
          </Link>
        </li>
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            درباره ما
          </Link>
        </li>
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            تماس با ما
          </Link>
        </li>
        <li className="block">
          <Link className="text-base font-bold text-[#00060F] flex" href={"/"}>
            پشتیبانی
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
