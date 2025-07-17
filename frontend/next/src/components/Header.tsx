"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { lazy, memo, useEffect, useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "@reactuses/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDrawerStore } from "@/store";
import { useRouter } from "next/navigation";

const Button = lazy(() => import("./Button"));
const IconSearch = lazy(() => import("@/icons/IconSearch"));
const IconThemeToggle = lazy(() => import("@/icons/IconThemeToggle"));
const IconShoppingBag = lazy(() => import("@/icons/IconShoppingBag"));
const IconBurgerMenu = lazy(() => import("@/icons/IconBurgerMenu"));
const IconNotification = lazy(() => import("@/icons/IconNotification"));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowSize();
  const path = usePathname();
  const { setOpen } = useDrawerStore();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (width! <= 929) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    handleScroll(); // برای بار اول

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // برای مواقعی که کاربر resize می‌کنه

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [width]);

  const isAuthPage = path.includes("/auth");

  return (
    <>
      {!isAuthPage && (
        <header
          className={clsx(
            "sticky top-0 z-50 transition-colors duration-300",
            "md:bg-white md:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)]",
            {
              "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]": scrolled,
              "bg-none": !scrolled,
            }
          )}
        >
          <div className="flex items-center justify-center py-5">
            <Image
              className="w-[142px] h-[142px] hidden md:block"
              src={logo}
              priority
              alt="logo"
            />
            <div className="grow mx-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IconBurgerMenu
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="text-icon cursor-pointer scale-150 md:hidden"
                  />
                  <span className="md:text-yellowPrimary font-extrabold text-[16px] md:text-[32px]">
                    فرتاک پروژه
                  </span>
                </div>

                <div className="flex justify-center items-center gap-5">
                  <div className="flex justify-center gap-5 items-center relative top-1">
                    <IconSearch />
                    <IconThemeToggle />
                    <IconShoppingBag />
                    <IconNotification />
                  </div>
                  <Button
                    color="#1d40d7"
                    className="hidden md:block py-2 px-5"
                    text="ورود | عضویت"
                    click={() => router.push("/auth")}
                  />
                </div>
              </div>

              <div className="w-[90%]">
                <div className="h-[0.5px] hidden md:block bg-black/25 my-4"></div>
                <div className="hidden md:block">
                  <nav>
                    <div className="flex justify-center">
                      <ul className="flex space-x-6 px-6">
                        {[
                          { title: "خانه", href: "/" },
                          { title: "تدریس", href: "/tadris" },
                          { title: "پروژه ها", href: "/projects" },
                          { title: "دوره ها", href: "/courses" },
                          { title: "وبلاگ", href: "#" },
                          { title: "درباره ما", href: "#" },
                          { title: "تماس با ما", href: "#" },
                          { title: "پشتیبانی", href: "#" },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <Link
                              href={item.href}
                              className="text-black hover:text-gray-300"
                            >
                              {item.title}
                            </Link>
                            {((path.includes(item.href) && index !== 0) ||
                              (path === "/fa" && index === 0)) && (
                              <div className="bg-[#00060F] rounded-[3px] w-[7.24px] h-[3px] mt-1"></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default memo(Header);
