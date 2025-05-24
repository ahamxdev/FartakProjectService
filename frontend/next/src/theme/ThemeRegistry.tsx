// components/ThemeRegistry.tsx
"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { createEmotionCache } from "./emotion-cache";

const emotionCache = createEmotionCache();

export default function ThemeRegistry({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div dir="rtl">{children}</div>
			</ThemeProvider>
		</CacheProvider>
	);
}
