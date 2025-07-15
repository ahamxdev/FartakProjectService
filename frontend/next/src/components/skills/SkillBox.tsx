import React from "react";
import Image from "next/image";
import Link from "next/link";

const SkillBox = ({
  title,
  src,
  id,
}: {
  title: string;
  src: string;
  id: number;
}) => {
  console.log(id);
  
  return (
    <div
      id="skill-box"
      className="bg-[#EEF5FF] rounded-2xl p-4 flex flex-col items-center gap-3"
    >
      <div className="relative lg:w-[220px] w-[150px] lg:h-[200px] h-[130px]">
        <Image
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, auto"
          className="w-full h-full"
          alt="skill-box-image"
        />
      </div>
      <h6 className="text-[#1D40D7] md:text-xl text-base font-bold">{title}</h6>
      <Link
        href={"/projects/skills/ui"}
        className="rounded-lg bg-[#1d40d7] flex justify-center items-center w-full py-1 text-white text-sm font-normal"
      >
        مشاهده اطلاعات
      </Link>
    </div>
  );
};

export default SkillBox;
