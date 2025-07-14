import React from "react";

// type ItemType = {
//   projectTypeId: number;
//   title: string;
// };
type ItemType = {
  projectCategoryId: number;
  title: string;
  projectCategoryParentId: number;
};
const SubMenu = ({
  items,
  isSubMenuOpen,
  setProjectSkillId,
  setIsSubMenuOpen,
  setProjectSkillTitle,
}: {
  items: ItemType[];
  isSubMenuOpen: boolean;
  setProjectSkillId: (value: number) => void;
  setIsSubMenuOpen: (value: boolean) => void;
  setProjectSkillTitle: (value: string) => void;
}) => {
  return (
    <>
      <ul
        className={`absolute top-[105%] z-50 left-2 right-2 flex flex-col gap-2 bg-white rounded-sm transition-all duration-100 ${
          isSubMenuOpen ? "h-auto py-1 px-4" : "h-0 py-0 px-0"
        }`}
        id="category-submenu"
      >
        {items?.map((item, index) => (
          <li
            className={`text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000] ${
              isSubMenuOpen ? "block" : "hidden"
            } `}
            key={index}
            onClick={() => {
              // setProjectSkillId(item.projectTypeId);
              setProjectSkillId(item.projectCategoryId);
              setIsSubMenuOpen(false);
              setProjectSkillTitle(item.title);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};
export default SubMenu;
