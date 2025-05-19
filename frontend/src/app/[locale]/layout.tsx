import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { memo, ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { yekan } from "../../fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
	title: "فرتاک",
	description: "وب سایت رسمی فرتاک",
};

const RootLayout = async ({
	children,
	params,
}: Readonly<{
	children: ReactNode;
	params: Promise<{ locale: string }>;
}>) => {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html
			bbai-tooltip-injected="true"
			className={`${yekan.variable}`}
			dir={locale === "fa" ? "rtl" : "ltr"}
			lang={locale}>
			<body className={`font-yekan antialiased select-none ms-auto`}>
				<NextIntlClientProvider locale={locale}>
					<AntdRegistry>
						<Header />
						{children}
						<Footer />
					</AntdRegistry>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default memo(RootLayout);
