import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../api/api";

function Login() {
  const [registerStep, setRegisterStep] = useState(1);
  const [loginUser, setLoginUser] = useState(1);
  const [loginMode, setLoginMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginPhone, setLoginPhone] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const [formDataRegister, setFormDataRegister] = useState({
    name: "",
    lastname: "",
    passWord: "",
    salt: "",
    mobile: "",
    email: "",
    verify: "",
    status: 0,
    kind: 0,
  });

  const handleChange = (e) => {
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

  const loginHandle = (e) => {
    e.preventDefault();
    const loginInfo = {
      mobile: loginPhone,
      password: loginPass,
    };

    api("/api/Auth/login", "POST", loginInfo)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          Swal.fire({
            icon: "error",
            title: "ورود نا موفق",
            text: "اطلاعات وارد شده نادرست است",
            confirmButtonText: "امتحان دوباره",
          });
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        Swal.fire({
          icon: "success",
          title: "ورود موفق",
          text: "با موفقیت وارد شدید",
          confirmButtonText: "باشه",
        }).then(() => {
          redirect("/");
        });
      });
  };

  const handleVerifyCode = () => {
    const verfiCodeInfo = {
      mobile: formDataRegister,
      otpCode: code.join(""),
    };

    api("/api/Users/OtpConfirm", "POST", verfiCodeInfo)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          Swal.fire({
            icon: "error",
            title: "مشکل در ثبت نام",
            text: "کد وارد شده نادرست است",
            confirmButtonText: "امتحان دوباره",
          });
        }
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "ورود موفق",
          text: "با موفقیت وارد شدید",
          confirmButtonText: "باشه",
        }).then(() => {
          redirect("/");
        });
      });
  };

  // const finalCode = code.join("");

  const registerHandle = (e) => {
    e.preventDefault();

    const registerInfo = {
      name: formDataRegister.name,
      lastname: formDataRegister.lastname,
      passWord: formDataRegister.passWord,
      verify: formDataRegister.verify,
      salt: formDataRegister.salt,
      mobile: formDataRegister.mobile,
      email: formDataRegister.email,
      status: formDataRegister.status,
      kind: loginUser,
    };
    try {
      api("/api/Auth/register", "POST", registerInfo)
        .then((res) => {
          if (res.status === 200) {
            setRegisterStep(2);
            api("/api/Users/OtpSingup", "POST", {
              mobile: formDataRegister.mobile,
            })
              .then((res) => {
                if (res.status === 200) {
                  return res.json();
                }
              })
              .then((data) => {
                console.log(data);
              });
            return res.json();
          } else {
            console.log(res);
          }
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  const handleChangeCode = (e, index) => {
    const { value } = e.target;

    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < code.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };
  return (
    <div className="w-[90%]  my-10 flex justify-center lg:flex-row flex-col-reverse lg:gap-30 gap-10">
      <div className="lg:w-[35%] w-full flex flex-col items-center gap-4">
        <span className="font-normal text-base text-black text-center">
          {loginMode === "login"
            ? "وارد شوید"
            : loginMode === "register" &&
              registerStep !== 2 &&
              "ایجاد حساب کاربری"}
        </span>
        {loginMode === "register" && registerStep !== 2 && (
          <div className={`w-full bg-[#FFE401] rounded-[33px] py-5 px-4 flex`}>
            <button
              onClick={() => setLoginUser(5)}
              className={`w-1/2 ${
                loginUser === 5 ? "bg-white" : "bg-transparent"
              }  flex justify-center items-center rounded-[9999px] py-2 border-none outline-none font-normal text-base text-black cursor-pointer`}
            >
              کارفرما
            </button>
            <button
              onClick={() => setLoginUser(1)}
              className={`w-1/2 ${
                loginUser === 1 ? "bg-white" : "bg-transparent"
              } flex justify-center items-center rounded-[9999px] py-2 border-none outline-none font-normal text-base text-black cursor-pointer`}
            >
              دانشجو
            </button>
          </div>
        )}
        {registerStep !== 2 && (
          <p className="font-light text-base text-black flex items-center gap-1">
            آیا قبلا ثبت نام کرده اید؟{" "}
            <button
              onClick={changeLoginMode}
              className="bg-none border-none outline-none cursor-pointer text-lg font-bold text-blue-800"
            >
              {loginMode === "login" ? "ثبت نام" : "ورود"}
            </button>
          </p>
        )}
        {(loginMode === "login" && loginUser === 1) || loginUser === 5 ? (
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
          (loginMode === "register" && loginUser === 1) ||
          (loginUser === 5 && (
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
        {loginMode !== "register" && registerStep !== 2 && (
          <div className="w-[90%] mx-auto my-2 flex justify-between items-center gap-2">
            <span className="lg:w-[366px] lg:h-[13px] md:w-[230px] md:h-[9px] sm:w-[170px] sm:h-[7px] w-[80px] h-[5px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 366 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6.47852L6 0.705013L11.7735 6.47852L6 12.252L0.226497 6.47852ZM6 6.47852V5.47852L366 5.47852V6.47852V7.47852L6 7.47852V6.47852Z"
                  fill="#6E7A86"
                />
              </svg>
            </span>
            <span className="lg:text-2xl md:text-lg sm:text-base text-sm text-center font-bold">
              یا
            </span>
            <span className="lg:w-[366px] lg:h-[13px] md:w-[230px] md:h-[9px] sm:w-[170px] sm:h-[7px] w-[80px] h-[5px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 366 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M365.774 6.47852L360 0.705013L354.226 6.47852L360 12.252L365.774 6.47852ZM360 6.47852V5.47852L0 5.47852V6.47852V7.47852L360 7.47852V6.47852Z"
                  fill="#6E7A86"
                />
              </svg>
            </span>
          </div>
        )}
        <section className="flex flex-col gap-3 w-full">
          {loginMode === "login" ? (
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => loginHandle(e)}
            >
              <div className="flex flex-col gap-3 w-full">
                <label className="font-normal text-base text-black">
                  شماره تلفن
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={loginPhone}
                  onChange={(e) => setLoginPhone(e.target.value)}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="شماره تلفن خود را وارد کنید ."
                />
              </div>
              <div className="flex flex-col gap-3 w-full relative">
                <label className="font-normal text-base text-black">
                  رمز عبور
                </label>
                <input
                  type={showPasswordLogin ? "text" : "password"}
                  className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                />
                <span
                  className="absolute left-4 top-[45px] cursor-pointer text-[#1D40D7]"
                  onClick={() => setShowPasswordLogin((prev) => !prev)}
                >
                  {showPasswordLogin ? (
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
              <Link
                href={"/auth/forgetpass"}
                className="text-black underline text-sm font-light"
              >
                فراموشی رمز عبور
              </Link>
              <button
                type="submit"
                className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
              >
                ورود
              </button>
            </form>
          ) : (
            <form
              onSubmit={(e) => registerHandle(e)}
              className="flex flex-col gap-3"
            >
              {registerStep === 1 ? (
                <>
                  <div className="flex flex-col gap-3 w-full">
                    <label className="font-normal text-base text-black">
                      نام
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formDataRegister.name || ""}
                      onChange={handleChange}
                      className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label className="font-normal text-base text-black">
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      value={formDataRegister.lastname || ""}
                      onChange={handleChange}
                      className="border-[2px] border-[#1D40D7] rounded-[9999px] py-2 px-4"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label className="font-normal text-base text-black">
                      شماره تلفن
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formDataRegister.mobile || ""}
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
                      name="passWord"
                      value={formDataRegister.passWord || ""}
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
                      name="verify"
                      value={formDataRegister.verify || ""}
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
                  <Link
                    href={"/auth/forgetpass"}
                    className="text-black underline text-sm font-light"
                  >
                    فراموشی رمز عبور
                  </Link>
                  <button
                    type="submit"
                    className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
                  >
                    ثبت نام
                  </button>
                </>
              ) : (
                registerStep === 2 && (
                  <div className="lg:mt-16">
                    <h5>کد ارسال شده را وارد کنید .</h5>
                    <div
                      className="flex items-center justify-center lg:w-full w-[90%] mx-auto lg:mx-0 gap-2 mt-5 mb-2.5"
                      style={{ direction: "ltr" }}
                    >
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          id={`code-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleChangeCode(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          className="border-2 border-blue-600 rounded-lg w-12 h-12 text-center text-lg font-bold"
                          autoComplete="one-time-code"
                          inputMode="numeric"
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleVerifyCode}
                      className="bg-[#2EBFA5] rounded-[9999px] flex justify-center items-center w-full py-3 text-sm font-normal cursor-pointer hover:bg-[#2ebfa4bd] transition-all text-white my-5"
                    >
                      ورود
                    </button>
                  </div>
                )
              )}
            </form>
          )}
        </section>
      </div>
      {loginUser === 1 ? (
        <img
          src="/img/login1.png"
          alt="logo"
          className="relative lg:w-[65%] w-[100%] lg:h-[820px] h-[400px]"
        />
      ) : (
        <img
          src="/img/login1.png"
          alt="logo"
          className="relative lg:w-[65%] w-[100%] lg:h-[820px] h-[400px]"
        />
      )}
    </div>
  );
}

export default Login;
