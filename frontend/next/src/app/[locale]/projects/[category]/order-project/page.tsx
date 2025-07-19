"use client";
import React, { useRef, useState } from "react";
// import Header from '@/components/modules/Header'
import Image from "next/image";
// import { api } from "@/utils/api";
import SubMenu from "@/components/skills/SubMenu";
import { UseCategory } from "@/contexts/CategoryContext";
// import InputCheckbox from "@/components/InputCheckbox";
// import InputCheckbox from "@/components/skills/InputCheckbox";

const OrderProject = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { category } = UseCategory();
  // const [category, setCategory] = useState<[]>([]);
  const [projectSkillId, setProjectSkillId] = useState<number>(0);
  const [projectSkillTitle, setProjectSkillTitle] = useState<string>(
    "دسته‌بندی پروژه خود را انتخاب کنید"
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [projectMode, setProjectMode] = useState<string | null>(null);

  const [leastBudget, setLeastBudget] = useState<string>("");
  const [MostBudget, setMostBudget] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  console.log(projectSkillId);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   api("/api/ProjectCategories/GetAllParent", "POST")
  //     .then((res) => {
  //       if (res.status == 200) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCategory(data.projectCategories);
  //     });
  // }, []);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div
        id="category-header"
        className="w-full relative md:h-[415px] h-[200px] my-4 pb-4 md:pb-0 md:pt-12 pt-3"
      >
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div className="relative w-full md:h-[415px] h-[200px]">
            <Image
              src={"/images/AI Generator (7).png"}
              fill
              sizes="100vw, auto"
              className="w-full h-full"
              alt="mainheader-image"
            />
          </div>
        </div>
        <div className="flex justify-center items-center lg:mt-[11%] mt-[16%] sm:mt-[40%] md:mt-[24%] relative z-10 flex-col gap-5">
          <h1 className="font-bold md:text-4xl text-xl text-[#fff] flex justify-center items-end">
            ثبت پروژه
          </h1>
          <h3 className="font-bold md:text-4xl text-xl text-center text-[#fff] flex justify-center items-end">
            با فرتاک ایده های خود را به واقعیت تبدیل کنید
          </h3>
        </div>
      </div>

      <section className="w-[90%] mx-auto md:my-8 my-5 flex flex-col gap-10">
        <h6 className="text-[##00060F] font-bold md:text-3xl text-xl text-right">
          ایجاد یک پروژه
        </h6>
        <div className="flex md:flex-row flex-col justify-between md:gap-30 gap-5">
          <div className="flex flex-col gap-4 md:w-[50%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              میخواهید چه کاری برای شما انجام شود ؟
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              سرویس مورد نظر خود را انتخاب کنید .
            </label>
            <div className="flex items-center relative gap-4 w-full">
              <button
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
                className={`rounded-lg border-[2px] ${
                  projectSkillTitle != "دسته‌بندی پروژه خود را انتخاب کنید"
                    ? "border-[#495AFF]"
                    : "border-[#DC3545]"
                } w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]`}
              >
                {projectSkillTitle}
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
                items={category || []}
                setProjectSkillId={setProjectSkillId}
                setIsSubMenuOpen={setIsSubMenuOpen}
                setProjectSkillTitle={setProjectSkillTitle}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-[50%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              یک عنوان خوب برای پروژه بنویسید .
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              عنوان پروژه
            </label>
            <div className="flex items-center gap-4 w-full">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`rounded-lg border-[2px] ${
                  title.trim() ? "border-[#495AFF]" : "border-[#DC3545]"
                } w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal text-[#00000080]`}
              />
            </div>
            <span className="text-sm text-[#DC3545] font-normal flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#dc3545]"></span>
              مثال : طراحی یک .لوگوی مینیمال برای تولید کیف و کفش
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col gap-4 md:w-[60%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              درباره پروژه توضیح دهید
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              هر چه توضیحات بیشتر و واضح‌تر باشد به شما کمک می‌کند سریعتر به
              آنچه می‌خواهید برسید
            </label>
            <div className="flex items-center gap-4 w-full">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`rounded-lg border-[2px] h-[190px] ${
                  description.trim() ? "border-[#495AFF]" : "border-[#DC3545]"
                } w-full px-3 py-2 flex justify-between items-center md:text-base bg-[#fff] font-normal text-[#00000080] placeholder:text-[#aaa] text-sm`}
                placeholder="توضیحات تکمیلی"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-[40%] w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              آپلود فایل
            </p>
            <label
              className="text-[##00060F] text-sm font-normal"
              htmlFor="upload-file"
            >
              فایل هایی که به توضیحات شما در معرفی پروژه کمک میکند را آپلود کنید
            </label>
            <div
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.click();
                }
              }}
              className={`w-full bg-white flex justify-center items-center cursor-pointer rounded-lg text-xs md:text-base font-bold border-[2px] h-[190px] ${file ? "border-[#495AFF]" : "border-[#DC3545]"}`}
            >
              <input
                ref={inputRef}
                onChange={handleFileChange}
                id="upload-file"
                type="file"
                hidden
              />
              آپلود عکس یا فایل
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              به چه مهارت‌هایی نیاز دارید؟
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              حداکثر پنچ مهارت را انتخاب کنید
            </label>
            <div className="flex items-center gap-4 w-full">
              <button
                className={`rounded-lg border-[2px] border-[#DC3545] w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal cursor-pointer text-[#00000080]`}
              >
                جست و جوی مهارت
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
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border-[1px] border-[#DC3545] px-6 py-2 justify-between">
              <span className="cursor-pointer">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24309 0.757865L0.757812 9.24315M9.24309 9.24309L0.757812 0.757812"
                    stroke="#495AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="md:text-lg text-sm text-[#000] font-normal">
                مهارت 1
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[##00060F] md:text-xl text-base font-bold">
              اولویت و بودجه را مشخص کنید.
            </p>
            <label className="text-[##00060F] text-sm font-normal" htmlFor="">
              با انتخاب اولویت پروژه، فریلنسر از هدف شما مطلع می‌شود و می‌تواند
              خروجی بهتری را به شما ارائه کند.
            </label>
          </div>
          <div className="flex items-center gap-5 justify-between flex-wrap">
            <div
              className={`${
                selectedOption === "price"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } flex justify-center items-center rounded-lg border-[1px] px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={selectedOption === "price"}
                    onChange={() => setSelectedOption("price")}
                    id="price"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <label
                  htmlFor="price"
                  className="text-base font-extrabold pb-1.5 text-[#000]"
                >
                  برای من <span className="text-[#495AFF]">قیمت</span> بالاترین
                  درجه اهمیت را دارد
                </label>
              </div>{" "}
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] ${
                selectedOption === "quality"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={selectedOption === "quality"}
                    onChange={() => setSelectedOption("quality")}
                    id="quality"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <label
                  htmlFor="quality"
                  className="text-base font-extrabold pb-1.5 text-[#000]"
                >
                  برای من <span className="text-[#495aff]">کیفیت</span> بالاترین
                  درجه اهمیت را دارد
                </label>
              </div>{" "}
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] ${
                selectedOption === "both"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={selectedOption === "both"}
                    onChange={() => setSelectedOption("both")}
                    id="both"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <label
                  htmlFor="both"
                  className="text-base font-extrabold pb-1.5 text-[#000]"
                >
                  برای من ترکیبی از{" "}
                  <span className="text-[#495aff]">کیفیت</span> و{" "}
                  <span className="text-[#495aff]">قیمت</span> اهمیت را دارد
                </label>
              </div>{" "}
            </div>
          </div>
          <span className="md:text-base text-sm text-[##00060F] font-normal">
            انتخاب بودجه (تومان)
          </span>
          <div className="flex md:flex-row flex-col items-center md:gap-30 gap-5">
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <label className="text-[##00060F] text-sm font-normal" htmlFor="">
                حداقل بودجه (تومان)
              </label>
              <div className="flex items-center gap-4 w-full">
                <input
                  value={leastBudget}
                  onChange={(e) => handleChange(setLeastBudget, e)}
                  className={`rounded-lg border-[1px] ${
                    leastBudget.trim() ? "border-[#495AFF]" : "border-[#DC3545]"
                  } w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal text-[#00000080]`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <label className="text-[##00060F] text-sm font-normal" htmlFor="">
                حداکثر بودجه (تومان)
              </label>
              <div className="flex items-center gap-4 w-full">
                <input
                  value={MostBudget}
                  onChange={(e) => handleChange(setMostBudget, e)}
                  className={`rounded-lg border-[1px] ${
                    MostBudget.trim() ? "border-[#495AFF]" : "border-[#DC3545]"
                  } w-full px-3 py-2 flex justify-between items-center text-base bg-[#fff] font-normal text-[#00000080]`}
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-6">
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] ${
                projectMode === "simple"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={projectMode === "simple"}
                    onChange={() => setProjectMode("simple")}
                    id="simple"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <div className="flex flex-col items-center gap-3">
                  <label
                    htmlFor="simple"
                    className="md:text-xl text-base font-bold text-[#1d40d7]"
                  >
                    پروژه ساده
                  </label>
                  <span className="md:text-base text-sm font-bold text-[#000]">
                    5,000,000 تا 30,000,000 میلیون تومان
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] ${
                projectMode === "middle"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={projectMode === "middle"}
                    onChange={() => setProjectMode("middle")}
                    id="middle"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <div className="flex flex-col items-center gap-3">
                  <label
                    htmlFor="middle"
                    className="md:text-xl text-base font-bold text-[#1d40d7]"
                  >
                    پروژه متوسط
                  </label>
                  <span className="md:text-base text-sm font-bold text-[#000]">
                    30,000,000 تا 50,000,000 میلیون تومان
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center items-center rounded-lg border-[1px] ${
                projectMode === "advanced"
                  ? "border-[#495AFF]"
                  : "border-[#DC3545]"
              } px-4 py-2`}
            >
              <div className="flex items-center gap-2">
                <label className="relative inline-block">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
                    checked={projectMode === "advanced"}
                    onChange={() => setProjectMode("advanced")}
                    id="advanced"
                  />
                  <svg
                    className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </label>
                <div className="flex flex-col items-center gap-3">
                  <label
                    htmlFor="advanced"
                    className="md:text-xl text-base font-bold text-[#1d40d7]"
                  >
                    پروژه بزرگ
                  </label>
                  <span className="md:text-base text-sm font-bold text-[#000]">
                    50,000,000 تا 300,000,000 میلیون تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`w-full flex justify-center items-center text-[#fff] rounded-lg bg-[#6C757D] py-3 md:text-lg text-sm font-bold cursor-pointer`}
          >
            ثبت رایگان پروژه
          </button>
        </div>
      </section>
    </>
  );
};

export default OrderProject;
