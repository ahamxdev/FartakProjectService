"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/skills/SectionTitile";

interface FormDataRegister {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth = () => {
  const [loginUser, setLoginUser] = useState<string>("student");
  const [loginMode, setLoginMode] = useState<string>("login");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [formDataRegister, setFormDataRegister] = useState<FormDataRegister>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const changeLoginMode = () => {
    if (loginMode === "login") {
      setLoginMode("register");
    } else {
      setLoginMode("login");
    }
  };

  return (
    <div className="w-[90%] mx-auto my-10 flex lg:flex-row flex-col-reverse gap-30 items-center">
      <div className="lg:w-[35%] w-full flex flex-col items-center gap-4">
        <span className="font-normal text-base text-black text-center">
          {loginMode === "login" ? "وارد شوید" : "ایجاد حساب کاربری"}
        </span>
        <div className={`w-full bg-[#FFE401] rounded-[33px] py-5 px-4 flex`}>
          <button
            onClick={() => setLoginUser("karfarma")}
            className={`w-1/2 ${
              loginUser === "karfarma" ? "bg-white" : "bg-transparent"
            }  flex justify-center items-center rounded-[9999px] py-2 border-none outline-none font-normal text-base text-black cursor-pointer`}
          >
            کارفرما
          </button>
          <button
            onClick={() => setLoginUser("student")}
            className={`w-1/2 ${
              loginUser === "student" ? "bg-white" : "bg-transparent"
            } flex justify-center items-center rounded-[9999px] py-2 border-none outline-none font-normal text-base text-black cursor-pointer`}
          >
            دانشجو
          </button>
        </div>
        <p className="font-light text-base text-black flex items-center gap-1">
          آیا قبلا ثبت نام کرده اید؟{" "}
          <button
            onClick={changeLoginMode}
            className="bg-none border-none outline-none cursor-pointer"
          >
            {loginMode === "login" ? "ثبت نام" : "ورود"}
          </button>
        </p>
        {(loginMode === "login" && loginUser === "student") ||
        loginUser === "karfarma" ? (
          <Link
            href={"/"}
            className="bg-[#E9F1FF] w-full rounded-[9px] px-8 py-4 flex justify-between items-center"
          >
            ورود با گوگل
            <span>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3753 13.2533C24.3753 12.318 24.2978 11.6355 24.1302 10.9277H13.2324V15.1491H19.6292C19.5003 16.1981 18.8038 17.778 17.2562 18.8396L17.2345 18.9809L20.6802 21.5969L20.9189 21.6202C23.1113 19.6359 24.3753 16.7163 24.3753 13.2533Z"
                  fill="#4285F4"
                />
                <path
                  d="M13.2323 24.3754C16.3662 24.3754 18.9971 23.3642 20.9188 21.6201L17.2561 18.8394C16.2759 19.5093 14.9604 19.9769 13.2323 19.9769C10.1629 19.9769 7.55778 17.9927 6.62912 15.25L6.493 15.2613L2.91014 17.9787L2.86328 18.1064C4.77198 21.8222 8.69261 24.3754 13.2323 24.3754Z"
                  fill="#34A853"
                />
                <path
                  d="M6.63087 15.2491C6.38583 14.5413 6.24402 13.783 6.24402 12.9994C6.24402 12.2157 6.38583 11.4574 6.61797 10.7496L6.61148 10.5989L2.98371 7.83789L2.86502 7.89322C2.07835 9.43518 1.62695 11.1667 1.62695 12.9994C1.62695 14.832 2.07835 16.5635 2.86502 18.1055L6.63087 15.2491Z"
                  fill="#FBBC05"
                />
                <path
                  d="M13.2324 6.0233C15.4119 6.0233 16.8821 6.94594 17.7204 7.71696L20.9962 4.5825C18.9844 2.74987 16.3663 1.625 13.2324 1.625C8.69265 1.625 4.77199 4.17804 2.86328 7.89384L6.61625 10.7503C7.5578 8.00763 10.1629 6.0233 13.2324 6.0233Z"
                  fill="#EB4335"
                />
              </svg>
            </span>
          </Link>
        ) : (
          (loginMode === "register" && loginUser === "student") ||
          (loginUser === "karfarma" && (
            <Link
              href={"/"}
              className="bg-[#E9F1FF] w-full rounded-[9px] px-8 py-4 flex justify-between items-center"
            >
              ثبت نام با گوگل
              <span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3753 13.2533C24.3753 12.318 24.2978 11.6355 24.1302 10.9277H13.2324V15.1491H19.6292C19.5003 16.1981 18.8038 17.778 17.2562 18.8396L17.2345 18.9809L20.6802 21.5969L20.9189 21.6202C23.1113 19.6359 24.3753 16.7163 24.3753 13.2533Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M13.2323 24.3754C16.3662 24.3754 18.9971 23.3642 20.9188 21.6201L17.2561 18.8394C16.2759 19.5093 14.9604 19.9769 13.2323 19.9769C10.1629 19.9769 7.55778 17.9927 6.62912 15.25L6.493 15.2613L2.91014 17.9787L2.86328 18.1064C4.77198 21.8222 8.69261 24.3754 13.2323 24.3754Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.63087 15.2491C6.38583 14.5413 6.24402 13.783 6.24402 12.9994C6.24402 12.2157 6.38583 11.4574 6.61797 10.7496L6.61148 10.5989L2.98371 7.83789L2.86502 7.89322C2.07835 9.43518 1.62695 11.1667 1.62695 12.9994C1.62695 14.832 2.07835 16.5635 2.86502 18.1055L6.63087 15.2491Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M13.2324 6.0233C15.4119 6.0233 16.8821 6.94594 17.7204 7.71696L20.9962 4.5825C18.9844 2.74987 16.3663 1.625 13.2324 1.625C8.69265 1.625 4.77199 4.17804 2.86328 7.89384L6.61625 10.7503C7.5578 8.00763 10.1629 6.0233 13.2324 6.0233Z"
                    fill="#EB4335"
                  />
                </svg>
              </span>
            </Link>
          ))
        )}
        <SectionTitle title={"یا"} />

        <form className="flex flex-col gap-3 w-full">
          {loginMode === "login" ? (
            <>
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  آدرس ایمیل
                </label>
                <input
                  type="email"
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  رمز عبور
                </label>
                <input
                  type="password"
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
              <button className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5">
                ورود
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formDataRegister.fullName || ""}
                  onChange={handleChange}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  شماره تلفن
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formDataRegister.phone || ""}
                  onChange={handleChange}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="لطفا شماره خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  آدرس ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  value={formDataRegister.email || ""}
                  onChange={handleChange}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              <div className="flex flex-col gap-3 w-full relative">
                <label className="font-normal text-base text-black">
                  رمز عبور
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formDataRegister.password || ""}
                  onChange={handleChange}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4 pr-10"
                  placeholder="رمز عبور خود را وارد کنید"
                />
                <span
                  className="absolute left-4 top-[45px] cursor-pointer text-[#1D40D7]"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
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
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}{" "}
                </span>
              </div>
              <div className="flex flex-col gap-3 w-full relative">
                <label className="font-normal text-base text-black">
                  تکرار رمز عبور
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formDataRegister.confirmPassword || ""}
                  onChange={handleChange}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4 pr-10"
                  placeholder="تکرار رمز عبور خود را وارد کنید"
                />
                <span
                  className="absolute left-4 top-[45px] cursor-pointer text-[#1D40D7]"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
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
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}{" "}
                </span>
              </div>
              <button className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5">
                ثبت نام
              </button>
            </>
          )}
        </form>
      </div>
      <div className="relative lg:w-[65%] w-[100%] lg:h-[820px] h-[400px]">
        <Image
          src={`/images/${
            loginUser === "student" ? "Group 231" : "Group 23122"
          }.png`}
          fill
          sizes="(max-width: 768px) 100vw, auto"
          className="w-full h-full"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Auth;
