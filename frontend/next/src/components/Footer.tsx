"use client";
import { usePathname } from "next/navigation";
import { lazy, memo } from "react";

// const IconEnamad = lazy(() => import("@/icons/footer/IconEnamad"));
const IconInstagram = lazy(() => import("@/icons/footer/IconInstagram"));
const IconTelegram = lazy(() => import("@/icons/footer/IconTelegram"));
const IconTwitter = lazy(() => import("@/icons/footer/IconTwitter"));
const IconWhatsApp = lazy(() => import("@/icons/footer/IconWhatsApp"));

const Footer = () => {
  const path = usePathname();
  const isAuthPage = path.includes("/auth");

  return (
    <>
      {!isAuthPage && (
        <footer className="lg:w-full flex flex-col lg:flex-row justify-between xl:px-[100px] bg-[#1E2037] lg:items-center py-6 px-4 text-white w-full overflow-hidden">
          <div>
            <h2 className="lg:text-[48px] flex items-center justify-center lg:block font-bold mb-10 text-[28px] text-white">
              فرتاک
            </h2>
            <div className="grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] px-2 gap-y-12 justify-between lg:gap-20 font-medium">
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] mb-2 lg:mb-0 font-bold lg:font-medium">
                    درباره ما
                  </li>
                  <li className="ms-2 lg:ms-0">ماموریت و ارزش‌ها</li>
                  <li className="ms-2 lg:ms-0">تیم ما</li>
                  <li className="ms-2 lg:ms-0">داستان ما</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] mb-2 lg:mb-0 font-bold lg:font-medium">
                    تماس با ما
                  </li>
                  <li className="ms-2 lg:ms-0">فرم تماس</li>
                  <li className="ms-2 lg:ms-0">آدرس و نقشه</li>
                  <li className="ms-2 lg:ms-0">شبکه های اجتماعی</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] mb-2 lg:mb-0 font-bold lg:font-medium">
                    سوالات متداول
                  </li>
                  <li className="ms-2 lg:ms-0">ثبت سفارش و خرید</li>
                  <li className="ms-2 lg:ms-0">نحوه انصراف</li>
                  <li className="ms-2 lg:ms-0">چگونگی پرداخت</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] mb-2 lg:mb-0 font-bold lg:font-medium">
                    همکاری با ما
                  </li>
                  <li className="ms-2 lg:ms-0">فرصت‌های شغلی</li>
                  <li className="ms-2 lg:ms-0">همکاری در تولید محتوا</li>
                  <li className="ms-2 lg:ms-0">فروش عمده و نمایندگی</li>
                </ul>
              </span>

              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] text-nowrap mb-2 lg:mb-0 font-bold lg:font-medium">
                    مقالات و آموزش‌ها
                  </li>
                  <li className="ms-2 lg:ms-0">آموزش سئو</li>
                  <li className="ms-2 lg:ms-0">نقشه راه فریلنسری</li>
                  <li className="ms-2 lg:ms-0">قراردادها</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] text-nowrap mb-2 lg:mb-0 font-bold lg:font-medium">
                    بلاگ و اخبار
                  </li>
                  <li className="ms-2 lg:ms-0">جدیدترین مقالات</li>
                  <li className="ms-2 lg:ms-0">معرفی رویدادها</li>
                  <li className="ms-2 lg:ms-0">داستان ما</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] text-nowrap mb-2 lg:mb-0 font-bold lg:font-medium">
                    محصولات و خدمات
                  </li>
                  <li className="ms-2 lg:ms-0">فریلنسری</li>
                  <li className="ms-2 lg:ms-0">شبکه‌سازی</li>
                  <li className="ms-2 lg:ms-0">دوره‌های آنلاین</li>
                </ul>
              </span>
              <span>
                <ul className="text-[10px] lg:text-[14px]">
                  <li className="text-[16px] text-nowrap mb-2 lg:mb-0 font-bold lg:font-medium">
                    قوانین و حریم خصوصی
                  </li>
                  <li className="ms-2 lg:ms-0">شرایط استفاده از سایت</li>
                  <li className="ms-2 lg:ms-0">حقوق کاربران</li>
                  <li className="ms-2 lg:ms-0">سیاست حفظ حریم خصوصی</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="flex flex-col h-[264px] justify-between items-center mt-22">
            <div className="flex items-center justify-center gap-[30px]">
              <IconTelegram className="text-white" />
              <IconTwitter className="text-white" />
              <IconWhatsApp className="text-white" />
              <IconInstagram className="text-white" />
            </div>
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=622700&Code=VsbzEV6HdD5FHsDVcSNp533o3gsp6Qep"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=622700&Code=VsbzEV6HdD5FHsDVcSNp533o3gsp6Qep"
                alt=""
                style={{ cursor: "pointer" }}
                data-code="VsbzEV6HdD5FHsDVcSNp533o3gsp6Qep"
              />
            </a>
            {/* <IconEnamad className="size-[100px] text-white" /> */}
          </div>
        </footer>
      )}
    </>
  );
};

export default memo(Footer);
