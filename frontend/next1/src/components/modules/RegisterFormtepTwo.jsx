import React from 'react'
import InputCheckbox from './InputCheckbox'

const RegisterFormtepTwo = () => {
      return (
            <>
                  <div className='px-10 py-6 flex flex-col gap-6'>
                        <div className="flex flex-col gap-6">
                              <span className='md:text-xl text-base font-bold text-[#000]'>بودجه مد نظر</span>
                              <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
                                    <InputCheckbox label={"2 تا 5 میلیون"} />
                                    <InputCheckbox label={"5 تا 10 میلیون"} />
                                    <InputCheckbox label={"10 تا 20 میلیون"} />
                                    <InputCheckbox label={"20 تا 50 میلیون"} />
                                    <InputCheckbox label={"توسط فرتاک تعیین شود"} />
                                    <InputCheckbox label={"بازه دستی وارد کنید"} />
                              </div>
                              <div className="flex justify-between md:flex-row flex-col items-center md:gap-20 gap-8">
                                    <textarea className="h-[55px] w-full md:w-[50%] flex-1 flex rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='کمترین بودجه (تومان)' ></textarea>
                                    <textarea className="h-[55px] w-full md:w-[50%] flex-1 flex rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='بیشترین بودجه (تومان)' ></textarea>
                              </div>
                        </div>

                        <div className="flex flex-col gap-6">
                              <span className='md:text-xl text-base font-bold text-[#000]'>حداکثر زمان مد نظر برای تحویل پروژه</span>
                              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                                    <InputCheckbox label={"7 روز"} />
                                    <InputCheckbox label={"10 روز"} />
                                    <InputCheckbox label={"15 روز"} />
                                    <InputCheckbox label={"20 روز"} />
                                    <InputCheckbox label={"30 روز"} />
                                    <InputCheckbox label={"بازه دستی (وارد کنید)"} />
                                    <textarea className="h-[55px] col-span-2 rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='تعداد روز' ></textarea>
                              </div>
                        </div>

                        <div className="flex justify-end gap-3 items-center my-3">
                              <button className='shadow-md bg-[#D9EEFF] flex items-center gap-4 text-black rounded-lg md:text-lg font-bold text-sm md:px-10 px-5 py-2 cursor-pointer self-end'>
                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L5 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    مرحله قبل
                              </button>
                              <button className='shadow-md bg-[#1D40D7] flex items-center gap-4 text-white rounded-lg md:text-lg font-bold text-sm md:px-10 px-5 py-2 cursor-pointer self-end'>
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

export default RegisterFormtepTwo