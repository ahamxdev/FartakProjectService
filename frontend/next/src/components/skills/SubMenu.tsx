// import React from "react";

// type ItemType = {
//   projectCategoryId?: number;
//   title?: string;
//   projectCategoryParentId?: number;
//   projectHashtagId?: number;
//   projectHashtagParentId?: number;
// };
// const SubMenu = ({
//   items,
//   isSubMenuOpen,
//   setProjectSkillId,
//   setIsSubMenuOpen,
//   setProjectSkillTitle,
// }: {
//   items: ItemType[];
//   isSubMenuOpen: boolean;
//   setProjectSkillId: (value: number) => void;
//   setIsSubMenuOpen: (value: boolean) => void;
//   setProjectSkillTitle: (value: string) => void;
// }) => {
//   return (
//     <>
//       <ul
//         className={`absolute top-[105%] z-50 left-2 right-2 flex flex-col gap-2 bg-white rounded-sm transition-all duration-100 ${
//           isSubMenuOpen ? "h-auto py-1 px-4" : "h-0 py-0 px-0"
//         }`}
//         id="category-submenu"
//       >
//         {items?.map((item, index) => (
//           <li
//             className={`text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000] ${
//               isSubMenuOpen ? "block" : "hidden"
//             } `}
//             key={index}
//             onClick={() => {
//               // setProjectSkillId(item.projectTypeId);
//               setProjectSkillId(item.projectCategoryId ? item.projectCategoryId : item.projectHashtagParentId);
//               setIsSubMenuOpen(false);
//               setProjectSkillTitle(item.title);
//             }}
//           >
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default SubMenu;

import React from "react";

type ItemType = {
  projectCategoryId?: number;
  title?: string;
  // projectCategoryParentId?: number;
  projectHashtagId?: number;
  projectSkillId?: number;
  // projectHashtagParentId?: number;
};

type SubMenuProps = {
  items: ItemType[];
  isSubMenuOpen: boolean;
  setProjectSkillId: (value: number) => void;
  setIsSubMenuOpen: (value: boolean) => void;
  setProjectSkillTitle: (value: string) => void;
};

const SubMenu: React.FC<SubMenuProps> = ({
  items,
  isSubMenuOpen,
  setProjectSkillId,
  setIsSubMenuOpen,
  setProjectSkillTitle,
}) => {
  return (
    <ul
      className={`absolute top-[105%] overflow-y-auto z-50 left-2 right-2 flex flex-col gap-2 bg-white rounded-sm transition-all duration-100 ${
        isSubMenuOpen ? `${items.length > 0 ? "h-[200px] py-1 px-4" : "h-[20px] py-0 px-0"}` : "h-0 py-0 px-0"
      }`}
      id="category-submenu"
    >
      {isSubMenuOpen &&
        items.map((item, index) => {
          const id =
            item.projectCategoryId ??
            // item.projectHashtagParentId ??
            // item.projectCategoryParentId ??
            item.projectHashtagId ??
            item.projectSkillId;

          return (
            <li
              key={id ?? index}
              className="text-sm cursor-pointer hover:bg-zinc-600 rounded-md transition-all duration-75 hover:text-white py-2 px-2 font-bold text-[#000]"
              onClick={() => {
                if (typeof id === "number") {
                  setProjectSkillId(id);
                }
                setIsSubMenuOpen(false);
                setProjectSkillTitle(item.title ?? "");
              }}
            >
              {item.title}
            </li>
          );
        })}
    </ul>
  );
};

export default SubMenu;
