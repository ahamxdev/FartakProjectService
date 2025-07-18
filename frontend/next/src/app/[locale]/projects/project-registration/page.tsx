"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WaySpeedProjectRegistrationBox from "@/components/skills/WaySpeedProjectRegistrationBox";
import { api } from "@/utils/api";
import SubMenu from "@/components/skills/SubMenu";
import { UseCategory } from "@/contexts/CategoryContext";

const ProjectRegistration = () => {
  const { category } = UseCategory();

  const [priceType, setPriceType] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startPrice, setStartPrice] = useState<string>("");
  const [finishPrice, setFinishPrice] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  // const [allCtgs, setAllCtgs] = useState<[]>([]);
  const [priority, setPriority] = useState<string>();
  const [projectSkillId, setProjectSkillId] = useState<number>(0);
  const [projectSkillTitle, setProjectSkillTitle] = useState<string>(
    "دسته‌بندی پروژه خود را انتخاب کنید"
  );
  const [projectTimeTitle, setProjectTimeTitle] = useState<string>("روز");

  console.log(projectSkillId);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [isSubMenuTimeOpen, setIsSubMenuTimeOpen] = useState<boolean>(false);

  useEffect(() => {
    // api("/api/ProjectCategories/GetAllParent", "POST")
    //   .then((res) => {
    //     if (res.status == 200) {
    //       return res.json();
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setAllCtgs(data.projectCategories);
    //   });
    api("/api/ProjectSkills/GetAll", "POST")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        // setAllCtgs(data.projectTypes);
      });
    // api("/api/ProjectTeamMembers/GetAll", "POST").then((data) => {
    //   console.log(data);
    // });
    // api("/api/Projects/GetAll", "POST").then((data) => {
    //   console.log(data);
    // });
  }, []);

  const submitPriority = (title: string) => {
    setPriority(title);
  };

  const handleChange = (
    setValue: (value: string) => void,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = e.target.value.replace(/,/g, "").replace(/\D/g, "");
    if (rawValue === "") {
      setValue("");
      return;
    }

    const formattedValue = Number(rawValue).toLocaleString("en-US");
    setValue(formattedValue);
  };

  const addProject = () => {};

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:gap-16 gap-8 w-[90%] mx-auto md:my-10 my-5">
        <div className="lg:w-[30%] max-w-[600px] w-full h-[360px] rounded-[20px] bg-gradient-to-r from-[#FCCB38D9] to-[#FAB437D9] pt-3">
          <div className="relative lg:w-[292px] w-full lg:h-[410px] h-[350px]">
            <Image
              src="/projectRegistration/colleagues working at the desk.png"
              alt="category-detail-image"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between lg:w-[70%] w-full">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#003566] font-bold text-lg md:text-xl lg:text-[32px]">
              در فرتاک حرفه‌ای‌ها پروژه شما را انجام می‌دهند!
            </h1>
            <p className="font-normal leading-7 text-sm md:text-base lg:text-xl text-justify">
              شرکت فرتاک * (آینده) با داشتن تجربه یک دهه فعالیت و با شعار ما
              رویای شما به واقعیت تبدیل میکنیم،  هم اکنون به عنوان مجموعه‌ای
              سرآمد جهت انجام ماموریت های سازمانی در پروژه های مختلف در راستای
              ارائه خدمات مشاوره و مهندسی شامل مطالعه و طراحی توسعه نرم افزار و
              ای تی، محتوا و ترجمه ،طراحی و خلاقیت ،بازاریابی و فروش،کسب و کار و
              و طراحی با بهره گیری از دانش روز مهندسی مهندسی معماری و عمران و
              .... و توسعه خدمات با کیفیت فعالیت می نماید.{" "}
            </p>
          </div>
          <Link
            href={"translation/order-project"}
            className="bg-[#1D40D7] text-white rounded-lg flex justify-center items-center md:text-lg text-xs font-bold w-fit px-8 py-6 my-6 lg:my-0"
          >
            همین الان پروژت رو ثبت کن
          </Link>
        </div>
      </section>

      <section className="flex flex-wrap justify-between gap-4 w-[90%] mx-auto md:my-30 my-5">
        <div
          className="flex items-center rounded-[20px] w-full md:w-auto px-4 py-6 gap-6"
          id="order-detail-box"
        >
          <div className="flex flex-col justify-between md:gap-10 gap-4 items-center md:items-stretch w-full md:w-[200px]">
            <h4 className="md:text-xl text-sm font-bold text-[#000]">
              دسترسی به نمونه کار ها
            </h4>
            <span className="md:text-base text-center lg:text-justify text-xs font-bold text-[#000]">
              قراره یه عالمه ایده قشنگ ببینی!
            </span>
            <Link
              href={"/projects/portfolio"}
              className="bg-[#FFE401] flex md:hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative lg:-mt-[95px] mt-0 w-[126px] h-[154px]">
              <Image
                src={
                  "/projectRegistration/man and woman working at table with laptop.png"
                }
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="logo"
              />
            </div>
            <Link
              href={"/projects/portfolio"}
              className="bg-[#FFE401] md:flex hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
        </div>
        <div
          className="flex items-center rounded-[20px] w-full md:w-auto px-4 py-6 gap-6"
          id="order-detail-box"
        >
          <div className="flex flex-col justify-between md:gap-10 gap-4 items-center md:items-stretch w-full md:w-[200px]">
            <h4 className="md:text-xl text-sm font-bold text-[#000]">
              مهارت بهتر فرتاک
            </h4>
            <span className="md:text-base text-xs text-center lg:text-justify font-bold text-[#000]">
              اینجا نقطه قوت ماست! مهارت های برتر فرتاک
            </span>
            <Link
              href={"/projects/skills"}
              className="bg-[#FFE401] flex md:hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative lg:-mt-26 mt-0 w-[126px] h-[154px]">
              <Image
                src={
                  "/projectRegistration/Woman in vr glasses looking at website pages.png"
                }
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="logo"
              />
            </div>
            <Link
              href={"/projects/skills"}
              className="bg-[#FFE401] md:flex hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
        </div>
        <div
          className="flex items-center rounded-[20px] w-full md:w-auto px-4 py-6 gap-6"
          id="order-detail-box"
        >
          <div className="flex flex-col justify-between md:gap-10 gap-4 items-center md:items-stretch w-full md:w-[200px]">
            <h4 className="md:text-xl text-sm font-bold text-[#000]">
              مشاوره با مدیر های موفق فرتاک
            </h4>
            <span className="md:text-base text-xs text-center lg:text-justify font-bold text-[#000]">
              سوال داری؟ مدیرای فرتاک منتظرن کمکت کنن!
            </span>
            <Link
              href={"/projects/managerlist"}
              className="bg-[#FFE401] flex md:hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000] lg:mt-[30px]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative lg:-mt-[94px] mt-0 w-[126px] h-[154px]">
              <Image
                src={
                  "/projectRegistration/man and woman working at the table.png"
                }
                fill
                sizes="(max-width: 768px) 100vw, auto"
                className="w-full h-full"
                alt="logo"
              />
            </div>
            <Link
              href={"/projects/managerlist"}
              className="bg-[#FFE401] md:flex hidden justify-center items-center rounded-lg px-1.5 py-1.5 text-sm font-bold text-[#000]"
            >
              مشاهده اطلاعات
            </Link>
          </div>
        </div>
      </section>

      <section
        id="project-registration-form"
        className="flex rounded-[20px] flex-col py-16 px-5 lg:gap-16 gap-8 w-[90%] mx-auto md:my-10 my-5"
      >
        <h6 className="font-extrabold md:text-3xl text-xl text-[#000] text-center">
          ثبت رایگان پروژه
        </h6>
        <div className="flex gap-3 w-full relative">
          <div className="absolute lg:block hidden top-2 right-0 bottom-[192px] rounded-lg w-[2px] bg-[#787878]">
            <span className="w-[22px] h-[22px] rounded-full bg-[#FAB437] absolute top-[0%] -right-2.5"></span>
            <span className="w-[22px] h-[22px] rounded-full bg-[#FFDB9B] absolute top-[29%] -right-2.5"></span>
            <span className="w-[22px] h-[22px] rounded-full bg-[#FFDB9B] absolute top-[52%] -right-2.5"></span>
            <span className="w-[22px] h-[22px] rounded-full bg-[#FFDB9B] absolute top-[61.5%] -right-2.5"></span>
            <span className="w-[22px] h-[22px] rounded-full bg-[#FFDB9B] absolute top-[98.5%] -right-2.5"></span>
          </div>
          <div className="flex flex-col gap-6 w-[99%] mr-5">
            <div className="flex flex-col w-full">
              <span className="md:text-xl text-base font-bold">
                اطلاعات اولیه
              </span>
              <div className="flex lg:flex-row flex-col w-full gap-4 my-5">
                <div className="flex flex-col w-full lg:w-[50%]  justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm font-semibold text-[#0C0C0C]">
                      دسته بندی
                    </span>
                    <div className="flex flex-col gap-3.5 w-full">
                      <div className="flex relative items-center gap-4 w-full">
                        <button
                          onClick={() => setIsSubMenuOpen((prev) => !prev)}
                          className="rounded-lg border-[1px] w-full border-[#7c7c7c55] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#7c7c7c] gap-4"
                        >
                          {projectSkillTitle}
                          <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.92 0.179688H6.68999H1.07999C0.119992 0.179688 -0.360007 1.33969 0.319993 2.01969L5.49999 7.19969C6.32999 8.02969 7.67999 8.02969 8.50999 7.19969L10.48 5.22969L13.69 2.01969C14.36 1.33969 13.88 0.179688 12.92 0.179688Z"
                              fill="#7C7C7C"
                            />
                          </svg>
                        </button>

                        <SubMenu
                          isSubMenuOpen={isSubMenuOpen}
                          items={category || []}
                          setProjectSkillId={setProjectSkillId}
                          setIsSubMenuOpen={setIsSubMenuOpen}
                          setProjectSkillTitle={setProjectSkillTitle}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-sm font-semibold text-[#0C0C0C]"
                      htmlFor=""
                    >
                      عنوان
                    </label>
                    <input
                      className="rounded-lg border-[1px] w-full border-[#7c7c7c55] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal text-[#7c7c7c] placeholder:text-[#7c7c7c] gap-4"
                      placeholder="عنوان پروژه خود را وارد کنید"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2 lg:w-[50%]">
                  <label
                    className="text-sm font-semibold text-[#0C0C0C]"
                    htmlFor=""
                  >
                    توضیحات
                  </label>
                  <textarea
                    placeholder="توضیحاتی برای شفاف‌تر شدن درخواست خود بنویسید."
                    className="w-full h-[160px] p-4 border border-[#7c7c7c55] rounded-lg"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="md:text-xl text-base font-bold">
                بودجه و زمان بندی
              </span>
              <div className="flex flex-col mt-4 gap-3">
                <span className="text-base font-semibold text-[#0C0C0C]">
                  بودجه مالی
                </span>
                <span className="text-sm font-normal text-[#7c7c7c]">
                  میزان هزینه‌ای که برای پروژه خود درنظر دارید را وارد کنید.
                </span>
                <div className="flex gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="from"
                      className="text-sm font-semibold text-[#0c0c0c]"
                    >
                      از
                    </label>
                    <input
                      type="text"
                      id="from"
                      className="border-[1px] border-[#7C7C7C] rounded-lg w-[100px] md:w-[190px] lg:w-[240px] md:h-[40px] text-center text-base font-medium"
                      value={startPrice}
                      onChange={(e) => handleChange(setStartPrice, e)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="to"
                      className="text-sm font-semibold text-[#0c0c0c]"
                    >
                      تا
                    </label>
                    <input
                      type="text"
                      id="to"
                      className="border-[1px] border-[#7C7C7C] rounded-lg w-[100px] md:w-[190px] lg:w-[240px] md:h-[40px] text-center text-base font-medium"
                      value={finishPrice}
                      onChange={(e) => handleChange(setFinishPrice, e)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-[250px] lg:flex-1 mb-[27px]">
                    <label
                      className="text-sm font-semibold text-[#0C0C0C]"
                      htmlFor=""
                    >
                      زمان بندی
                    </label>
                    <input
                      className="rounded-lg md:h-[40px] border-[1px] w-full border-[#7c7c7c55] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal text-[#0c0c0c] placeholder:text-[8px] placeholder:md:text-sm placeholder:text-[#7c7c7c] gap-4"
                      placeholder="میزان زمانی که درنظر دارید پروژه خود را تحوبل بگیرید وارد کنید."
                    />
                  </div>
                  <div className="flex flex-col self-center gap-3.5 lg:w-[120px] md:w-[80px] w-[120px] md:h-[40px]">
                    <div className="flex relative items-center gap-4 w-full">
                      <button
                        onClick={() => setIsSubMenuTimeOpen((prev) => !prev)}
                        className="rounded-lg border-[1px] w-full border-[#7c7c7c55] px-3 py-1 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer h-full text-[#7c7c7c] gap-4"
                      >
                        {projectTimeTitle}
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.92 0.179688H6.68999H1.07999C0.119992 0.179688 -0.360007 1.33969 0.319993 2.01969L5.49999 7.19969C6.32999 8.02969 7.67999 8.02969 8.50999 7.19969L10.48 5.22969L13.69 2.01969C14.36 1.33969 13.88 0.179688 12.92 0.179688Z"
                            fill="#7C7C7C"
                          />
                        </svg>
                        <ul
                          className={`absolute top-[105%] z-50 left-2 right-2 flex flex-col gap-2 bg-white rounded-sm transition-all duration-100 ${
                            isSubMenuTimeOpen
                              ? "h-auto py-1 px-4"
                              : "h-0 py-0 px-0"
                          }`}
                          id="category-submenu"
                        >
                          <li
                            className={`text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000] ${
                              isSubMenuTimeOpen ? "block" : "hidden"
                            } `}
                            onClick={(e) => {
                              e.stopPropagation(); // جلوی تداخل کلیک‌ها رو می‌گیره
                              setIsSubMenuTimeOpen(false);
                              setProjectTimeTitle("روز");
                            }}
                          >
                            روز
                          </li>
                          <li
                            className={`text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000] ${
                              isSubMenuTimeOpen ? "block" : "hidden"
                            } `}
                            onClick={(e) => {
                              e.stopPropagation(); // جلوی تداخل کلیک‌ها رو می‌گیره
                              setIsSubMenuTimeOpen(false);
                              setProjectTimeTitle("ماه");
                            }}
                          >
                            ماه{" "}
                          </li>
                          <li
                            className={`text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000] ${
                              isSubMenuTimeOpen ? "block" : "hidden"
                            } `}
                            onClick={(e) => {
                              e.stopPropagation(); // جلوی تداخل کلیک‌ها رو می‌گیره
                              setIsSubMenuTimeOpen(false);
                              setProjectTimeTitle("سال");
                            }}
                          >
                            سال
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="md:text-xl text-base font-bold">اولویت شما</span>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceFilter"
                    id="lowestPrice"
                    value="lowestPrice"
                    checked={selectedFilter === "lowestPrice"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="font-medium md:text-base text-sm text-[#000]"
                    htmlFor="lowestPrice"
                  >
                    کم ترین قیمت
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceFilter"
                    id="median"
                    value="median"
                    checked={selectedFilter === "median"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="font-medium md:text-base text-sm text-[#000]"
                    htmlFor="median"
                  >
                    میانه
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceFilter"
                    id="fastDelivery"
                    value="fastDelivery"
                    checked={selectedFilter === "fastDelivery"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="font-medium md:text-base text-sm text-[#000]"
                    htmlFor="fastDelivery"
                  >
                    تحویل سریع
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priceFilter"
                    id="highestPrice"
                    value="highestPrice"
                    checked={selectedFilter === "highestPrice"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="font-medium md:text-base text-sm text-[#000]"
                    htmlFor="highestPrice"
                  >
                    بالا ترین قیمت
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="md:text-xl text-base font-bold">
                نحوه و فوریت خود را انتخاب کنید
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8 gap-5">
                <WaySpeedProjectRegistrationBox
                  onHandle={() => submitPriority("معمولی")}
                  title={"معمولی"}
                  factor={"1"}
                  priority={priority}
                />
                <WaySpeedProjectRegistrationBox
                  onHandle={() => submitPriority("برجسته و فوری")}
                  title={"برجسته و فوری"}
                  factor={"1.5"}
                  priority={priority}
                />
                <WaySpeedProjectRegistrationBox
                  onHandle={() => submitPriority("متمایز")}
                  title={"متمایز"}
                  factor={"2"}
                  priority={priority}
                />
                <WaySpeedProjectRegistrationBox
                  onHandle={() => submitPriority("تمام وقت")}
                  title={"تمام وقت"}
                  priority={priority}
                  factor={"2.5"}
                />
                <WaySpeedProjectRegistrationBox
                  onHandle={() => submitPriority("حضوری و یا محرمانه")}
                  priority={priority}
                  title={"حضوری و یا محرمانه"}
                  factor={"3"}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="md:text-xl text-base font-bold">
                روش پرداخت خودتان را انتخاب کنید
              </span>
              <div className="flex md:flex-row flex-col w-[80%] mt-6 mx-auto justify-between items-center gap-6">
                <button
                  onClick={() => setPriceType("zarrin")}
                  className={`${
                    priceType === "zarrin"
                      ? "border-[2px] border-[#1D40D7]"
                      : ""
                  } flex items-center justify-between cursor-pointer md:px-5 px-2.5 md:py-4 py-2 rounded-[50px] md:w-[50%] w-full`}
                  id="pay-way"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative md:w-[40px] w-[20px] h-[20px] md:h-[40px]">
                      <Image
                        src={"/projectRegistration/zarrin.png"}
                        fill
                        sizes="(max-width: 768px) 100vw, auto"
                        className="w-full h-full"
                        alt="logo"
                      />
                    </div>
                    <span className="md:text-xl text-sm font-semibold text-[#000]">
                      پرداخت با زرین پال
                    </span>
                  </div>
                  <span
                    className={`w-[20px] h-[20px] rounded-full cursor-pointer border ${
                      priceType === "zarrin"
                        ? "bg-[#1D40D7] border-zinc-400 "
                        : "bg-white border-[#000]"
                    }`}
                  ></span>
                </button>
                <button
                  onClick={() => setPriceType("wallet")}
                  className={`${
                    priceType === "wallet"
                      ? "border-[2px] border-[#1D40D7]"
                      : ""
                  } not-visited:flex items-center justify-between cursor-pointer md:px-5 px-2.5 md:py-4 py-2 rounded-[50px] md:w-[50%] w-full`}
                  id="pay-way"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative md:w-[40px] w-[20px] h-[20px] md:h-[40px]">
                      <Image
                        src={"/projectRegistration/zarrin.png"}
                        fill
                        sizes="(max-width: 768px) 100vw, auto"
                        className="w-full h-full"
                        alt="logo"
                      />
                    </div>
                    <span className="md:text-xl text-sm font-semibold text-[#000]">
                      پرداخت با کیف پول من
                    </span>
                  </div>
                  <span
                    className={`w-[20px] h-[20px] rounded-full cursor-pointer border ${
                      priceType === "wallet"
                        ? "bg-[#1D40D7] border-zinc-400 "
                        : "bg-white border-[#000]"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            <button
              onClick={addProject}
              className="bg-[#FFE401] rounded-[25px] flex justify-center items-center w-fit self-center text-center md:py-5 py-2 cursor-pointer md:px-8 px-3 md:text-xl font-bold"
            >
              ثبت پروژه
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 gap-y-16 w-[90%] mx-auto md:my-10 my-5">
        <h6 className="font-extrabold md:text-3xl text-lg text-center">
          کسب و کارهایی که با <span className="text-[#ffbb01]">فرتاک</span>{" "}
          همکاری کردند
        </h6>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          <div className="relative lg:w-[220px] w-[90px] lg:h-[120px] h-[60px]">
            <Image
              src={"/projectRegistration/taat.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
          <div className="relative lg:w-[220px] w-[90px] lg:h-[120px] h-[60px]">
            <Image
              src={"/projectRegistration/taat.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
          <div className="relative lg:w-[220px] w-[90px] lg:h-[120px] h-[60px]">
            <Image
              src={"/projectRegistration/taat.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
          <div className="relative lg:w-[220px] w-[90px] lg:h-[120px] h-[60px]">
            <Image
              src={"/projectRegistration/taat.png"}
              fill
              sizes="(max-width: 768px) 100vw, auto"
              className="w-full h-full"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectRegistration;
