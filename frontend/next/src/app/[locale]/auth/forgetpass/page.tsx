"use client";
import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/utils/api";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
=======
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
>>>>>>> 68e0518728d98227555524759677393c621674e9

const ForgetPass = () => {
  const router = useRouter();

<<<<<<< HEAD
<<<<<<< HEAD
  const [forgetPassPhone, setForgetPassPhone] = useState<string>("");

  const [oldPass, setOldPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");

  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
=======
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
  const [forgetPassStep, setForgetPass] = useState<number>(1);
  // const [showPassword, setShowPassword] = useState<boolean>(false);

  const [forgetPassPhone, setForgetPassPhone] = useState<string>("");
  const [forgetPassPassWord, setForgetPassPassWord] = useState<string>("");

  // const [isPhoneNumberTrue, setIsPhoneNumberTrue] = useState<boolean>(true);

  // const [oldPass, setOldPass] = useState<string>("");
  // const [newPass, setNewPass] = useState<string>("");

  // const [showConfirmPassword, setShowConfirmPassword] =
    // useState<boolean>(false);
<<<<<<< HEAD
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9

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

<<<<<<< HEAD
<<<<<<< HEAD
  const changePassHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api("/api/Users/ChangePassword", "PUT", {
      mobile: forgetPassPhone,
      oldPassword: oldPass,
      newPassWord: newPass,
    })
    .then(res => {
      console.log(res)
      if (res) {
        return res.json()
      } else {
        throw new Error("مشکلی در فرآیند تغییر رمز رخ داده!!");
      }
    })
    .then((data) => {
      console.log(data);
    })
=======
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
  // const changePassHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   api("/api/Users/ChangePassword", "PUT", {
  //     mobile: forgetPassPhone,
  //     oldPassword: oldPass,
  //     newPassWord: newPass,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       if (res) {
  //         return res.json();
  //       } else {
  //         throw new Error("مشکلی در فرآیند تغییر رمز رخ داده!!");
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const loginHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginInfo = {
      mobile: forgetPassPhone,
      password: forgetPassPassWord,
    };

    api("/api/Auth/login", "POST", loginInfo)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw new Error("اطلاعات وارد شده نادرست است");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        Swal.fire({
          icon: "success",
          title: "ورود موفق",
          text: "با موفقیت وارد شدید",
          confirmButtonText: "باشه",
        }).then(() => {
          router.push("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "ورود نا موفق",
          text: error.message || "خطایی رخ داده است",
          confirmButtonText: "امتحان دوباره",
        });
        console.error("Login Error:", error);
      });
<<<<<<< HEAD
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
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
                  شماره تماس
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={forgetPassPhone}
                  onChange={(e) => setForgetPassPhone(e.target.value)}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="شماره تماس خود را وارد کنید ."
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
<<<<<<< HEAD
<<<<<<< HEAD
              onSubmit={(e) => changePassHandler(e)}
=======
              onSubmit={(e) => loginHandle(e)}
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
=======
              onSubmit={(e) => loginHandle(e)}
>>>>>>> 68e0518728d98227555524759677393c621674e9
            >
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  شماره تماس
                </label>
                <input
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
                  type="tel"
                  name="phone"
                  value={forgetPassPhone}
                  onChange={(e) => setForgetPassPhone(e.target.value)}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="شماره تماس خود را وارد کنید ."
                />
                <div className="flex flex-col gap-3 w-full">
                  <label className="font-normal text-base text-black">
                    رمز
                  </label>
                  <input
                    type="text"
                    name="pass"
                    value={forgetPassPassWord}
                    onChange={(e) => setForgetPassPassWord(e.target.value)}
                    className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                    placeholder="رمز را وارد کنید"
                  />
                </div>
              </div>
              <button
                type="submit"
<<<<<<< HEAD
>>>>>>> cd8b1b5f897b78fd8f241af07307339f5313cabf
=======
>>>>>>> 68e0518728d98227555524759677393c621674e9
                className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
              >
                مرحله بعد
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

{
  /* <form
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
  className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
>
  ثبت
</button>
</form> */
}
