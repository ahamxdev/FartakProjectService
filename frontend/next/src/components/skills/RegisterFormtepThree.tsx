import React from 'react'
import InputCheckbox from '../InputCheckbox'

const RegisterFormtepThree = () => {
      return (
            <>
                  <div className='px-10 py-6 flex flex-col gap-6 w-full'>
                        <span className='md:text-xl text-base font-bold text-[#000]'>امکاناتی که می‌خواهید در سایت‌تان داشته باشید، انتخاب کنید. اگر امکانات اضافه ای می‌خواهید، در بخش توضیحات بنویسید.</span>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6">
                              <InputCheckbox label={"امکان تعریف زیرمحصول (بر اساس رنگ، اندازه و…)"} />
                              <InputCheckbox label={"پیشنهاد های ویژه"} />
                              <InputCheckbox label={"بخش اخبار و مقالات"} />
                              <InputCheckbox label={"امکان تعریف زیرمحصول (بر اساس رنگ، اندازه و…)"} />
                              <InputCheckbox label={"پیشنهاد های ویژه"} />
                              <InputCheckbox label={"بخش اخبار و مقالات"} />
                              <InputCheckbox label={"امکان تعریف زیرمحصول (بر اساس رنگ، اندازه و…)"} />
                              <InputCheckbox label={"پیشنهاد های ویژه"} />
                              <InputCheckbox label={"بخش اخبار و مقالات"} />
                              <InputCheckbox label={"امکان تعریف زیرمحصول (بر اساس رنگ، اندازه و…)"} />
                              <InputCheckbox label={"پیشنهاد های ویژه"} />
                              <InputCheckbox label={"بخش اخبار و مقالات"} />
                              <InputCheckbox label={"امکان تعریف زیرمحصول (بر اساس رنگ، اندازه و…)"} />
                              <InputCheckbox label={"پیشنهاد های ویژه"} />
                              <InputCheckbox label={"بخش اخبار و مقالات"} />
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

export default RegisterFormtepThree

