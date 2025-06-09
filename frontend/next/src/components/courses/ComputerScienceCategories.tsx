import React from "react";
import Image from "next/image";

const categories = [
  
  {
    title: "طراحی و گرافیک",
    icon: "/Graphics.png",
    tags: [],
    expanded: false
  },
  {
    title: "اقتصاد و حسابداری",
    icon: "/economy.png",
    tags: [],
    expanded: false
  },
  {
    title: "زبان خارجی",
    icon: "/english.png",
    tags: [],
    expanded: false
  },
  {
    title: "دانشگاهی",
    icon: "/graduation.png",
    tags: [],
    expanded: false
  },
  {
    title: "سایر دسته ها",
    icon: "/other.png",
    tags: [],
    expanded: false
  }
];

const ComputerScienceCategories: React.FC = () => {
  return (
    <div className="my-8">
      <div className="space-y-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Image src={cat.icon} alt={cat.title} width={28} height={28} />
                <span className="font-bold text-lg">{cat.title}</span>
              </div>
              <span className="text-2xl">{cat.expanded ? "\u25B2" : "\u25BC"}</span>
            </div>
            {cat.expanded && cat.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-yellow-400 text-white px-4 py-1 rounded-full text-base font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerScienceCategories; 