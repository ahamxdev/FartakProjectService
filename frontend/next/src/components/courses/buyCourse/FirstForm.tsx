import { memo } from "react";
const FirstForm = () => {
	return (
		<>
			<div className="mt-10 px-20 flex flex-col gap-3 items-center">
				<div className="flex items-center justify-between w-[1229px] h-[68px] gap-3">
					<div className="w-[593px] h-[68px] border-2 rounded-[8px] grow flex items-center gap-8 px-5">
						<span className="text-[24px] font-[700] shrink-0">
							مکان خود را انتخاب کنید
						</span>
						<div className="flex justify-center items-center gap-14">
							<div className="flex gap-3">
								<input
									id="region1"
									type="radio"
									name="region"
								/>
								<label htmlFor="region1">ایران</label>
							</div>
							<div className="flex gap-3">
								<input
									id="region2"
									type="radio"
									name="region"
								/>
								<label htmlFor="region2">خارج از ایران</label>
							</div>
						</div>
					</div>
					<div className="w-[593px] h-[68px] border-2 rounded-[8px] grow flex items-center gap-8 px-5">
						<span className="text-[24px] font-[700] shrink-0">
							زبان تدریس خود را انتخاب کنید
						</span>
						<div className="flex justify-center items-center gap-14">
							<div className="flex gap-3">
								<input
									id="language1"
									type="radio"
									name="language"
								/>
								<label htmlFor="language1">فارسی</label>
							</div>
							<div className="flex gap-3">
								<input
									id="language2"
									type="radio"
									name="language"
								/>
								<label htmlFor="language2">انگلیسی</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center w-[1229px] h-[68px] gap-2">
					<div className="w-[744px] h-[68px] flex items-center gap-8 px-5 border-2 rounded-[8px]">
						<span className="text-[24px] font-[700] shrink-0">
							کلاس را برای چه کسی میخواهید ؟
						</span>
						<div className="flex justify-center items-center gap-14">
							<div className="flex gap-3">
								<input
									id="me"
									type="radio"
									name="forWho"
								/>
								<label htmlFor="me">خودم</label>
							</div>
							<div className="flex gap-3">
								<input
									id="mySon"
									type="radio"
									name="forWho"
								/>
								<label htmlFor="mySon">فرزندم</label>
							</div>
							<div className="flex gap-3">
								<input
									id="other"
									type="radio"
									name="forWho"
								/>
								<label htmlFor="other">دیگران</label>
							</div>
						</div>
					</div>

					<div className="w-[477px] relative h-[68px] border-2 rounded-[8px] flex items-center justify-between px-5">
						<span className="text-[24px] font-[700] shrink-0">
							تعداد شرکت کنندگان
						</span>
						<div className="flex items-center gap-1.5">
							<button className="rounded-full border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
								+
							</button>
							<input
								className="w-[32px] h-[32px] border-[1px] rounded-[4px]"
								type="text"
							/>
							<button className="rounded-full border-[1px] w-[20px] h-[20px] flex items-center justify-center pb-0.5">
								-
							</button>
						</div>
						<ul className="absolute list-disc text-[16px] list-inside -bottom-7 start-1 text-[#EA0017]">
							<li className="marker:relative marker:top-1">
								به ازای هر نفر 20 درصد به قیمت اضافه می شود
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mt-20 px-20 flex flex-col gap-3 items-center">
				<div className="w-[1229px] text-right">
					<span className="text-[24px] font-[700]">
						نام و نام خانوادگی را وارد کنید
					</span>
				</div>

				<div className="w-[1229px] h-[47px] flex gap-5">
					<input
						className="grow border-2 rounded-[8px] px-5"
						type="text"
						placeholder="نام"
					/>
					<input
						className="grow border-2 rounded-[8px] px-5"
						type="text"
						placeholder="نام خانوادگی"
					/>
				</div>

				<div className="w-[1229px] h-[68px] border-2 rounded-[8px] flex items-center">
					<span className="text-[24px] font-[700] px-5 pl-40">
						سطح شاگرد را انتخاب کنید
					</span>
					<div className="flex items-center justify-center gap-10">
						<div className="flex gap-3">
							<input
								type="radio"
								id="level1"
								name="level"
							/>
							<label htmlFor="level1">ضعیف</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								id="level2"
								name="level"
							/>
							<label htmlFor="level2">متوسط</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								id="level3"
								name="level"
							/>
							<label htmlFor="level3">خوب</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								id="level4"
								name="level"
							/>
							<label htmlFor="level4">عالی</label>
						</div>
					</div>
				</div>

				<div className="w-[1229px] h-[68px] border-2 rounded-[8px] flex items-center">
					<span className="text-[24px] font-[700] px-5 pl-20">
						هدف شما از گرفتن معلم در این درس چیست ؟
					</span>
					<div className="flex items-center justify-center gap-10">
						<div className="flex gap-3">
							<input
								type="radio"
								id="baseLearning"
								name="goal"
							/>
							<label htmlFor="baseLearning">آموزش از پایه</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								id="resolveProblem"
								name="goal"
							/>
							<label htmlFor="resolveProblem">
								رفع اشکال و آمادگی برای امتحان
							</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								id="practice"
								name="goal"
							/>
							<label htmlFor="practice">حل سوال</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(FirstForm);
