import React from 'react'
import InputCheckbox from './InputCheckbox'

const RegisterFormtepOne = () => {
      return (
            <>
                  <div className='px-10 py-6 flex flex-col gap-6'>
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-16 gap-8 w-full">
                              <div className="flex flex-col gap-8 lg:w-[33%] w-full">
                                    <span className='text-xl font-bold text-[#000]'>حوزه فعالیت سایت</span>
                                    <button className='rounded-lg border-[2px] border-[#1E1E1E] px-3 py-1 w-full flex justify-between items-center text-base bg-[#EEF5FF] font-normal cursor-pointer text-[#00000080]'>
                                          حوزه فعالیت
                                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.47852L6 5.47852L11 1.47852" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                    </button>
                                    <textarea className="h-[120px] rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='حوزه فعالیت سایت خود را بنویسید' ></textarea>
                              </div>
                              <div className="flex flex-col gap-8 lg:w-[66%] w-full">
                                    <span className='text-xl font-bold text-[#000]'>قالب سایت</span>
                                    <div className="flex justify-between items-center gap-6">
                                          <InputCheckbox label={"قالب آماده"} />
                                          <InputCheckbox label={"قالب اختصاصی"} />
                                          <InputCheckbox label={"نمیدانم"} />
                                    </div>
                                    <textarea className="h-[120px] rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='حوزه فعالیت سایت خود را بنویسید' ></textarea>
                              </div>
                        </div>
                        <div className='w-full flex flex-col gap-5'>
                              <span className='md:text-xl text-base font-bold text-[#000]'>سیستم مدیریت محتوا (CMS)</span>
                              <div className="flex justify-between flex-wrap items-center gap-6">
                                    <InputCheckbox label={"وردپرس"} />
                                    <InputCheckbox label={"پرستا شاپ"} />
                                    <InputCheckbox label={"دروپال"} />
                                    <InputCheckbox label={"جوملا"} />
                                    <InputCheckbox label={"مجنتو"} />
                                    <InputCheckbox label={"نمیدانم"} />
                              </div>
                              <textarea className="h-[70px] rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal flex items-center bg-[#EEF5FF] border-[#1E1E1E]" placeholder='توضیحات سیستم مدیریت محتوای سایت خود را بنویسید'></textarea>
                        </div>
                        <div className='w-full flex md:flex-row flex-col justify-between gap-5'>
                              <div className="flex flex-col gap-5">
                                    <span className='md:text-xl text-base font-bold text-[#000]'>اپلیکیشن موبایل هم نیاز دارید؟</span>
                                    <div className="flex justify-between items-center gap-6">
                                          <InputCheckbox label={"بله"} />
                                          <InputCheckbox label={"خیر"} />
                                    </div>
                              </div>
                              <button className='shadow-md bg-[#1D40D7] flex items-center gap-4 text-white rounded-lg md:text-lg text-sm font-bold md:px-10 px-5 py-2 cursor-pointer md:self-end self-center'>
                                    مرحله بعد
                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5 1L1 6L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                        </div>
                  </div>
            </>
      )
}

export default RegisterFormtepOne