"use client";
import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/utils/api";

const ForgetPass = () => {
  const [forgetPassStep, setForgetPass] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [forgetPassPhone, setForgetPassPhone] = useState<string>("");

  const [oldPass, setOldPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");

  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const confirmPhoneNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api("/api/Users/ForgetPassword", "PUT", { mobile: forgetPassPhone })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setForgetPass(2);
          return res.json();
        } else {
          throw new Error("اشکالی رخ داده است");
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const changePassHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api("/api/Users/ChangePassword", "PUT", {
      userId: 22,
      oldPassword: oldPass,
      newPassWord: newPass,
    })
    .then(res => {
      console.log(res);
    })
  };
  return (
    <>
      <div className="w-[90%] mx-auto my-10 flex lg:flex-row flex-col-reverse lg:gap-30 gap-10">
        <div className="lg:w-[35%] w-full flex flex-col items-center gap-4 lg:mt-24">
          <h5 className="text-black font-normal text-sm text-center">
            بازیابی رمز عبور
          </h5>
          {forgetPassStep == 1 && (
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={(e) => confirmPhoneNumber(e)}
            >
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  شماره تلفن
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={forgetPassPhone}
                  onChange={(e) => setForgetPassPhone(e.target.value)}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="شماره تلفن خود را وارد کنید ."
                />
              </div>
              <button
                type="submit"
                className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
              >
                مرحله بعد
              </button>
            </form>
          )}
          {forgetPassStep == 2 && (
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={(e) => changePassHandler(e)}
            >
              <div className="flex flex-col gap-3 w-full relative">
                <label className="font-normal text-base text-black">
                  رمز عبور
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={oldPass || ""}
                  onChange={(e) => setOldPass(e.target.value)}
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
                  value={newPass || ""}
                  onChange={(e) => setNewPass(e.target.value)}
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
              <button
                // onClick={() => setForgetPass(2)}
                className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
              >
                ثبت
              </button>
            </form>
          )}
        </div>
        <div className="relative lg:w-[65%] w-[100%] h-[85vh]">
          <Image
            src={`/images/Group 23122.png`}
            fill
            sizes="(max-width: 768px) 100vw, auto"
            className="w-full h-full"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
