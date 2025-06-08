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

export interface DropDownMenuItemsType {
	[title: string]: string[];
}
