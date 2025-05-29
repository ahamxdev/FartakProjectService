import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type ActionsButtons = "goToTeacherResume" | "empty";

export const buttonActions = {
	goToTeacherResume: (router: AppRouterInstance) => {
		router.replace("/teacherResume/1");
	},
	empty: () => {},
};
