"use client";
import { lazy, memo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Connector, StepIcon } from "@/utils/mui";
import { useForm } from "react-hook-form";
import { IFirstBuyCourseForm } from "@/types/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { firstBuyCourseFormSchema } from "@/zodObjects";

const FirstForm = lazy(
	() => import("@/components/courses/buyCourse/FirstForm"),
);
const SecondForm = lazy(
	() => import("@/components/courses/buyCourse/SecondForm"),
);
const ThirdForm = lazy(() => import("./ThirdForm"));

const MainForm = () => {
	const t = useTranslations("BuyCourseForm");
	const [currentStep, setCurrentStep] = useState(0);
	const [canGoStep, setSteps] = useState<true[]>([true]);

	const [educationBreadCrumbs, setEducationBreadCrumbs] = useState<
		string[]
	>([]);
	const [bussinesBreadCrumbs, setBussinesBreadCrumbs] = useState<
		string[]
	>([]);

	const {
		register: registerFirstForm,
		getValues: getValuesFirstForm,
		setValue: setValueFirstForm,
	} = useForm<IFirstBuyCourseForm>({
		resolver: zodResolver(
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			firstBuyCourseFormSchema,
		),
		defaultValues: {
			countOfCustomers: 1,
			firstName: "",
			forWho: "",
			goal: "",
			language: "",
			lastName: "",
			level: "",
			region: "",
		},
	});

	return (
		<div className="w-full overflow-hidden">
			<Stepper
				alternativeLabel
				activeStep={currentStep}
				className="max-w-5xl w-full mx-auto"
				connector={<Connector />}>
				{[
					{
						title: `${(1).toLocaleString("fa")}. ${t("info")}`,
						key: "info",
					},
					{
						title: `${(2).toLocaleString("fa")}. ${t("lessonSelection")}`,
						key: "lessonSelection",
					},
					{
						title: `${(3).toLocaleString("fa")}. ${t(
							"teacherSelection",
						)}`,
						key: "teacherSelection",
					},
				].map(({ title, key }, index) => (
					<Step key={key}>
						<StepLabel
							className={`${canGoStep[index] && "cursor-pointer"}`}
							onClick={() => {
								if (canGoStep[index]) setCurrentStep(index);
							}}
							StepIconComponent={StepIcon}>
							{title}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			<motion.div className="max-w-5xl w-full mx-auto">
				<AnimatePresence mode="wait">
					{currentStep === 0 && (
						<motion.div
							key="step-0"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}>
							<FirstForm
								setFormState={setCurrentStep}
								register={registerFirstForm}
								getValues={getValuesFirstForm}
								setValue={setValueFirstForm}
								completeForm={setSteps}
								setBussinesBreadCrumbs={setBussinesBreadCrumbs}
								setEducationBreadCrumbs={setEducationBreadCrumbs}
							/>
						</motion.div>
					)}

					{currentStep === 1 && (
						<motion.div
							key="step-1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}>
							<SecondForm
								setFormState={setCurrentStep}
								completeForm={setSteps}
								setBussinesBreadCrumbs={setBussinesBreadCrumbs}
								setEducationBreadCrumbs={setEducationBreadCrumbs}
								bussinesBreadCrumbs={bussinesBreadCrumbs}
								educationBreadCrumbs={educationBreadCrumbs}
							/>
						</motion.div>
					)}
					{currentStep === 2 && (
						<motion.div
							key="step-1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}>
							<ThirdForm />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default memo(MainForm);
