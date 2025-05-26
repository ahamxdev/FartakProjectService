import { StepIconProps, styled } from "@mui/material";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { lazy } from "react";

const IconEditForm = lazy(() => import("@/icons/courses/IconEditForm"));
const IconNoteBook = lazy(() => import("@/icons/courses/IconNoteBook"));
const IconUserRectangle = lazy(
	() => import("@/icons/courses/IconUserRectangle"),
);

const StepIconRoot = styled("div")<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
	backgroundColor: "#ccc",
	zIndex: 1,
	color: "#fff",
	padding: "10px",
	display: "flex",
	borderRadius: "100%",
	justifyContent: "center",
	alignItems: "center",
	opacity: 0.5,
	...theme.applyStyles("dark", {
		backgroundColor: "#1d40d7",
	}),
	variants: [
		{
			props: ({ ownerState }) => ownerState.active,
			style: {
				backgroundColor: "#1d40d7",
				boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
				opacity: 1,
			},
		},
		{
			props: ({ ownerState }) => ownerState.completed,
			style: {
				backgroundColor: "#1d40d7",
				opacity: 1,
			},
		},
	],
}));

export function StepIcon(props: StepIconProps) {
	const { active, completed, className } = props;
	const icons: { [index: string]: React.ReactElement<unknown> } = {
		1: <IconEditForm />,
		2: <IconNoteBook />,
		3: <IconUserRectangle />,
	};
	return (
		<StepIconRoot
			ownerState={{ completed, active }}
			className={className}>
			{icons[String(props.icon)]}
		</StepIconRoot>
	);
}

export const Connector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 40,
		left: "calc(-50% + 65px)",
		right: "calc(50% + 65px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#1d40d7",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#1d40d7",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#eaeaf0",
		borderTopWidth: 3,
		borderRadius: "100%",
		...theme.applyStyles("dark", {
			borderColor: theme.palette.grey[800],
		}),
	},
}));
