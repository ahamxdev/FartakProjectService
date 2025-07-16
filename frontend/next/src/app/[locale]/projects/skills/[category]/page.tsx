"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/components/skills/BreadCrumb";
import OnlineStoreDesign from "@/components/skills/OnlineStoreDesign";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { api } from "@/utils/api";
// import ContentCreation from "@/components/skills/ContentCreation"
// import ApplicationWebsiteDesign from "@/components/skills/ApplicationWebsiteDesign"
// import Programming from "@/components/skills/Programming"
// import Translation from "@/components/skills/Translation"
// import WebDesign from "@/components/skills/WebDesign"

type skillInfo = {
  description: string;
  image: string;
  projectSkillId: number;
  projectSkillParentId: number;
  title: string;
};

const CategoryInfo = () => {
  const params = useParams<{ category: string }>();
  const id = params.category;
  console.log(id);

  const [skillInfo, setSkillInfo] = useState<skillInfo[]>([]);

  const getCtgs = {
    projectSkillId: id.split("-")[0],
  };
  useEffect(() => {
    api("/api/ProjectSkills/GetById", "POST", getCtgs)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setSkillInfo(data.projectSkills);
      });
  }, []);
  return (
    <>
      <BreadCrumb
        items={[
          "مهارت ها شما",
          "طراحی سایت و اپلیکیشن",
          decodeURIComponent(id.split("-")[1]),
        ]}
      />
      <section className="flex flex-col lg:flex-row lg:gap-16 gap-8 w-[90%] mx-auto md:my-10 my-5">
        <div className="relative lg:w-[55%] w-full lg:h-[530px] h-[350px]">
          <Image
            src={`${
              skillInfo[0]?.image
                ? `https://api.fartakproject.ir/upload/Projects/${skillInfo[0].image}`
                : "/images/image 10.png"
            }`}
            alt="category-detail-image"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-between lg:w-[45%] w-full">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#1450A3] font-bold text-lg md:text-xl lg:text-[32px]">
              {decodeURIComponent(id.split("-")[1])}
            </h1>
            <p className="font-normal leading-6 text-sm md:text-base lg:text-xl text-justify">
              {skillInfo[0]?.description}
            </p>
          </div>
          <Link
            href={"/projects/project-registration"}
            className="bg-[#1D40D7] text-white rounded-lg flex justify-center items-center md:text-lg text-xs font-bold w-full py-2 my-6 lg:my-0"
          >
            همین الان پروژت رو ثبت کن
          </Link>
        </div>
      </section>

      <OnlineStoreDesign />

      {/* <ApplicationWebsiteDesign /> */}

      {/* <ContentCreation /> */}

      {/* <Programming /> */}

      {/* <Translation /> */}

      {/* <WebDesign /> */}
    </>
  );
};

export default CategoryInfo;
