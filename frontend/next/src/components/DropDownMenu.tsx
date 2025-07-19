"use client";

import { getTextColor } from "@/utils/color";
import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

interface TeacherType {
  teacherTypeId: number;
  title: string;
  teacherTypeParentId: number;
}

type DropDownMenuItemsType = {
  [mainTitle: string]: {
    [subTitle: string]: {
      teacherTypeId: number;
      items: [string, number][][];
    };
  };
};

interface DropDownMenuProps {
  titleBarColor?: string;
}

const DropDownMenu = ({ titleBarColor = "black" }: DropDownMenuProps) => {
  const [selectedMainTitle, setSelectedMainTitle] = useState<string>("");
  const [selectedSubTitleId, setSelectedSubTitleId] = useState<number | null>(null);
  const [headTitle, setHeadTitle] = useState<TeacherType[]>([]);
  const [mainItems, setMainItems] = useState<DropDownMenuItemsType>({});
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleItemHover = (item: TeacherType) => {
    setSelectedMainTitle(item.teacherTypeId.toString());
    const subMenuItems = Object.values(mainItems[item.teacherTypeId.toString()] || {});
    if (subMenuItems.length > 0) {
      setSelectedSubTitleId(subMenuItems[0].teacherTypeId);
    } else {
      setSelectedSubTitleId(null);
    }
  };

  const handleSubItemHover = (teacherTypeId: number) => {
    setSelectedSubTitleId(teacherTypeId);
  };

  const handleMouseLeave = () => {
    setSelectedMainTitle("");
    setSelectedSubTitleId(null);
  };

  const handleSubItemClick = () => {
    router.push(`/tadris/online?step=${2}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api("/api/TeacherTypes/GetAll", "POST");
        if (res.status === 200) {
          const data = await res.json();
          const teacherTypes: TeacherType[] = Array.isArray(data)
            ? data
            : data.teacherTypes || [];

          const headTitles = teacherTypes
            .filter((item) => item.teacherTypeParentId === 0)
            .map((item) => ({
              teacherTypeId: item.teacherTypeId,
              title: item.title,
              teacherTypeParentId: item.teacherTypeParentId,
            }));

          const newMainItems: DropDownMenuItemsType = {};
          headTitles.forEach((item) => {
            newMainItems[item.teacherTypeId.toString()] = {};
          });

          const subItems = teacherTypes.filter(
            (item) => item.teacherTypeParentId !== 0
          );

          const subItemMap: { [key: string]: TeacherType[] } = {};
          subItems.forEach((item) => {
            const parentId = item.teacherTypeParentId.toString();
            if (!subItemMap[parentId]) {
              subItemMap[parentId] = [];
            }
            subItemMap[parentId].push(item);
          });

          headTitles.forEach((parent) => {
            const parentId = parent.teacherTypeId.toString();
            if (subItemMap[parentId]) {
              subItemMap[parentId].forEach((subItem, index) => {
                newMainItems[parentId][subItem.title] = {
                  teacherTypeId: subItem.teacherTypeId,
                  items: [[], [], []],
                };
                const columnIndex = index % 3;
                newMainItems[parentId][subItem.title].items[columnIndex].push([
                  subItem.title,
                  1,
                ]);

                // Add nested items where teacherTypeParentId matches subItem.teacherTypeId
                const nestedItems = teacherTypes.filter(
                  (item) => item.teacherTypeParentId === subItem.teacherTypeId
                );
                nestedItems.forEach((nestedItem, nestedIndex) => {
                  const nestedColumnIndex = nestedIndex % 3;
                  newMainItems[parentId][subItem.title].items[nestedColumnIndex].push([
                    nestedItem.title,
                    0, // Not a parent item
                  ]);
                });
              });
            }
          });

          setHeadTitle(headTitles);
          setMainItems(newMainItems);
          setError(null);
       
        } else {
          throw new Error(`API responded with status: ${res.status}`);
        }
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error occurred";
        console.error("خطا در دریافت دسته‌بندی‌ها:", errorMessage);
        setError("دریافت دسته‌بندی‌ها با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
        setHeadTitle([]);
        setMainItems({});
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="relative overflow-hidden my-5"
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          backgroundColor: titleBarColor,
          color: getTextColor(titleBarColor),
        }}
        className="px-6 lg:min-w-5xl flex items-center justify-around h-[77px] rounded-2xl overflow-x-auto gap-28 max-w-[90vw] lg:max-w-none"
      >
        {error ? (
          <span className="text-red-500">{error}</span>
        ) : headTitle.length > 0 ? (
          headTitle.map((item) => (
            <motion.span
              key={item.teacherTypeId}
              onMouseEnter={() => handleItemHover(item)}
              className={`text-[18px] shrink-0 transition-all duration-200 ${
                selectedMainTitle === item.teacherTypeId.toString()
                  ? "font-bold p-3 !text-2xl bg-[#222222] rounded-t-xl"
                  : "cursor-pointer hover:opacity-80"
              }`}
            >
              {item.title}
            </motion.span>
          ))
        ) : (
          <span>دسته‌بندی‌ها در حال بارگذاری...</span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {selectedMainTitle && (
          <motion.div
            key={selectedMainTitle}
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "circInOut" }}
            className="lg:overflow-hidden transition-transform duration-600 relative -top-5"
          >
            <div className="overflow-x-auto max-w-[90vw] lg:max-w-none bg-[#222222] text-white rounded-2xl mx-px lg:mx-2 p-2 flex">
              <div className="w-1/2 smd:w-1/6 border-e-2">
                {Object.entries(mainItems[selectedMainTitle] || {}).map(
                  ([title, { teacherTypeId }], index) => (
                    <p
                      key={`${selectedMainTitle}-${teacherTypeId}`}
                      onMouseEnter={() => handleSubItemHover(teacherTypeId)}
                      onClick={handleSubItemClick}
                      className={`
                        ${
                          Object.keys(mainItems[selectedMainTitle] || {}).length !==
                            index + 1 && "border-b-2"
                        }
                        ${selectedSubTitleId === teacherTypeId && "text-gray-500 font-bold"}
                        border-slate-200 mx-4 py-4 cursor-pointer hover:opacity-80
                      `}
                    >
                      {title}
                    </p>
                  )
                )}
              </div>
              <div className="smd:flex w-1/2 smd:w-5/6 m-4">
                <div className="smd:w-1/3">
                  {(
                    mainItems[selectedMainTitle]?.[
                      Object.keys(mainItems[selectedMainTitle] || {}).find(
                        (key) =>
                          mainItems[selectedMainTitle][key].teacherTypeId === selectedSubTitleId
                      ) || ""
                    ]?.items[0] || []
                  ).map((item: [string, number], index: number) => (
                    <div
                      key={index}
                      onClick={handleSubItemClick}
                      className={`
                        ${item[1] === 1 ? "text-amber-300 font-bold" : "ms-8"}
                        mb-4 cursor-pointer hover:opacity-80
                      `}
                    >
                      {item[0]}
                      {item[1] === 1 && ">"}
                    </div>
                  ))}
                </div>
                <div className="smd:w-1/3">
                  {(
                    mainItems[selectedMainTitle]?.[
                      Object.keys(mainItems[selectedMainTitle] || {}).find(
                        (key) =>
                          mainItems[selectedMainTitle][key].teacherTypeId === selectedSubTitleId
                      ) || ""
                    ]?.items[1] || []
                  ).map((item: [string, number], index: number) => (
                    <div
                      key={index}
                      onClick={handleSubItemClick}
                      className={`
                        ${item[1] === 1 ? "text-amber-300 font-bold" : "ms-8"}
                        mb-4 cursor-pointer hover:opacity-80
                      `}
                    >
                      {item[0]}
                      {item[1] === 1 && ">"}
                    </div>
                  ))}
                </div>
                <div className="smd:w-1/3">
                  {(
                    mainItems[selectedMainTitle]?.[
                      Object.keys(mainItems[selectedMainTitle] || {}).find(
                        (key) =>
                          mainItems[selectedMainTitle][key].teacherTypeId === selectedSubTitleId
                      ) || ""
                    ]?.items[2] || []
                  ).map((item: [string, number], index: number) => (
                    <div
                      key={index}
                      onClick={handleSubItemClick}
                      className={`
                        ${item[1] === 1 ? "text-amber-300 font-bold" : "ms-8"}
                        mb-4 cursor-pointer hover:opacity-80
                      `}
                    >
                      {item[0]}
                      {item[1] === 1 && ">"}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(DropDownMenu);