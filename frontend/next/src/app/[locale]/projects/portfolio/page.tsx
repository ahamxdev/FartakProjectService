"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import SubMenu from '@/components/skills/SubMenu'
import PortfolioBox from "@/components/skills/PortfolioBox";
import Pagination from "@/components/skills/Pagination";
import { api } from "@/utils/api";
import SubMenu from "@/components/skills/SubMenu";
// import Header from '@/components/modules/Header'

type parentHashtags = {
  projectHashtagId: number;
  title: string;
  projectHashtagParentId: number;
};

const Portfolio = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [isChildrenSubMenuOpen, setIsChildrenSubMenuOpen] =
    useState<boolean>(false);
  const [allHashtags, setAllHashtags] = useState<parentHashtags[]>([]);
  const [parentHashtags, setParentHashtags] = useState<parentHashtags[]>([]);
  const [childrenHashtags, setChildrenHashtags] = useState<parentHashtags[]>(
    []
  );
  const [filterPortfolio , setFilterPortfolio] = useState<string>("all")
  const [parentHashtagsTitle, setParentHashtagsTitle] =
    useState<string>("مهارت");
  const [childrenHashtagsTitle, setChildrenHashtagsTitle] =
    useState<string>("برچسب");
  const [parentHashtagsId, setParentHashtagsId] = useState<number>(0);
  const [ChildrenHashtagsId, setChildrenHashtagsId] = useState<number>(0);
  console.log(isSubMenuOpen);
  console.log(ChildrenHashtagsId);

  useEffect(() => {
    api("/api/ProjectHashtags/GetAllParent", "POST")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw new Error("مشکلی در دریافت اطلاعات وجود دارد");
        }
      })
      .then((data) => {
        console.log(data);
        setParentHashtags(data?.projectHashtags);
      });
    api("/api/ProjectHashtags/GetAll", "POST")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw new Error("مشکلی در دریافت اطلاعات وجود دارد");
        }
      })
      .then((data) => {
        console.log(data);
        setAllHashtags(data?.projectHashtags);
      });
  }, []);

  useEffect(() => {
    const filteredHashtags = allHashtags.filter(
      (item) => item.projectHashtagParentId == parentHashtagsId
    );
    setChildrenHashtags(filteredHashtags);
  }, [parentHashtagsTitle]);

  return (
    <>
      {/* <Header /> */}

      <div
        className="md:h-[480px] relative h-[250px] w-[90%] mx-auto"
        id="portfolio-header"
      >
        <Image
          src={"/images/Frame 1261153489.png"}
          fill
          sizes="(max-width: 768px) 100vw, auto"
          className="w-full h-full"
          alt="logo"
        />
      </div>

      <div className="relative rounded-lg border-[2px] gap-4 bg-[#fff] border-[#1D40D7] px-3 py-1 flex justify-between items-center w-[90%] mx-auto">
        <input
          className="w-full text-base  font-normal cursor-pointer text-[#00000080]"
          placeholder="جست و جوی نمونه کار"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <section className="w-[90%] mx-auto md:my-10 my-5 grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex relative items-center gap-4">
          <button
            onClick={() => setIsSubMenuOpen((prev) => !prev)}
            className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]"
          >
            {parentHashtagsTitle}
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
          <SubMenu
            isSubMenuOpen={isSubMenuOpen}
            items={parentHashtags || []}
            setProjectSkillId={setParentHashtagsId}
            setIsSubMenuOpen={setIsSubMenuOpen}
            setProjectSkillTitle={setParentHashtagsTitle}
          />
        </div>
        <div className="flex relative items-center gap-4">
          <button
            onClick={() => setIsChildrenSubMenuOpen((prev) => !prev)}
            className="rounded-lg border-[2px] w-full border-[#1D40D7] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]"
          >
            {childrenHashtagsTitle}
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
          <SubMenu
            isSubMenuOpen={isChildrenSubMenuOpen}
            items={childrenHashtags || []}
            setProjectSkillId={setChildrenHashtagsId}
            setIsSubMenuOpen={setIsChildrenSubMenuOpen}
            setProjectSkillTitle={setChildrenHashtagsTitle}
          />{" "}
        </div>
      </section>

      <section className="w-[90%] mx-auto md:my-10 my-5 flex flex-col gap-8">
        <div className="flex sm:flex-row flex-col gap-6 justify-between items-center w-full">
          <h6 className="font-bold md:text-[32px] text-xl text-black">
            بازدید بر اساس
          </h6>
          <div className="flex items-center gap-6">
            <button onClick={() => setFilterPortfolio("all")} className={`bg-transparent border-none outline-none md:text-lg font-normal text-xs cursor-pointer ${filterPortfolio === "all" ? "text-[#1D40D7]" : "text-[#8BAEF5]"}`}>
              همه نمونه کار ها
            </button>
            <button onClick={() => setFilterPortfolio("new")} className={`bg-transparent border-none outline-none md:text-lg font-normal text-xs cursor-pointer ${filterPortfolio === "new" ? "text-[#1D40D7]" : "text-[#8BAEF5]"}`}>
              جدید ترین
            </button>
            <button onClick={() => setFilterPortfolio("old")} className={`bg-transparent border-none outline-none md:text-lg font-normal text-xs cursor-pointer ${filterPortfolio === "old" ? "text-[#1D40D7]" : "text-[#8BAEF5]"}`}>
              قدیمی ترین
            </button>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
        </div>
      </section>

      <Pagination />
    </>
  );
};

export default Portfolio;
