"use client";
import SectionSlider from "@/components/skills/SectionSlider";
import SkillBox from "@/components/skills/SkillBox";
import { api } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

type Skill = {
  projectSkillId: number;
  title: string;
  description: string;
  image: string;
  projectSkillParentId: number;
};

const Skills: React.FC = () => {
  const [allSkills, setAllSkills] = useState<Skill[]>([]);
  const [groupedSkills, setGroupedSkills] = useState<Record<number, Skill[]>>(
    {}
  );

  useEffect(() => {
    api("/api/ProjectSkills/GetAll", "POST")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAllSkills(data.projectSkills);
      });
  }, []);

  useEffect(() => {
    if (allSkills.length > 0) {
      const grouped = allSkills.reduce((acc, skill) => {
        const parentId = skill.projectSkillParentId + 1;
        if (!acc[parentId]) {
          acc[parentId] = [];
        }
        acc[parentId].push(skill);
        return acc;
      }, {} as Record<number, Skill[]>);
      setGroupedSkills(grouped);
    }
  }, [allSkills]);

  const categoryTitles: Record<number, string> = {
    2: "طراحی سایت و اپلیکیشن",
    3: "تولید محتوا و سئو",
    4: "ترجمه و نگارش",
    5: "رسانه و ویدیو",
    6: "طراحی گرافیک و هنر های دیجیتال",
    7: "برنامه نویسی و کد نویسی",
    8: "پشتیبانی و مدیریت",
    9: "خدمات ویژه",
    10: "عکاسی و محتوای تصویری",
  };
  return (
    <>
      <section id="skill-header" className="relative">
        <div
          id="skill-header-bg"
          className="w-full h-full rounded-[16px]"
        ></div>
        <div className="w-[70%] mx-auto absolute bottom-30 left-1/6">
          <h1 className="text-center my-2 mb-4 font-bold text-white lg:text-[60px] md:text-3xl text-2xl">
            مهارت های برتر فرتاک
          </h1>
          <h4 className="text-center my-2 mb-4 font-bold text-white lg:text-4xl text-2xl">
            با انتخاب هر مهارت ، نیازت رو برطرف کن
          </h4>
        </div>
      </section>

      <div className="w-[90%] mx-auto border-[2px] my-8 border-[#1E1E1E] rounded-lg px-3 py-2 flex flex-col lg:flex-row gap-3 justify-between items-center">
        <p className="lg:text-2xl md:text-xl text-base font-bold">
          دنبال چه مهارتی هستی ؟{" "}
        </p>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border-[2px] border-[#1E1E1E] px-3 py-1 md:w-[200px] sm:w-[130px] w-[100px] flex justify-between items-center text-lg font-normal cursor-pointer text-[#00000080]">
            فیلتر
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
          <div className="flex justify-between items-center rounded-lg border-[2px] border-[#1E1E1E] px-3 py-1 md:w-[370px] sm:w-[280px] w-[210px] bg-white">
            <input
              type="text"
              placeholder="جست و جوی مهارت"
              className="placeholder:text-lg placeholder:font-normal placeholder:text-[#00000080]"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 22.4785L20 20.4785M2 11.9785C2 6.73181 6.25329 2.47852 11.5 2.47852C16.7467 2.47852 21 6.73181 21 11.9785C21 17.2252 16.7467 21.4785 11.5 21.4785C6.25329 21.4785 2 17.2252 2 11.9785Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {Object.entries(groupedSkills)
        .slice(1)
        .map(([parentId, skills]) => (
          <SectionSlider
            key={parentId}
            title={categoryTitles[+parentId] || "دسته‌بندی نامشخص"}
            viewAllUrl={`/category/${parentId}`}
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.projectSkillId}>
                <SkillBox
                  title={skill.title}
                  src={`/images/${skill.image}`}
                  id={skill.projectSkillId}
                />
              </SwiperSlide>
            ))}
          </SectionSlider>
        ))}

      {/* <SectionSlider title="طراحی سایت و اپلیکیشن" viewAllUrl="/category/web">
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider title="تولید محتوا و سئو" viewAllUrl="/category/seo">
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider title="ترجمه و نگارش" viewAllUrl="/category/translation">
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider title="رسانه و ویدیو" viewAllUrl="/category/media">
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider
        title="طراحی گرافیک و هنر های دیجیتال"
        viewAllUrl="/category/digital"
      >
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider
        title="برنامه نویسی و کد نویسی"
        viewAllUrl="/category/programming"
      >
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider
        title="پشتیبانی و مدیریت"
        viewAllUrl="/category/translation"
      >
        {[...Array(2)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider title="خدمات ویژه" viewAllUrl="/category/media">
        {[...Array(10)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider>

      <SectionSlider title="عکاسی و محتوای تصویری" viewAllUrl="/category/media">
        {[...Array(1)].map((_, i: number) => (
          <SwiperSlide key={i}>
            <SkillBox />
          </SwiperSlide>
        ))}
      </SectionSlider> */}
    </>
  );
};

export default Skills;
