import React from 'react'

const RegisterFormtepFour = () => {
      return (
            <>
                  <div className='px-10 py-6 flex flex-col gap-6 w-full'>
                        <span className='md:text-xl text-base font-bold text-[#000]'>سایر ویژگی ها یا توضیحات اضافی (اختیاری)</span>
                        <textarea className="md:h-[250px] h-[150px] w-full flex rounded-lg border-[2px] p-3 placeholder:text-sm placeholder:text-[#787878] placeholder:font-normal bg-[#EEF5FF] border-[#1E1E1E]" placeholder='حوزه فعالیت سایت خود را بنویسید' ></textarea>
                        <div className="flex justify-end gap-3 items-center my-3">
                              <button className='shadow-md bg-[#D9EEFF] flex items-center gap-4 text-black rounded-lg md:text-lg font-bold text-sm md:px-10 px-5 py-2 cursor-pointer self-end'>
                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L5 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    مرحله قبل
                              </button>
                              <button className='shadow-md bg-[#1D40D7] flex items-center gap-4 text-white rounded-lg md:text-lg font-bold text-sm md:px-10 px-5 py-2 cursor-pointer self-end'>
                                    ثبت پروژه
                                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5 1L1 6L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                        </div>
                  </div>
            </>
      )
}

export default RegisterFormtepFour