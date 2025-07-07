import Image from "next/image";
import { lazy, memo, useEffect, useState, useRef } from "react";
import profile from "../../../../public/buyCourse/selectTeacherCardProfile.png";
import ThirdFormAfterVerified from "./ThirdFormAfterVerified";

const IconFilter = lazy(() => import("@/icons/courses/IconFilter"));
const IconStar = lazy(() => import("@/icons/teacherCard/IconStar"));
const List = lazy(() => import("@/components/List"));
const Button = lazy(() => import("@/components/Button"));

const ThirdForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [pagination, setPagination] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPagination(window.innerWidth > 640);
      setIsVerified(localStorage.getItem("verified") === "true");
    }
  }, []);

  const handleSendOtp = () => {
    if (!phone.match(/^09\d{9}$/)) {
      setError("شماره موبایل معتبر نیست.");
      return;
    }
    setError("");
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      setError("کد تایید باید ۶ رقمی باشد.");
      return;
    }
    localStorage.setItem("verified", "true");
    setIsVerified(true);
    setError("");
    setShowModal(false);
    setOtp("");
    setOtpSent(false);
  };

  if (isVerified) {
    return <ThirdFormAfterVerified />;
  }

  return (
    <div className="flex w-full flex-col mt-10">
      <div className="w-full py-3 border-2 rounded-[8px] px-2 lg:px-5 flex lg:items-center justify-between sm:justify-start sm:gap-2">
        <span className="text-[24px] font-[700]">استاد خود را انتخاب کنید</span>
        <IconFilter />
      </div>

      <List
        title=""
        bottomArrow
        start
        className="flex-col sm:flex-row flex-wrap"
        pagination={pagination}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-[#EEF5FF] shrink-0 w-full sm:w-[356px] rounded-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex flex-col py-3 px-5 mb-4 sm:mb-0"
          >
            <div className="flex gap-5 sm:gap-20 flex-col sm:flex-row items-start sm:items-center">
              <div className="flex items-center gap-3">
                <Image src={profile} alt="" />
                <span className="text-[24px] text-[#1450A3] font-[700] shrink-0">
                  نام استاد
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2 sm:mt-0">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-[10px] h-[10px]" />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <span className="text-[16px] font-[700]">
                کارشناس مدیریت آموزشی از دانشگاه فلان
              </span>

              <ul className="list-disc pr-5 text-right leading-12 text-[#57626D] text-[12px]">
                <li className="lg:text-[18px] text-[14px] font-[400]">
                  10 سال سابقه کاری در فلان موسسه
                </li>
                <li className="lg:text-[18px] text-[14px] font-[400]">
                  2 سال سابقه کار با فرتاک
                </li>
                <li className="lg:text-[18px] text-[14px] font-[400]">
                  فارغ التحصیل فلان رشته از فلان دانشگاه
                </li>
              </ul>
            </div>
            <div className="flex items-center mt-5 justify-center gap-8 text-[14px] font-[400]">
              <Button
                text="انتخاب استاد"
                color="#1450A3"
                outline
                click={() => setShowModal(true)}
              />
              <Button
                action="goToTeacherResume"
                text="رزومه استاد"
                color="#1450A3"
              />
            </div>
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{ backdropFilter: "blur(2px)" }}
                onClick={() => setShowModal(false)}
              >
                <div
                  className="bg-white rounded-lg border p-6 w-[90vw] max-w-sm flex flex-col gap-6 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-bold text-xl text-center">ورود</span>
                  {otpSent ? (
                    <>
                      <span className="text-center text-sm text-gray-600">
                        کد ارسال شده را وارد کنید.
                      </span>
                      <div className="flex justify-center gap-2" dir="ltr">
                        {[...Array(6)].map((_, idx) => (
                          <input
                            key={idx}
                            ref={(el) => {
                              inputRefs.current[idx] = el;
                            }}
                            type="text"
                            style={{ borderRadius: "0 .5rem" }}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            className="border rounded-lg w-10 h-10 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={otp[idx] || ""}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9]/g, "");
                              if (!value) {
                                const newOtp = otp.split("");
                                newOtp[idx] = "";
                                setOtp(newOtp.join(""));
                                return;
                              }
                              const newOtp = otp.split("");
                              newOtp[idx] = value[0];
                              setOtp(newOtp.join(""));
                              if (idx < 5 && value) {
                                inputRefs.current[idx + 1]?.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Backspace") {
                                if (otp[idx]) {
                                  const newOtp = otp.split("");
                                  newOtp[idx] = "";
                                  setOtp(newOtp.join(""));
                                } else if (idx > 0) {
                                  inputRefs.current[idx - 1]?.focus();
                                }
                              }
                            }}
                            onPaste={(e) => {
                              const pasted = e.clipboardData
                                .getData("Text")
                                .replace(/[^0-9]/g, "")
                                .slice(0, 6);
                              if (pasted.length) {
                                setOtp(pasted.padEnd(6, ""));
                                setTimeout(() => {
                                  for (let i = 0; i < pasted.length; i++) {
                                    inputRefs.current[i]?.focus();
                                  }
                                }, 0);
                              }
                              e.preventDefault();
                            }}
                          />
                        ))}
                      </div>
                      <Button
                        text="تایید"
                        color="#1450A3"
                        click={handleVerifyOtp}
                        className="mt-4"
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-center text-sm text-gray-600">
                        برای ورود شماره موبایل خود را وارد کنید.
                      </span>
                      <input
                        type="tel"
                        placeholder="شماره تلفن"
                        className="border rounded-lg px-3 py-2 text-right w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {error && (
                        <span className="text-red-500 text-sm text-center">
                          {error}
                        </span>
                      )}
                      <Button
                        text="بعدی"
                        color="#1450A3"
                        click={handleSendOtp}
                        className="mt-4"
                      />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </List>
    </div>
  );
};

export default memo(ThirdForm);
