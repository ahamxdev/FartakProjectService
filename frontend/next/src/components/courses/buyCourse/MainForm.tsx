"use client";
import { lazy, memo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Connector, StepIcon } from "@/utils/stepper";

const FirstForm = lazy(
	() => import("@/components/courses/buyCourse/FirstForm"),
);
const SecondForm = lazy(
	() => import("@/components/courses/buyCourse/SecondForm"),
);

const MainForm = () => {
	const t = useTranslations("BuyCourseForm");
	const [currentStep, setCurrentStep] = useState(0);
	const [canGoStep, setSteps] = useState<true[]>([true]);

	return (
		<div className="w-full overflow-hidden">
			<Stepper
				alternativeLabel
				activeStep={currentStep}
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
			<motion.div className="max-w-5xl w-full mx-auto h-[600px]">
				<AnimatePresence mode="wait">
					{currentStep === 0 && (
						<motion.div
							key="step-0"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}>
							<FirstForm completeForm={setSteps} />
						</motion.div>
					)}

					{currentStep === 1 && (
						<motion.div
							key="step-1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}>
							<SecondForm />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default memo(MainForm);
