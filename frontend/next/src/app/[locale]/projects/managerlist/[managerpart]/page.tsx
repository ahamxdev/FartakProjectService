"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
// import ManagerListHeader from "@/components/skills/ManagerListHeader";
import ManagerListBox from "@/components/skills/ManagerListBox";
import { UseCategory } from "@/contexts/CategoryContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import { api } from "@/utils/api";
// import { useParams } from "next/navigation";

type ItemType = {
  projectCategoryId: number;
  title: string;
  projectCategoryParentId: number;
  image: string;
};

const Managerpart = () => {
  const params = useParams<{ managerpart: string }>();
  console.log(params);

  const id = params.managerpart;
  console.log(id);

  const { category } = UseCategory();

  const [subCategory, setSubCategory] = useState<ItemType[]>([]);
  const [subCategoryId, setSubCategoryId] = useState<number>(0);

  const getCtgs = {
    projectCategoryId: parseInt(id),
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
        setSubCategory(data.projectCategories);
      });
  }, []);

  return (
    <>
      {/* <ManagerListHeader /> */}

      <div className="flex w-[50%] mx-auto md:my-10 my-5 justify-center items-center">
        <h6 className="text-center text-[#1E1E1E] md:text-3xl text-xl font-bold">
          مدیران <span className="text-[#FAB437]">فرتاک</span> متخصص در حوزه
          خدمات وب‌سایت
        </h6>
      </div>

      <section className="w-[90%] mx-auto md:my-12 my-5 flex justify-between items-center gap-6 flex-wrap">
        {category?.map((item) => (
          <Link
            href={`/projects/managerlist/${item.projectCategoryId}`}
            className={`flex flex-col items-center gap-2 ${
              item.projectCategoryId != parseInt(id) && "opacity-70"
            }`}
            key={item?.projectCategoryId}
          >
            <div className="flex justify-center items-center bg-[#1E2531] px-14 py-6 rounded-lg">
              <div className="relative lg:w-[56px] w-[35px] lg:h-[56px] h-[35px]">
                <Image
                  src={`/images/ctg/${item?.projectCategoryId}.png`}
                  fill
                  sizes="(max-width: 768px) 100vw, auto"
                  className="w-full h-full"
                  alt="logo"
                />
              </div>
            </div>
            <span className="font-normal text-[#1E2531] md:text-lg text-sm">
              {item?.title}
            </span>
          </Link>
        ))}
      </section>

      <div className="flex items-center gap-3.5 w-[90%] mx-auto md:my-6 my-3">
        <span className="flex gap-0.5">
          <svg
            width="2"
            height="35"
            viewBox="0 0 2 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.47852L0.999999 33.4785"
              stroke="#FAB437"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="self-end"
            width="2"
            height="19"
            viewBox="0 0 2 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.47852L0.999999 17.4785"
              stroke="#1E2531"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <h2 className="md:text-2xl text-sm font-black">
          {parseInt(id) == 1
            ? "مدیران توسعه و نرم افزار موبایل"
            : parseInt(id) == 2
            ? "مدیران محتوا و ترجمه"
            : parseInt(id) == 3
            ? "مدیران طراحی و خلاقیت"
            : parseInt(id) == 4
            ? "مدیران بازاریابی و فروش"
            : parseInt(id) == 5
            ? "مدیران کسب و کار"
            : parseInt(id) == 6 && "مدیران مهندسی"}
        </h2>
      </div>

      <div className="flex items-center gap-3.5 w-[90%] overflow-x-auto py-3 mx-auto md:my-6 my-3">
        <span className="text-black font-medium whitespace-nowrap md:text-xl text-sm">
          فیلتر ها :
        </span>

        <div className="flex items-center gap-4">
          {subCategory?.map((item) => (
            <button
              key={item?.projectCategoryId}
              onClick={() => setSubCategoryId(item?.projectCategoryId)}
              className={`${
                subCategoryId == item.projectCategoryId
                  ? "bg-[#1E2531] text-white"
                  : "bg-[#fbfbfb] text-black border border-[#C2C2C2]"
              } w-[220px] rounded-2xl md:text-sm text-xs font-semibold flex cursor-pointer items-center gap-3 px-8 py-2 whitespace-nowrap`}
            >
              {item?.title}{" "}
              <span className="cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1.00007L1 13M13 12.9999L1 1"
                    stroke="#F3B036"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-[90%] mx-auto md:my-6 my-3">
        <ManagerListBox />
        <ManagerListBox />
        <ManagerListBox />
        <ManagerListBox />
        <ManagerListBox />
        <ManagerListBox />
        <ManagerListBox />
      </section>
    </>
  );
};

export default Managerpart;
