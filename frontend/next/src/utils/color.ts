export function getTextColor(backgroundColor: string): string {
	// حذف # در صورت وجود
	if (backgroundColor.startsWith("#")) {
		backgroundColor = backgroundColor.slice(1);
	}

	// رنگ کوتاه مثل #fff رو به #ffffff تبدیل می‌کنیم
	if (backgroundColor.length === 3) {
		backgroundColor = backgroundColor
			.split("")
			.map((c) => c + c)
			.join("");
	}

	// تبدیل به مقادیر عددی R، G، B
	const r = parseInt(backgroundColor.substring(0, 2), 16);
	const g = parseInt(backgroundColor.substring(2, 4), 16);
	const b = parseInt(backgroundColor.substring(4, 6), 16);

	// محاسبه روشنایی نسبی (luminance) با فرمول استاندارد
	const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

	// اگر روشن‌تر از یه آستانه بود (مثلاً 186)، همون رنگ رو بده، وگرنه سفید
	return luminance > 186 ? `#${backgroundColor}` : "#fbfbfb";
}
