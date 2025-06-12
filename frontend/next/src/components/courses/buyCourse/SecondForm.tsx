import { Breadcrumbs, Divider } from "@mui/material";
import { Dispatch, Fragment, lazy, memo, SetStateAction, useMemo } from "react";

const IconArrow = lazy(() => import("@/icons/IconArrow"));
const IconMagnifier = lazy(() => import("@/icons/IconMagnifier"));

const dasteBandi = {
  دبستان: {
    "اول ابتدایی": [
      "علوم اول ابتدایی",
      "ریاضی اول ابتدایی",
      "فارسی اول ابتدایی",
      "املاء اول ابتدایی",
      "نگارش اول ابتدایی",
    ],
    "دوم ابتدایی": {},
    "سوم ابتدایی": {},
    "چهارم ابتدایی": {},
    "پنجم ابتدایی": {},
    "ششم ابتدایی": {},
    تیزهوشان: {},
  },
  "متوسطه اول": {},
  "متوسطه دوم": {},
  کنکور: {},
  دانشگاه: {},
};

const SecondForm = ({
  completeForm,
  setFormState,
  educationBreadCrumbs,
  setBussinesBreadCrumbs,
  setEducationBreadCrumbs,
  bussinesBreadCrumbs,
}: {
  completeForm: Dispatch<SetStateAction<true[]>>;
  setFormState: Dispatch<SetStateAction<number>>;
  setEducationBreadCrumbs: Dispatch<SetStateAction<string[]>>;
  setBussinesBreadCrumbs: Dispatch<SetStateAction<string[]>>;
  educationBreadCrumbs: string[];
  bussinesBreadCrumbs: string[];
}) => {
  const currentEducationCategory = useMemo(() => {
    let current = dasteBandi;
    for (const key of educationBreadCrumbs) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      current = current?.[key];
      if (!current || typeof current !== "object") break;
    }
    return current;
  }, [educationBreadCrumbs]);
  const currentBussinesCategory = useMemo(() => {
    let current = dasteBandi;
    for (const key of bussinesBreadCrumbs) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      current = current?.[key];
      if (!current || typeof current !== "object") break;
    }
    return current;
  }, [bussinesBreadCrumbs]);
  return (
    <div className="flex w-full flex-col mt-10">
      <div className="w-full py-3 border-2 rounded-[8px] px-2 lg:px-5 flex flex-col lg:flex-row lg:items-center justify-between">
        <span className="text-[24px] font-[700]">
          در چه زمینه ای میخوای آموزش ببینی ؟
        </span>
        <div className="flex items-center justify-center gap-10 lg:w-1/2">
          <div className="flex justify-between items-center w-full rounded-[8px] pe-2 border-2">
            <input
              className="grow outline-none px-2 h-[47px]"
              type="text"
              placeholder="دوست داری چی یاد بگیری؟"
            />
            <IconMagnifier />
          </div>
        </div>
      </div>

      <div className="flex mt-3 flex-col">
        <Breadcrumbs
          classes={{ li: "mx-2" }}
          separator={<IconArrow />}
          aria-label="breadcrumb"
        >
          <div
            onClick={() => {
              if (educationBreadCrumbs.length) setEducationBreadCrumbs([]);
            }}
            className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]"
          >
            تحصیلی
          </div>
          {educationBreadCrumbs.map((item, index) => (
            <div
              onClick={() => {
                setEducationBreadCrumbs((prev) => prev.slice(0, index + 1));
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              key={index}
            >
              {item}
            </div>
          ))}
        </Breadcrumbs>
        <div className="flex flex-row px-6 py-4">
          {currentEducationCategory && !Array.isArray(currentEducationCategory)
            ? Object.keys(currentEducationCategory)?.map((item, index) => (
                <Fragment key={index}>
                  <div
                    onClick={() => {
                      setEducationBreadCrumbs((prev) => {
                        if (!prev.includes(item)) {
                          return [...prev, item];
                        }
                        return prev;
                      });
                    }}
                    className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-center items-center"
                  >
                    {item}
                    <IconArrow className="rotate-[-90deg] mr-4" />
                  </div>
                  {index !==
                    Object.keys(currentEducationCategory).length - 1 && (
                    <Divider color="#B1BFFA" />
                  )}
                </Fragment>
              ))
            : currentEducationCategory?.map((item, index) => (
                <Fragment key={index}>
                  <div
                    onClick={() => {
						console.log("completeForm");
                      setFormState((prev) => ++prev);
                      completeForm((prev) => {
                        if (prev.length < 3) return [...prev, true];
                        return prev;
                      });
                    }}
                    className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-center items-center"
                  >
                    {item}
                    <IconArrow className="rotate-[-90deg] mr-4" />
                  </div>
                  {index !==
                    Object.keys(currentEducationCategory).length - 1 && (
                    <Divider color="#B1BFFA" />
                  )}
                </Fragment>
              ))}
        </div>
        <Breadcrumbs
          classes={{ li: "mx-2" }}
          separator={<IconArrow />}
          aria-label="breadcrumb"
        >
          <div
            onClick={() => {
              if (bussinesBreadCrumbs.length) setBussinesBreadCrumbs([]);
            }}
            className="text-[13px] cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit lg:text-[16px] py-[10px] px-4 bg-[#000] rounded-sm text-[#fff]"
          >
            کسب و کار
          </div>
          {bussinesBreadCrumbs.map((item, index) => (
            <div
              onClick={() => {
                setBussinesBreadCrumbs((prev) => prev.slice(0, index + 1));
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              key={index}
            >
              {item}
            </div>
          ))}
        </Breadcrumbs>
        <div className="flex flex-row px-6 py-4">
          {currentBussinesCategory && !Array.isArray(currentBussinesCategory)
            ? Object.keys(currentBussinesCategory)?.map((item, index) => (
                <Fragment key={index}>
                  <div
                    onClick={() => {
                      setBussinesBreadCrumbs((prev) => {
                        if (!prev.includes(item)) {
                          return [...prev, item];
                        }
                        return prev;
                      });
                    }}
                    className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-center items-center"
                  >
                    {item}
                    <IconArrow className="rotate-[-90deg] mr-4" />
                  </div>
                  {index !==
                    Object.keys(currentBussinesCategory).length - 1 && (
                    <Divider color="#B1BFFA" />
                  )}
                </Fragment>
              ))
            : currentBussinesCategory?.map((item, index) => (
                <Fragment key={index}>
                  <div
                    onClick={() => {
						console.log("completeForm2");

                      setFormState((prev) => ++prev);
                      completeForm((prev) => {
                        if (prev.length < 3) return [...prev, true];
                        return prev;
                      });
                    }}
                    className="w-full p-4 cursor-pointer transition-colors duration-200 rounded-sm hover:bg-gray-200 flex justify-center items-center"
                  >
                    {item}
                    <IconArrow className="rotate-[-90deg] mr-4" />
                  </div>
                  {index !==
                    Object.keys(currentBussinesCategory).length - 1 && (
                    <Divider color="#B1BFFA" />
                  )}
                </Fragment>
              ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SecondForm);
