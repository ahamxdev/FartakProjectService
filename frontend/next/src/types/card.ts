import { StaticImageData } from "next/image";

export interface ProjectCardType {
	title: string;
	description: string;
	priceRange: string;
	createDate: string;
	key?: number;
}

export interface AboutUsCommentType {
	description: string;
	fullName: string;
	profile: StaticImageData;
}

export interface TeacherCardType {
	fullName?: string;
	profile?: StaticImageData;
	role?: string;
	star?: number;
	description?: string;
}

export interface CourseCardType {
	profile: StaticImageData;
	teacherName: string;
	title: string;
	id: string;
	locale: string; 
	reshte: string;
	price: string;
	studentCount: number;
	courseDuration: number;
	star: number;
}

// export interface DropDownMenuItemsType {
// 	[title: string]: { [key: string]: string[] } | string[];
// }

// تعریف تایپ برای زوج [string, number]
type ItemPair = [string, number];

// تعریف تایپ برای آرایه‌های تو در تو (مثل بخش "کسب و کار")
type arrySubCategory = ItemPair[][];

// تعریف تایپ برای بخش "دبستان"
type simpleSubCategory = string[];

// تعریف تایپ اصلی برای کل آبجکت
export interface DropDownMenuItemsType {
  [key: string]: {
    [subKey: string]: arrySubCategory | simpleSubCategory;
  };
}
