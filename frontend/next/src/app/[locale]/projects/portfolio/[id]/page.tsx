import BreadCrumb from "@/components/skills/BreadCrumb";
import PortfolioBox from "@/components/skills/PortfolioBox";
import SectionTitle from "@/components/skills/SectionTitile";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

const PortfolioDetail = () => {
  return (
    <>
      <BreadCrumb items={["نمونه کارها", "طراحی رابط کاربری"]} />
      <section className="flex flex-col lg:flex-row lg:gap-16 gap-[60px] items-center lg:items-stretch w-[90%] mx-auto md:my-10 mb-16">
        <div className="lg:w-[50%] max-w-[600px] w-full h-[360px] rounded-[20px] pt-3">
          <div className="relative w-full lg:h-[530px] h-[400px]">
            <Image
              src="/images/portfoliodetail.png"
              alt="details-of-portfolio"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between lg:w-[50%] w-full">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h1 className="font-bold lg:text-[32px] md:text-[20px] text-[16px] text-black">
                  عنوان پروژه :
                </h1>
                <h2 className="font-bold lg:text-[32px] md:text-[20px] text-[16px] text-[#1450A3]">
                  کارگزاری بانک ملی
                </h2>
              </div>
              <span className="font-bold md:text-sm text-xs text-[#787878]">
                05 خرداد 1404
              </span>
            </div>
            <div className="px-4 flex flex-col gap-2.5">
              <h4 className="lg:text-xl md:text-base text-sm font-normal text-black">
                توضیحات درباره پروژه :
              </h4>
              <p className="lg:text-xl md:text-base text-sm font-normal text-[#1450A3]">
                طراحی صفحه اصلی و صفحات داخلی ، ریسپانسیو
              </p>
              <h4 className="lg:text-xl md:text-base text-sm font-normal text-black">
                مهارت های استفاده شده :
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center justify-center px-2 py-1 bg-[#1D40D7] rounded-lg">
                  <span className="font-bold md:text-sm text-xs text-white">
                    طراحی تجربه کاربری (UX)
                  </span>
                </div>
                <div className="flex items-center justify-center px-2 py-1 bg-[#1D40D7] rounded-lg">
                  <span className="font-bold md:text-sm text-xs text-white">
                    طراحی رابط کاربری (UX)
                  </span>
                </div>
                <div className="flex items-center justify-center px-2 py-1 bg-[#1D40D7] rounded-lg">
                  <span className="font-bold md:text-sm text-xs text-white">فیگما</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto md:my-10 my-5 lg:mt-[210px]">
        <SectionTitle title={"گالری تصاویر"} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <Image
            src={"/images/portfoliodetail.png"}
            alt="details-of-portfolio"
            width={350}
            height={350}
          />
          <Image
            src={"/images/portfoliodetail.png"}
            alt="details-of-portfolio"
            width={350}
            height={350}
          />
          <Image
            src={"/images/portfoliodetail.png"}
            alt="details-of-portfolio"
            width={350}
            height={350}
          />
        </div>

        <SectionTitle title={"پروژه های مشابه"} />
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
          <PortfolioBox />
        </div>
      </section>
    </>
  );
};

export default PortfolioDetail;
