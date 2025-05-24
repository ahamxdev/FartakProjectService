import { z } from "zod/v4";

export const firstBuyCourseFormSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	countOfCustomers: z.number(),
	region: z
		.union([z.literal(""), z.enum(["iran", "outOfIran"])])
		.refine((val) => val !== ""),
	language: z
		.union([z.literal(""), z.enum(["persion", "english"])])
		.refine((val) => val !== ""),
	forWho: z
		.union([z.literal(""), z.enum(["mySelf", "mySon", "other"])])
		.refine((val) => val !== ""),
	level: z
		.union([z.literal(""), z.enum(["weak", "middle", "good", "nice"])])
		.refine((val) => val !== ""),
	goal: z
		.union([
			z.literal(""),
			z.enum(["learningFromBase", "resolveProblem", "practise"]),
		])
		.refine((val) => val !== ""),
});
