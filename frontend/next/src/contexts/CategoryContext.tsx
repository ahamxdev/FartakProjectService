// contexts/CategoryContext.tsx
"use client";
import { api } from "@/utils/api";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ItemType = {
  projectCategoryId: number;
  title: string;
  projectCategoryParentId: number;
};

interface CategoryContextType {
  category: ItemType[];
  //   loading: boolean;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<ItemType[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        api("/api/ProjectCategories/GetAllParent", "POST")
          .then((res) => {
            if (res.status == 200) {
              return res.json();
            }
          })
          .then((data) => {
            console.log(data);
            setCategory(data.projectCategories);
          });
      } catch (error) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error);
      }
      //  finally {
      //   setLoading(false);
      // }
    };

    fetchData();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory باید داخل CategoryProvider استفاده شود");
  }
  return context;
};
