import React from 'react'

const QualityProjectBox = ({ type }) => {
      return (
            <div className={`${type === "gold" ? "bg-[#FFFBF4]" : type === "silver" ? "bg-[#E6E4E3] scale-105" : type === "bronze" && "bg-[#FFD6C4]"} flex flex-col gap-3 border-[2px] border-[#1e1e1e] py-4 px-6 rounded-lg`}>
                  <span className={`${type === "gold" ? "text-[#FFC107]" : type === "silver" ? "text-[#4F535D]" : type === "bronze" && "text-[#CE5A29]"} font-bold md:text-xl text-sm text-center`}>کیفیت {type === "gold" ? "طلایی" : type === "silver" ? "نقره ای" : type === "bronze" && "برنزی"}</span>
                  <span className='font-bold md:text-xl text-sm text-right'>مزایا</span>
                  <div className="flex flex-col gap-5 my-3">
                        <div className="flex items-center gap-2">
                              <div className="flex justify-center items-center border-[2px] border-[#000] w-6 h-6 rounded-lg">1</div>
                              <span className='text-sm font-normal text-[#000]'>مناسب ترجمه متون و نه چندان دشوار و تخصصی</span>
                        </div>
                        <div className="flex items-center gap-2">
                              <div className="flex justify-center items-center border-[2px] border-[#000] w-6 h-6 rounded-lg">2</div>
                              <span className='text-sm font-normal text-[#000]'>مترجمان کم تجربه با مهارت های زبانی خوب</span>
                        </div>
                        <div className="flex items-center gap-2">
                              <div className="flex justify-center items-center border-[2px] border-[#000] w-6 h-6 rounded-lg">3</div>
                              <span className='text-sm font-normal text-[#000]'>کیفیت ترجمه در حد خوب</span>
                        </div>
                  </div>
                  <button className={`${type === "gold" ? "bg-[#FFC107]" : type === "silver" ? "bg-[#4F535D]" : type === "bronze" && "bg-[#CE5A29]"} rounded-lg flex justify-center items-center py-2 md:text-xl text-base font-bold text-white w-full`}>ثبت سفارش</button>
            </div>
      )
}

export default QualityProjectBox