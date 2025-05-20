export function toPersianDigits(input: string | number) {
	return input.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}

export function toPersianPrice(input: string | number): string {
	const englishNumber = input.toString();

	// جدا کردن بخش اعشاری (اگه وجود داشته باشه)
	const [integerPart, decimalPart] = englishNumber.split(".");

	// تبدیل بخش عدد صحیح به فارسی + کاماگذاری سه‌رقمی
	const withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// تبدیل به عدد فارسی
	const persianDigits = withCommas.replace(
		/\d/g,
		(d) => "۰۱۲۳۴۵۶۷۸۹"[+d],
	);

	// اگر عدد اعشاری هم بود، اونم تبدیل کن
	if (decimalPart) {
		const persianDecimal = decimalPart.replace(
			/\d/g,
			(d) => "۰۱۲۳۴۵۶۷۸۹"[+d],
		);
		return `${persianDigits}٫${persianDecimal}`; // استفاده از "٫" به جای "."
	}

	return persianDigits;
}
export function fromPersianDigits(input: string): string {
	// تبدیل اعداد فارسی به انگلیسی
	const englishDigits = input.replace(/[۰-۹]/g, (d) =>
		"۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString(),
	);

	// حذف کاما (، یا ,) و تبدیل ممیز فارسی به .
	return englishDigits.replace(/[,،]/g, "").replace(/٫/g, ".");
}
