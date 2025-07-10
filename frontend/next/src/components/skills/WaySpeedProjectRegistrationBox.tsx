import Image from "next/image";
import React from "react";

const WaySpeedProjectRegistrationBox = ({
  title,
  factor,
  onHandle,
  priority,
}: {
  title?: string;
  factor?: string;
  onHandle: () => void;
  priority?: string;
}) => {
  return (
    <div
      className={`py-6 px-6 cursor-pointer rounded-[20px] flex flex-col items-center gap-5 ${
        priority === title ? "border border-blue-700" : ""
      } `}
      id="waySpeed-project-registration-box"
      onClick={onHandle}
    >
      <span className="md:text-xl text-center text-sm font-medium text-[#000] w-full">
        {title}
      </span>
      <div className="relative lg:w-[140px] w-[70px] lg:h-[130px] h-[60px]">
        <Image
          src={"/images/approved.png"}
          fill
          sizes="(max-width: 768px) 100vw, auto"
          className="w-full h-full"
          alt="logo"
        />
      </div>
      <span className="md:text-xl text-sm font-medium text-[#000]">
        price * {factor}
      </span>
    </div>
  );
};

export default WaySpeedProjectRegistrationBox;
